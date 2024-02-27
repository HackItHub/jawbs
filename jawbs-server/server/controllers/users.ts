import { NextFunction, Request, Response } from "express";
import prisma from "../libs/prisma.js";
import { ClientError } from "../middlewares";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, phone, summary } = req.body;
  if (!firstName || !lastName || !email || !phone) {
    throw new ClientError(400, "Improper format, please submit again");
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
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const read = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    throw new ClientError(400, "Id is needed");
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new ClientError(404, "User not found");
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const readPortfolio = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  if (!id) {
    throw new ClientError(400, "Improper format");
  }

  try {
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
      throw new ClientError(404, "User not found");
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const readAll = async (__: Request, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.findMany();
    if (!user) {
      throw new ClientError(404, "No users found");
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!id) {
    throw new ClientError(400, "Improper format");
  }
  try {
    const updates = await req.body;
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { ...updates },
    });

    if (!updatedUser) {
      throw new ClientError(404, "User not found");
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const destroy = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    throw new ClientError(400, "Improper format");
  }
  try {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });
    if (!deletedUser) {
      throw new ClientError(404, "User not found");
    }
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
  readPortfolio,
  readAll,
  update,
  destroy,
};
