/*
  Warnings:

  - You are about to drop the `typesactivities` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `activities` DROP FOREIGN KEY `Activities_activityTypeId_fkey`;

-- DropIndex
DROP INDEX `Activities_activityTypeId_fkey` ON `activities`;

-- AlterTable
ALTER TABLE `activities` ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `typesactivities`;
