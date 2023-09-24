-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "summary" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "line" TEXT,
    "line2" TEXT,
    "zipcode" INTEGER,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "responsabilities" TEXT[],
    "startYear" TEXT,
    "endYear" TEXT,
    "startMonth" TEXT,
    "endMonth" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkAddress" (
    "id" SERIAL NOT NULL,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "line" TEXT,
    "line2" TEXT,
    "zipcode" INTEGER,
    "experienceId" INTEGER NOT NULL,

    CONSTRAINT "WorkAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_userId_key" ON "Address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_userId_key" ON "Experience"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkAddress_experienceId_key" ON "WorkAddress"("experienceId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkAddress" ADD CONSTRAINT "WorkAddress_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;
