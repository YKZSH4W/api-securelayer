-- DropForeignKey
ALTER TABLE `attempts` DROP FOREIGN KEY `Attempts_activityId_fkey`;

-- DropIndex
DROP INDEX `Attempts_activityId_key` ON `attempts`;

-- AlterTable
ALTER TABLE `questions` ADD COLUMN `support` VARCHAR(191) NULL;

-- AddForeignKey (drop first in case it already exists)
ALTER TABLE `Activities` DROP FOREIGN KEY IF EXISTS `Activities_lessonId_fkey`;
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lessons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
