/*
  Warnings:

  - You are about to drop the `lesssonsprogress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `lesssonsprogress` DROP FOREIGN KEY `lesssonsProgress_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `lesssonsprogress` DROP FOREIGN KEY `lesssonsProgress_userId_fkey`;

-- DropTable
DROP TABLE `lesssonsprogress`;

-- CreateTable
CREATE TABLE `lessonsProgress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `lessonId` INTEGER NOT NULL,
    `progress` INTEGER NOT NULL,
    `isCompleted` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lessonsProgress` ADD CONSTRAINT `lessonsProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lessonsProgress` ADD CONSTRAINT `lessonsProgress_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lessons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
