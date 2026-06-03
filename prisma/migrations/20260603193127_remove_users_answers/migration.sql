/*
  Warnings:

  - You are about to drop the `usersanswers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `usersanswers` DROP FOREIGN KEY `UsersAnswers_attemptId_fkey`;

-- DropForeignKey
ALTER TABLE `usersanswers` DROP FOREIGN KEY `UsersAnswers_questionId_fkey`;

-- DropTable
DROP TABLE `usersanswers`;
