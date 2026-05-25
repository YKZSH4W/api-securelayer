/*
  Warnings:

  - Added the required column `score` to the `Attempts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `attempts` ADD COLUMN `score` INTEGER NOT NULL;
