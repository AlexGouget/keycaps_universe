import React from 'react';

import { artist } from '@prisma/client';
import {FaRegHeart} from "react-icons/fa";

export default function ArtistCard({ artist }: { artist: any }) {

    const {collection, colorways} = artist?._count;

    const handleImageError = (event: any) => {
        event.target.src = '/chemin/vers/image/par/defaut.jpg'; // Chemin de l'image par défaut
    };

    return (
        <div className=" w-full bg-dark-300 shadow-xl">
            <div className='aspect-square overflow-hidden relative'>
                <button className="absolute bottom-2 right-2 text-dark-400 ">
                    <FaRegHeart size={30} />
                </button>


                <img onError={handleImageError}  src={`/assets/img/logos/${artist.id}.jpg`} alt="Shoes" className="w-full h-full object-cover" />
            </div>

            <div className="h-1/6 p-2">
                <h2 className="font-normal text-xl ">
                    {artist.name.toUpperCase()}
                    {/*<div className="badge badge-secondary">NEW</div>*/}
                </h2>
                <label className="label text-xs">{collection} collections - {colorways} colorways</label>
            </div>
        </div>
    );

}