import { PrismaClient as PrismaTestClient } from "@prisma/client";

const prismaTest = new PrismaTestClient({
  datasources: {
    db: { url: process.env.DATABASE_URL_TEST },
  },
});

export default prismaTest;
