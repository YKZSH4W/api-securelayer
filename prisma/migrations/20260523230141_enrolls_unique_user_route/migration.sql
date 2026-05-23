/*
  Warnings:

  - A unique constraint covering the columns `[userId,routeId]` on the table `Enrolls` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Enrolls_userId_routeId_key` ON `Enrolls`(`userId`, `routeId`);
