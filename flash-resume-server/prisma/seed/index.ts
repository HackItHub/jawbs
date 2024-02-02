import { PrismaClient } from "@prisma/client";
import { USERS } from "./data/index.js";

const prisma = new PrismaClient();

async function main() {
  try {
    // eslint-disable-next-line
    for (const user of USERS) {
      // eslint-disable-next-line
      await prisma.user.create({ data: user });
    }
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((err) => {
    throw new Error(err);
  })
  .finally(() => {
    prisma.$disconnect();
  });
