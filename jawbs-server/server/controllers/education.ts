import { NextFunction, Request, Response } from "express";
import prisma from "../libs/prisma.js";
import { School } from "../types/index.js";
import ClientError from "../libs/classes/ClientError.js";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user ? req.user.id : undefined;

  const { educationLevel, schools } = req.body;

  const schoolList: any = [];

  try {
    if (!userId) {
      throw new ClientError(400, "invalid credentials");
    }

    const newEducation = await prisma.education.create({
      data: { userId, educationLevel },
    });
    if (schools.length) {
      schools.forEach((school: School) => {
        schoolList.push({
          name: school.name,
          diploma: school.diploma,
          startYear: school.startYear,
          endYear: school.endYear,
          startMonth: school.startMonth,
          endMonth: school.endMonth,
          address: {
            create: {
              addressLine1: school.address?.addressLine1,
              addressLine2: school.address?.addressLine2,
              zipCode: school.address?.zipCode,
              city: school.address?.city,
              state: school.address?.state,
              country: school.address?.country,
            },
          },
        });
      });
    }

    for (const school of schoolList) {
      await prisma.school.create({
        data: {
          educationId: newEducation.id,
          ...school,
        },
      });
    }

    res.status(201).json("education created");
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
      throw new ClientError(400, "Invalid Credentials");
    }
    const education = await prisma.education.findUnique({
      where: {
        userId,
      },
    });
    if (!education) {
      throw new ClientError(404, "doesn't exist");
    }
    res.status(200).json(education);
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.user ? req.user.id : undefined;
    if (!id) {
      throw new ClientError(400, "Invalid Credentials");
    }
    const updates = await req.body;
    const updatedUser = await prisma.user.update({
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
  const userId = req.user ? req.user.id : undefined;
  try {
    if (!userId) {
      throw new ClientError(400, "Invalid Credentials");
    }
    const deleteEducation = await prisma.education.delete({
      where: { userId },
    });
    res.status(200).json(deleteEducation);
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
