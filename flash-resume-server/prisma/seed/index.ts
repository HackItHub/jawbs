// import { PrismaClient } from "@prisma/client";
// import { USERS, ADDRESS, EXPERIENCE, WORK_ADDRESS } from "./data/index.js";

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.user.createMany({
//     data: USERS,
//   });

//   await prisma.address.createMany({
//     data: ADDRESS,
//   });

//   await prisma.experience.createMany({
//     data: EXPERIENCE,
//   });

//   await prisma.workAddress.createMany({
//     data: WORK_ADDRESS,
//   });
// }

// main()
//   .catch((err) => {
//     throw new Error(err);
//   })
//   .finally(() => {
//     prisma.$disconnect();
//   });
