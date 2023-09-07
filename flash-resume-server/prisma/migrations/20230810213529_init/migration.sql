/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkAddress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_userId_fkey";

-- DropForeignKey
ALTER TABLE "WorkAddress" DROP CONSTRAINT "WorkAddress_jobId_fkey";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Job";

-- DropTable
DROP TABLE "WorkAddress";
