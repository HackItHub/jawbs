import { Request, Response } from "express";
import prisma from "../libs/prisma.js";
import { Address } from "../interfaces/index.js";

const create = async (req: Request, res: Response) => {
  const { experiences, userId }: any = req.body;
  const experienceList = [];
  if (!userId) {
    res.status(400).json("Needs an authorized user");
    return;
  }
  try {
    for (const experience of experiences) {
      const { address } = experience;
      let hasAddress = false;
      let createAddress: Partial<Address> = {};
      if (
        address &&
        address.addressLine1 &&
        address.state &&
        address.city &&
        address.country &&
        address.zipCode
      ) {
        createAddress = { create: { ...address } };
        hasAddress = true;
      }

      const experienceFormData: any = {
        experience: experience.experience,
        title: experience.title,
        responsibilities: experience.responsibilities,
        startMonth: experience.startMonth,
        endMonth: experience.endMonth,
        startYear: experience.startYear,
        endYear: experience.endYear,
        userId,
        address: createAddress,
      };
      if (!hasAddress) {
        delete experienceFormData.address;
      }

      // eslint-disable-next-line
      const newExperiences = prisma.experience.create({
        data: experienceFormData,
      });
      experienceList.push(newExperiences);
    }

    res.status(201).json({
      data: experienceList,
      message: "Created experiences",
    });
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    prisma.$disconnect();
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
