import { NextFunction, Request, Response } from "express";
import prisma from "../libs/prisma.js";
import ClientError from "../libs/client-error.js";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user ? req.user.id : undefined;
  const address = { ...req.body, userId };

  try {
    if (!userId) {
      throw new ClientError(400, "invalid credentials");
    }
    const newAddress = await prisma.address.create({ data: address });
    res.status(201).json(newAddress);
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const read = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user ? req.user.id : undefined;

  try {
    if (!userId) {
      throw new ClientError(400, "invalid credentials");
    }
    const address = await prisma.address.findUnique({
      where: {
        userId,
      },
    });
    if (!address) {
      throw new ClientError(404, "user not found");
    }

    res.status(200).json(address);
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.user ? req.user.id : undefined;

  try {
    if (!id) {
      throw new ClientError(400, "invalid credentials");
    }
    const updates = req.body;
    const updatedUser = await prisma.address.update({
      where: { id },
      data: { ...updates },
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const destroy = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.user ? req.user.id : undefined;
  try {
    const deletedUser = await prisma.address.delete({
      where: { id },
    });

    res.status(200).json(deletedUser);
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

export default {
  create,
  read,
  update,
  destroy,
};
