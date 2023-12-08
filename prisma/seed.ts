import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import cron from 'node-cron';


//every 5 seconds
cron.schedule('*/5 * * * * *', async () => {
        console.log('Tâche cron exécutée !');
});

export async function main() {
        await seed();
}



export async function seed() {
        const response = await fetch(
            'https://raw.githubusercontent.com/keycap-archivist/database/master/db/catalog.json',
        );
        const data = await response.json();
        const total = data.length;
        let count = 0;


        for (const artist of data) {
                const artistData = {
                        id: artist.id,
                        src: artist.src,
                        name: artist.name,
                        website: artist.website || null,
                        instagram: artist.instagram || null,
                        twitter: artist.twitter || null,
                        discord: artist.discord || null,
                        reddit: artist.reddit || null,
                        selfOrder: artist.selfOrder || false,
                        isSelfOrdored: artist.isSelfOrdered || false,
                        artisanCollector: artist.artisanCollector || null,
                        nationality: artist.nationality || null,
                }


                await prisma.artist.upsert({
                        where: {
                                id: artist.id
                        },
                        create: artistData,
                        update: artistData
                });

                const {sculpts: collections} = artist;


                for (const collection of collections) {
                        const collectionId = await handleCollection(collection, artist.id);
                        for (const colorway of collection.colorways) {
                                await prisma.colorway.upsert({
                                        where: {
                                                id: colorway.id
                                        },
                                        create: {
                                                id: colorway.id,
                                                name: colorway.name,
                                                releaseDate: colorway.releaseDate,
                                                img: colorway.img,
                                                totalCount: Number(colorway.totalCount) || 0,
                                                notes: colorway.notes,
                                                isCover: colorway.isCover,
                                                collectionId: collectionId,
                                                artistId: artist.id
                                        },
                                        update: {
                                                id: colorway.id,
                                                name: colorway.name,
                                                releaseDate: colorway.releaseDate,
                                                img: colorway.img,
                                                totalCount: Number(colorway.totalCount) || 0,
                                                notes: colorway.notes,
                                                isCover: colorway.isCover,
                                                collectionId: collectionId,
                                                artistId: artist.id
                                        }
                                });
                        }
                }
                count++;
                //clear the console
                console.clear();
                console.log(`${count} of ${total} artists processed`);

        }
}

async function handleCollection(collection:any, artistId:string):Promise<string> {
        const {id:collectionId,name,profile,design,cast} = collection;

        await prisma.collection.upsert({
                where: {
                        id: collectionId
                },
                create: {
                        id: collectionId,
                        name,
                        profile,
                        design,
                        cast,
                        artistId: artistId
                },
                update: {
                        id: collectionId,
                        name,
                        profile,
                        design,
                        cast,
                        artistId: artistId
                }
        });
        return collectionId;
}









main()
    .then(async () => {
            await prisma.$disconnect()
    })
    .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
    })