import { Request, Response } from "express";
import prisma from "../libs/prisma.js";
import { School } from "../interfaces/index.js";

const create = async (req: Request, res: Response) => {
  const { userId, educationLevel, schools } = req.body;

  const schoolList: any = [];

  // Creates new education to retrieve the education ID
  try {
    const newEducation = await prisma.education.create({
      data: { userId, educationLevel },
    });

    // Creates school list to fit prisma's demand for nesting writes
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

    const educationCreated = {
      educationLevel,
      userId,
      schools,
    };

    res.status(201).json(educationCreated);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const read = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const education = await prisma.education.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json(education);
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
    const deletedUser = await prisma.education.delete({
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
  update,
  destroy,
};
