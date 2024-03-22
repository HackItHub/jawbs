import { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { ClientError } from "../libs/classes";
import { Auth, User, VerificationType } from "../types";
import { privateKey } from "../utils/environmental";
import prisma from "../libs/prisma";
import verificationEmail from "../libs/email-threads/verification-email";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as Partial<Auth>;

  // Throws error if credentials aren't found or if the password isn't strong enough
  try {
    if (!email || !password || password.length < 6) {
      throw new ClientError(400, "invalid login");
    }

    // Hashes the password and sends an email to the user for verification
    const hash = await argon2.hash(password);
    const verification: VerificationType | ClientError = await verificationEmail(email);

    // The verification will either create a verify/delete token successfully or return a ClientError
    if (verification instanceof ClientError) {
      throw verification;
    }

    const { oneTimeVerificationToken, oneTimeDeleteToken } = verification;

    // Guard just in case it sends something else
    if (!oneTimeVerificationToken || !oneTimeDeleteToken) {
      throw new ClientError(500, "something went wrong");
    }

    // Creates user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hash,
      },
    });

    // Creates verification row
    await prisma.verificationCode.create({
      data: {
        userId: newUser.id,
        oneTimeVerificationToken,
        oneTimeDeleteToken,
      },
    });

    res.status(201).json(newUser);
  } catch (err) {
    // Throws an error if the user already exists
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        const clientError = new ClientError(409, "user already exists");
        next(clientError);
        return;
      }
    }

    // Throws an error for all other instances
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as Partial<Auth>;

  // Throws error if password doesn't pass check or any credentials are missing
  try {
    if (!email || !password || password.length < 6) {
      throw new ClientError(400, "invalid login");
    }
    const user: User | null = await prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        password: true,
        isActivated: true,
        id: true,
      },
    });

    // Throws error when user isn't found
    if (!user) {
      throw new ClientError(404, "invalid credentials");
    }

    // Throws error if argon can't verify
    if (!(await argon2.verify(user.password, password))) {
      throw new ClientError(401, "invalid credentials");
    }

    // Creates payload to sign and send to the frontend
    const payload = { email, id: user.id };
    const token = jwt.sign(payload, privateKey, { algorithm: "RS256" });

    if (!token) {
      throw new ClientError(500, "something went wrong");
    }

    res.status(200).json({ token, isActivated: user.isActivated });
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const verification = async (req: Request, res: Response, next: NextFunction) => {
  const { oneTimeVerificationToken, oneTimeDeleteToken } = req.query;

  try {
    // If both values are provided throw an error for improper formatting
    if (oneTimeDeleteToken && oneTimeVerificationToken) {
      throw new ClientError(400, "should be one token");
    }

    // If neither of the parameters exist throw an improper formatting
    if (!oneTimeVerificationToken && !oneTimeDeleteToken) {
      throw new ClientError(400, "missing verification token");
    }

    // If the one time verification token exist search for the token, finds the user, activates the account
    // and deleting presiding verification row
    if (typeof oneTimeVerificationToken === "string") {
      const verificationCode = await prisma.verificationCode.findFirst({
        where: {
          oneTimeVerificationToken,
        },
      });

      // Throws an error when verification row isn't found
      if (!verificationCode) {
        throw new ClientError(404, "verification has already been logged");
      }

      // Updates the users isActivated status to allow him to continue to fill out his forms
      const user = await prisma.user.update({
        where: {
          id: verificationCode.userId,
        },
        data: {
          isActivated: true,
        },
      });

      // Throws an error if user isn't found
      if (!user) {
        throw new ClientError(404, "user doesn't exist");
      }

      // Deletes verification
      await prisma.verificationCode.delete({
        where: {
          id: verificationCode.id,
        },
      });

      res.status(200).json({ isActivated: user.isActivated });
      return;
    }

    // Deletes the account and removes the verification code
    if (typeof oneTimeDeleteToken === "string") {
      const verificationCode = await prisma.verificationCode.findFirst({
        where: {
          oneTimeDeleteToken,
        },
      });

      // Throws 404 if verification isn't found
      if (!verificationCode) {
        throw new ClientError(
          404,
          "verification code no longer exists and verification has been logged",
        );
      }

      // Deletes the verification code and the user
      await prisma.user.delete({ where: { id: verificationCode.userId } });
      await prisma.verificationCode.delete({ where: { id: verificationCode.id } });
      res.status(200).json("user has been deleted");
      return;
    }
    throw new ClientError(500, "something went wrong");
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

export default { signIn, signUp, verification };
