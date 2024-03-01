import { NextFunction, Request, Response } from "express";
import { ClientError } from "../libs";
import prisma from "../libs/prisma";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, phone, summary, userId } = req.body;
  if (!firstName || !lastName || !phone) {
    throw new ClientError(400, "Improper format, please submit again");
  }
  try {
    const newUser = await prisma.person.create({
      data: { firstName, lastName, phone, summary, userId },
    });
    res.status(201).json(newUser.id);
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

export default create;
