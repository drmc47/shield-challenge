/*
  Warnings:

  - You are about to drop the column `chain` on the `Wallet` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chainId` to the `Wallet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Wallet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Wallet" DROP COLUMN "chain",
ADD COLUMN     "chainId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Chain" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "chainId" INTEGER,
    "explorerUrl" TEXT,
    "rpcUrl" TEXT,
    "nativeCurrency" TEXT,
    "isEVM" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chain_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chain_slug_key" ON "Chain"("slug");

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_chainId_fkey" FOREIGN KEY ("chainId") REFERENCES "Chain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
