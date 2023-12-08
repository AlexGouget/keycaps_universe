-- CreateTable
CREATE TABLE `artist` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `website` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `reddit` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `discord` VARCHAR(191) NULL,
    `selfOrder` BOOLEAN NOT NULL,
    `isSelfOrdored` BOOLEAN NOT NULL,
    `src` VARCHAR(191) NULL,
    `nationality` VARCHAR(191) NULL,
    `artisanCollector` VARCHAR(191) NULL,

    UNIQUE INDEX `artist_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `collection` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `artistId` VARCHAR(191) NULL,
    `profile` VARCHAR(191) NULL,
    `design` VARCHAR(191) NULL,
    `cast` VARCHAR(191) NULL,

    UNIQUE INDEX `collection_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colorway` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `collectionId` VARCHAR(191) NULL,
    `artistId` VARCHAR(191) NULL,
    `releaseDate` VARCHAR(191) NULL,
    `img` VARCHAR(191) NULL,
    `totalCount` INTEGER NULL,
    `notes` VARCHAR(191) NULL,
    `isCover` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `colorway_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `itemImage` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `colorwayId` VARCHAR(191) NULL,

    UNIQUE INDEX `itemImage_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `collection` ADD CONSTRAINT `collection_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `artist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colorway` ADD CONSTRAINT `colorway_collectionId_fkey` FOREIGN KEY (`collectionId`) REFERENCES `collection`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colorway` ADD CONSTRAINT `colorway_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `artist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itemImage` ADD CONSTRAINT `itemImage_colorwayId_fkey` FOREIGN KEY (`colorwayId`) REFERENCES `colorway`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
