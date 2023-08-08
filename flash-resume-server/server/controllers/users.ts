import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const create = async (req: Request, res: Response) => {
  try {
    const newUser = await prisma.user.create({ data: req.body });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const list = async (_: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(404).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const read = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const updates = await req.body;
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { ...updates },
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const deletedUser = await prisma.user.delete({
      where: { email },
    });
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

export default {
  create,
  list,
  read,
  update,
  destroy,
};
