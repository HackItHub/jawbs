import express from "express";
import { PrismaClient } from "@prisma/client";
import { PORT } from "./server/utils/environmental.js";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (_, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(404).json({ message: err + "hello"});
  } finally {
    await prisma.$disconnect();
  }
});

app.post("/", async (req, res) => {
  try {
    const newUser = await prisma.user.create({ data: req.body });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
});

app.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
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
});

app.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deletedUser = await prisma.user.delete({
      where: { id },
    });
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(400).json({ message: err });
  } finally {
    await prisma.$disconnect();
  }
});

app.listen(PORT || 3001, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT: ${PORT}`);
});
