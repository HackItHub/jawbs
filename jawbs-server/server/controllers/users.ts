import { Request, Response } from "express";
import prisma from "../libs/prisma.js";

const create = async (req: Request, res: Response) => {
  const { firstName, lastName, email, phone, summary } = req.body;
  if (!firstName || !lastName || !email || !phone) {
    res.status(400).json("Improper format");
    return;
  }
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        person: {
          create: {
            firstName,
            lastName,
            phone,
            summary,
          },
        },
      },
    });
    res.status(201).json(newUser.id);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const read = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const readPortfolio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
      include: {
        person: true,
        address: true,
        education: {
          include: {
            schools: {
              include: {
                address: true,
              },
            },
          },
        },
        experience: {
          include: {
            address: true,
          },
        },
      },
    });
    if (!user) {
      res.status(404).json("User not found");
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const readAll = async (__: Request, res: Response) => {
  try {
    const user = await prisma.user.findMany();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = await req.body;
    const updatedUser = await prisma.user.update({
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
    const { id } = req.params;
    const deletedUser = await prisma.user.delete({
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
  read,
  readPortfolio,
  readAll,
  update,
  destroy,
};
