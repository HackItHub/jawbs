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
CREATE UNIQUE INDEX "WorkAddress_experienceId_key" ON "WorkAddress"("experienceId");

-- AddForeignKey
ALTER TABLE "WorkAddress" ADD CONSTRAINT "WorkAddress_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
