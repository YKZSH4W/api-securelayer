-- DropForeignKey
ALTER TABLE `activities` DROP FOREIGN KEY `Activities_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `activitiesprogress` DROP FOREIGN KEY `activitiesProgress_activityId_fkey`;

-- DropForeignKey
ALTER TABLE `activitiesprogress` DROP FOREIGN KEY `activitiesProgress_userId_fkey`;

-- DropForeignKey
ALTER TABLE `attempts` DROP FOREIGN KEY `Attempts_userId_fkey`;

-- DropForeignKey
ALTER TABLE `enrolls` DROP FOREIGN KEY `Enrolls_routeId_fkey`;

-- DropForeignKey
ALTER TABLE `enrolls` DROP FOREIGN KEY `Enrolls_userId_fkey`;

-- DropForeignKey
ALTER TABLE `lessons` DROP FOREIGN KEY `Lessons_routeId_fkey`;

-- DropForeignKey
ALTER TABLE `lessonsadvices` DROP FOREIGN KEY `lessonsAdvices_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `lessonsprogress` DROP FOREIGN KEY `lessonsProgress_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `lessonsprogress` DROP FOREIGN KEY `lessonsProgress_userId_fkey`;

-- DropForeignKey
ALTER TABLE `options` DROP FOREIGN KEY `Options_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `phishingsimulations` DROP FOREIGN KEY `PhishingSimulations_activityId_fkey`;

-- DropForeignKey
ALTER TABLE `questions` DROP FOREIGN KEY `Questions_activityId_fkey`;

-- DropForeignKey
ALTER TABLE `routesadvices` DROP FOREIGN KEY `routesAdvices_routeId_fkey`;

-- DropForeignKey
ALTER TABLE `usersachievements` DROP FOREIGN KEY `Usersachievements_achievementId_fkey`;

-- DropForeignKey
ALTER TABLE `usersachievements` DROP FOREIGN KEY `Usersachievements_userId_fkey`;

-- DropForeignKey
ALTER TABLE `usersanswers` DROP FOREIGN KEY `UsersAnswers_attemptId_fkey`;

-- DropForeignKey
ALTER TABLE `usersanswers` DROP FOREIGN KEY `UsersAnswers_questionId_fkey`;

-- DropIndex
DROP INDEX `Activities_lessonId_fkey` ON `activities`;

-- DropIndex
DROP INDEX `activitiesProgress_activityId_fkey` ON `activitiesprogress`;

-- DropIndex
DROP INDEX `activitiesProgress_userId_fkey` ON `activitiesprogress`;

-- DropIndex
DROP INDEX `Attempts_userId_fkey` ON `attempts`;

-- DropIndex
DROP INDEX `Enrolls_routeId_fkey` ON `enrolls`;

-- DropIndex
DROP INDEX `Lessons_routeId_fkey` ON `lessons`;

-- DropIndex
DROP INDEX `lessonsAdvices_lessonId_fkey` ON `lessonsadvices`;

-- DropIndex
DROP INDEX `lessonsProgress_lessonId_fkey` ON `lessonsprogress`;

-- DropIndex
DROP INDEX `lessonsProgress_userId_fkey` ON `lessonsprogress`;

-- DropIndex
DROP INDEX `Options_questionId_fkey` ON `options`;

-- DropIndex
DROP INDEX `PhishingSimulations_activityId_fkey` ON `phishingsimulations`;

-- DropIndex
DROP INDEX `Questions_activityId_fkey` ON `questions`;

-- DropIndex
DROP INDEX `routesAdvices_routeId_fkey` ON `routesadvices`;

-- DropIndex
DROP INDEX `Usersachievements_achievementId_fkey` ON `usersachievements`;

-- DropIndex
DROP INDEX `Usersachievements_userId_fkey` ON `usersachievements`;

-- DropIndex
DROP INDEX `UsersAnswers_attemptId_fkey` ON `usersanswers`;

-- DropIndex
DROP INDEX `UsersAnswers_questionId_fkey` ON `usersanswers`;

-- AddForeignKey
ALTER TABLE `Usersachievements` ADD CONSTRAINT `Usersachievements_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usersachievements` ADD CONSTRAINT `Usersachievements_achievementId_fkey` FOREIGN KEY (`achievementId`) REFERENCES `Achievements`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lessons` ADD CONSTRAINT `Lessons_routeId_fkey` FOREIGN KEY (`routeId`) REFERENCES `Routes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lessons`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Questions` ADD CONSTRAINT `Questions_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activities`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Options` ADD CONSTRAINT `Options_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Questions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enrolls` ADD CONSTRAINT `Enrolls_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enrolls` ADD CONSTRAINT `Enrolls_routeId_fkey` FOREIGN KEY (`routeId`) REFERENCES `Routes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attempts` ADD CONSTRAINT `Attempts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attempts` ADD CONSTRAINT `Attempts_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activities`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lessonsProgress` ADD CONSTRAINT `lessonsProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lessonsProgress` ADD CONSTRAINT `lessonsProgress_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lessons`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activitiesProgress` ADD CONSTRAINT `activitiesProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `activitiesProgress` ADD CONSTRAINT `activitiesProgress_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activities`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `routesAdvices` ADD CONSTRAINT `routesAdvices_routeId_fkey` FOREIGN KEY (`routeId`) REFERENCES `Routes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lessonsAdvices` ADD CONSTRAINT `lessonsAdvices_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lessons`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PhishingSimulations` ADD CONSTRAINT `PhishingSimulations_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activities`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersAnswers` ADD CONSTRAINT `UsersAnswers_attemptId_fkey` FOREIGN KEY (`attemptId`) REFERENCES `Attempts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersAnswers` ADD CONSTRAINT `UsersAnswers_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Questions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
