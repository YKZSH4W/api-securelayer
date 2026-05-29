-- AddForeignKey
ALTER TABLE `Attempts` ADD CONSTRAINT `Attempts_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
