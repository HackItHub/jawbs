import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const create = async (req: Request, res: Response) => {
  try {
    const newAddress = await prisma.address.create({ data: req.body });
    res.status(201).json(newAddress);
  } catch (err) {
    res.status(400).json({ message: `${err}hello` });
  } finally {
    await prisma.$disconnect();
  }
};

const list = async (_: Request, res: Response) => {
  try {
    const allAddress = await prisma.address.findMany();
    res.status(200).json(allAddress);
  } catch (err) {
    res.status(404).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const read = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const address = await prisma.address.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json(address);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updates = await req.body;
    const updatedUser = await prisma.address.update({
      where: { id },
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
    const id = Number(req.params.id);
    const deletedUser = await prisma.address.delete({
      where: { id },
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
