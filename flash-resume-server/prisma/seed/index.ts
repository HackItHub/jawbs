import { PrismaClient } from "@prisma/client";
import { USERS } from "./data/index.js";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: USERS,
  });

  // await prisma.address.createMany({
  //     data: address
  // })

  // for await (let user of users) {
  //     await prisma.user.upsert({
  //         where: { id: user.id },
  //         update: {},
  //         create: {
  //             ...user,
  //             address: {
  //                 create: {
  //                     ...address
  //                 }
  //             }
  //         }
  //     })
  // }

  // for await (let add of address) {
  //     await prisma.user.upsert({
  //         where: { id: add.id },
  //         update: {},
  //         create: add
  //     })
  // }
}

// main()
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     prisma.$disconnect;
//   });
