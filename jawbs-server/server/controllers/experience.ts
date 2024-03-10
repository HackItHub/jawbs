import { Request, Response, NextFunction } from "express";
import prisma from "../libs/prisma.js";
import { Address } from "../types/index.js";
import ClientError from "../libs/client-error.js";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user ? req.user.id : undefined;
  const { experiences }: any = req.body;

  try {
    if (!userId) {
      throw new ClientError(400, "invalid credentials");
    }
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
      await prisma.experience.create({
        data: experienceFormData,
      });
    }

    res.status(201).json({ message: "created experiences" });
  } catch (err) {
    next(err);
  } finally {
    prisma.$disconnect();
  }
};

const read = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.user ? req.user.id : undefined;

  try {
    if (!id) {
      throw new ClientError(400, "invalid credentials");
    }
    const experience = await prisma.experience.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json(experience);
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
  const id = req.user ? req.user.id : undefined;

  try {
    if (!id) {
      throw new ClientError(400, "invalid credentials");
    }
    const deletedUser = await prisma.experience.delete({
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
