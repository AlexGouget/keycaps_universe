-- AlterTable
ALTER TABLE `artist` ADD COLUMN `storeLink` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `colorway` ADD COLUMN `available` BOOLEAN NULL DEFAULT true,
    ADD COLUMN `mainColor` VARCHAR(191) NULL,
    ADD COLUMN `secondColor` VARCHAR(191) NULL;
