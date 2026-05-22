/*
  Warnings:

  - Added the required column `bornDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `knowledgeLevel` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `bornDate` DATETIME(3) NOT NULL,
    ADD COLUMN `knowledgeLevel` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;
