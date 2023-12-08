import {NextApiRequest, NextApiResponse} from "next";
import prisma from '../../../prisma/db';

import countryCode from './countryCode.json';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    if (req.method === 'POST') return res.status(405).json({message: 'Method not allowed'});

    //retrieve distinct countries
    const ISO = await prisma.artist.findMany({
           distinct:['nationality'],
            //where nationnality not null
        where:{
               nationality:{
                   not:null
               }
        },
        select:{
               nationality:true
        }
    })

    const countries = ISO.map( (country) => {
        if(country.nationality) return {
            // @ts-ignore
            label: countryCode[country.nationality.toUpperCase()],
            value: country.nationality
        }

    })


    res.status(200).json(countries);
}