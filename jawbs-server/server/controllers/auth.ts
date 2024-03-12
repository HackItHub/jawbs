import { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { ClientError } from "../libs/classes";
import { Auth, User } from "../types";
import { privateKey } from "../utils/environmental";
import prisma from "../libs/prisma";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as Partial<Auth>;
  try {
    if (!email || !password || password.length < 6) {
      throw new ClientError(400, "invalid login");
    }

    const hash = await argon2.hash(password);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hash,
      },
    });
    res.status(201).json(newUser);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (err.code === "P2002") {
        const clientError = new ClientError(409, "user already exists");
        next(clientError);
        return;
      }
    }
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as Partial<Auth>;

  try {
    if (!email || !password || password.length < 6) {
      throw new ClientError(400, "invalid login");
    }
    const user: User | null = await prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        password: true,
        id: true,
      },
    });

    if (!user) {
      throw new ClientError(404, "invalid credentials");
    }
    if (!(await argon2.verify(user.password, password))) {
      throw new ClientError(401, "invalid credentials");
    }

    const payload = { email, id: user.id };
    const token = jwt.sign(payload, privateKey, { algorithm: "RS256" });

    if (!token) {
      throw new ClientError(500, "something went wrong");
    }

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

export default { signIn, signUp };
