/*
  Warnings:

  - Added the required column `isCompleted` to the `Routes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastAccessed` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streak` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalXp` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `routes` ADD COLUMN `isCompleted` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `lastAccessed` DATETIME(3) NOT NULL,
    ADD COLUMN `streak` INTEGER NOT NULL,
    ADD COLUMN `totalXp` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Usersachievements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `achievementId` INTEGER NOT NULL,
    `dateAchieved` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Achievements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `requiredXp` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KnowledgeLevels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsersKnowledges` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `knowledgeLevelId` INTEGER NOT NULL,
    `dateAchieved` DATETIME(3) NOT NULL,

    UNIQUE INDEX `UsersKnowledges_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enrolls` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `routeId` INTEGER NOT NULL,
    `enrollmentDate` DATETIME(3) NOT NULL,
    `finishDate` DATETIME(3) NULL,
    `isCompleted` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attempts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `activityId` INTEGER NOT NULL,
    `attemptDate` DATETIME(3) NOT NULL,
    `xp` INTEGER NOT NULL,
    `isCorrect` BOOLEAN NOT NULL,

    UNIQUE INDEX `Attempts_activityId_key`(`activityId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lesssonsProgress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `lessonId` INTEGER NOT NULL,
    `progress` INTEGER NOT NULL,
    `isCompleted` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activitiesProgress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `activityId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `progress` INTEGER NOT NULL,
    `isCompleted` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `routesAdvices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `routeId` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `adviceTitle` VARCHAR(191) NOT NULL,
    `adviceText` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lessonsAdvices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lessonId` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `adviceTitle` VARCHAR(191) NOT NULL,
    `adviceText` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usersachievements` ADD CONSTRAINT `Usersachievements_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usersachievements` ADD CONSTRAINT `Usersachievements_achievementId_fkey` FOREIGN KEY (`achievementId`) REFERENCES `Achievements`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersKnowledges` ADD CONSTRAINT `UsersKnowledges_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersKnowledges` ADD CONSTRAINT `UsersKnowledges_knowledgeLevelId_fkey` FOREIGN KEY (`knowledgeLevelId`) REFERENCES `KnowledgeLevels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enrolls` ADD CONSTRAINT `Enrolls_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enrolls` ADD CONSTRAINT `Enrolls_routeId_fkey` FOREIGN KEY (`routeId`) REFERENCES `Routes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attempts` ADD CONSTRAINT `Attempts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attempts` ADD CONSTRAINT `Attempts_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lesssonsProgress` ADD CONSTRAINT `lesssonsProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lesssonsProgress` ADD CONSTRAINT `lesssonsProgress_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lessons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activitiesProgress` ADD CONSTRAINT `activitiesProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activitiesProgress` ADD CONSTRAINT `activitiesProgress_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `routesAdvices` ADD CONSTRAINT `routesAdvices_routeId_fkey` FOREIGN KEY (`routeId`) REFERENCES `Routes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lessonsAdvices` ADD CONSTRAINT `lessonsAdvices_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lessons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
