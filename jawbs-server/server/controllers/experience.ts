import { Request, Response } from "express";
import prisma from "../libs/prisma.js";

const create = async (req: Request, res: Response) => {
  const { experiences, userId } = req.body;
  try {
    // eslint-disable-next-line
    experiences.forEach(async (experience: any) => {
      const { address } = experience;
      const createAddress = { create: { ...address } };
      const experienceFormData = {
        experience: experience.experience,
        title: experience.title,
        responsibilities: experience.responsibilities,
        startMonth: experience.startMonth,
        endMonth: experience.endMonth,
        startYear: experience.startYear,
        endYear: experience.endYear,
        address: createAddress,
        userId,
      };
      const newExperience = await prisma.experience.create({
        data: experienceFormData,
      });
      res.status(201).json(newExperience);
    });
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
};

const read = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const experience = await prisma.experience.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json(experience);
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
    const deletedUser = await prisma.experience.delete({
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
