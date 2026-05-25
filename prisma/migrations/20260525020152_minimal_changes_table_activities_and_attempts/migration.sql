/*
  Warnings:

  - You are about to drop the column `xp` on the `attempts` table. All the data in the column will be lost.
  - Added the required column `xp` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activities` ADD COLUMN `xp` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `attempts` DROP COLUMN `xp`;
