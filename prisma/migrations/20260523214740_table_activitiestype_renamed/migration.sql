/*
  Warnings:

  - You are about to drop the `activitiestypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `activities` DROP FOREIGN KEY `Activities_activityTypeId_fkey`;

-- DropIndex
DROP INDEX `Activities_activityTypeId_fkey` ON `activities`;

-- DropTable
DROP TABLE `activitiestypes`;

-- CreateTable
CREATE TABLE `TypesActivities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_activityTypeId_fkey` FOREIGN KEY (`activityTypeId`) REFERENCES `TypesActivities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
