-- DropIndex
DROP INDEX `collection_artistId_fkey` ON `collection`;

-- DropIndex
DROP INDEX `colorway_collectionId_fkey` ON `colorway`;

-- DropIndex
DROP INDEX `itemImage_colorwayId_fkey` ON `itemimage`;

-- AlterTable
ALTER TABLE `colorway` ADD COLUMN `artistId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `collection` ADD CONSTRAINT `collection_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `artist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colorway` ADD CONSTRAINT `colorway_collectionId_fkey` FOREIGN KEY (`collectionId`) REFERENCES `collection`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colorway` ADD CONSTRAINT `colorway_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `artist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itemImage` ADD CONSTRAINT `itemImage_colorwayId_fkey` FOREIGN KEY (`colorwayId`) REFERENCES `colorway`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
