/*
  Warnings:

  - You are about to drop the column `birthDate` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Users_username_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `birthDate`,
    DROP COLUMN `username`;
