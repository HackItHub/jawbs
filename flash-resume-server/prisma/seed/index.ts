import { PrismaClient } from "@prisma/client";
import { USERS } from "./data/index.js";

const prisma = new PrismaClient();

async function main() {
  USERS.forEach(async (user) => {
    await prisma.user.create({ data: user });
  });
}

main()
  .catch((err) => {
    throw new Error(err);
  })
  .finally(() => {
    prisma.$disconnect();
  });
