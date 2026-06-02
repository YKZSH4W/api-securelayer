/*
  Warnings:

  - You are about to drop the `lessonsprogress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `lessonsprogress` DROP FOREIGN KEY `lessonsProgress_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `lessonsprogress` DROP FOREIGN KEY `lessonsProgress_userId_fkey`;

-- DropTable
DROP TABLE `lessonsprogress`;
