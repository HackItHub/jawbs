import { NextFunction, Request, Response } from "express";
import { ClientError } from "../libs";
import prisma from "../libs/prisma";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user ? req.user.id : undefined;
  const { firstName, lastName, phone, summary } = req.body;
  if (!firstName || !lastName || !phone || !userId) {
    throw new ClientError(400, "Improper format, please submit again");
  }
  try {
    const person = await prisma.person.create({
      data: { firstName, lastName, phone, summary, userId },
    });
    res.status(201).json("person added");
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

export default create;
