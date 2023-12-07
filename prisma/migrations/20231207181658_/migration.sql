/*
  Warnings:

  - You are about to drop the column `storeLink` on the `artist` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `available` on the `colorway` table. All the data in the column will be lost.
  - You are about to drop the column `mainColor` on the `colorway` table. All the data in the column will be lost.
  - You are about to drop the column `secondColor` on the `colorway` table. All the data in the column will be lost.
  - Made the column `createdAt` on table `colorway` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `colorway` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `itemimage` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `itemimage` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `collection_artistId_fkey` ON `collection`;

-- DropIndex
DROP INDEX `colorway_collectionId_fkey` ON `colorway`;

-- DropIndex
DROP INDEX `itemImage_colorwayId_fkey` ON `itemimage`;

-- AlterTable
ALTER TABLE `artist` DROP COLUMN `storeLink`;

-- AlterTable
ALTER TABLE `collection` DROP COLUMN `tags`;

-- AlterTable
ALTER TABLE `colorway` DROP COLUMN `available`,
    DROP COLUMN `mainColor`,
    DROP COLUMN `secondColor`,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `itemimage` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `collection` ADD CONSTRAINT `collection_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `artist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colorway` ADD CONSTRAINT `colorway_collectionId_fkey` FOREIGN KEY (`collectionId`) REFERENCES `collection`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itemImage` ADD CONSTRAINT `itemImage_colorwayId_fkey` FOREIGN KEY (`colorwayId`) REFERENCES `colorway`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
