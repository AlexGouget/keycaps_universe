import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/db';
import validator from 'validator'


export const QUERY_ARTIST = ['country', 'design', 'cast', 'profile', 'query']


type ArtistQuery = {
    country?: string,
    design?: string,
    cast?: string,
    profile?: string,
    query?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') return res.status(405).json({message: 'Method not allowed'});

    //check if req.query is valid
    const isValid = Object.keys(req.query).every(key => QUERY_ARTIST.includes(key));
    if (!isValid) return res.status(400).json({message: 'Invalid query parameters'});

    //escape query parameters
    Object.keys(req.query).forEach(key => {
        if (key === 'query') {
            req.query[key] = validator.escape(req.query[key] as string);
        }
    });

    const artistsWithCounts = await prisma.artist.findMany({
        where: generateWhereClause(req.query as ArtistQuery),
        include: {
            _count: {
                select: {
                    collection: true,
                    colorways: true
                },
            },
        },
    });


    res.status(200).json(artistsWithCounts);
}

function generateWhereClause(query: ArtistQuery) {
    const { country, design, cast, profile, query: searchQuery } = query;
    const whereClause: any = {};

    if (country) {
        whereClause.nationality = { in: country.split(',') };
    }
    if (searchQuery) whereClause.name = { contains: searchQuery };

    const collectionConditions = [];

    if (design) collectionConditions.push({ design: { contains: design } });
    if (cast) collectionConditions.push({ cast: { contains: cast } });
    if (profile) collectionConditions.push({ profile: { contains: profile } });

    if (collectionConditions.length > 0) {
        whereClause.collection = {
            some: {
                AND: collectionConditions,
            },
        };
    }

    return whereClause;
}