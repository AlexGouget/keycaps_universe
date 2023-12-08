import useSWR from "swr";
import React, {useReducer, useState} from "react";
import {QUERY_ARTIST} from "../../../pages/api/artist/find";
import ArtistCard from "@/components/wall/ArtistCard";
import LoadingLoli from "@/components/LoadingLoli";
import SearchWall from "@/components/wall/SearchWall";

type searchModeType = {
    artist: modeType
}

type modeType = {
    path: string,
    query: string[]
}

const searchMode:searchModeType = {
    artist: {
        path: '/api/artist/find',
        query: QUERY_ARTIST
    }
}

export const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json());


export default function Wall(){

    const [mode, setMode] = useState<modeType>(searchMode.artist);

    const initialFilter = {
        query: '',
        country: '',
        design: '',
        cast: '',
        profile: '',
    };

    const [filter, updateFilter] = useReducer(
        (filter:any, updates:any) => ({ ...filter, ...updates }),
        initialFilter
    );

    const getKey = ()=>{
        return mode.path + '?' + mode.query.map((q:string)=>q+'='+filter[q]).join('&');
    }


    const {data, error, isLoading} = useSWR(getKey, fetcher)


//     <div className="col-span-2">
//         <label htmlFor="query">Search</label>
//     <input type="text" name="query" id="query" className="w-full" value={filter.query} onChange={(e)=>updateFilter({query: e.target.value})}/>
// </div>
//     <div className="col-span-2">
//         <label htmlFor="country">Country</label>
//         <input type="text" name="country" id="country" className="w-full" value={filter.country} onChange={(e)=>updateFilter({country: e.target.value})}/>
//     </div>
//     <div className="col-span-1">
//         <label htmlFor="design">Design</label>
//         <input type="text" name="design" id="design" className="w-full" value={filter.design} onChange={(e)=>updateFilter({design: e.target.value})}/>
//     </div>
//     <div className="col-span-1">
//         <label htmlFor="cast">Cast</label>
//         <input type="text" name="cast" id="cast" className="w-full" value={filter.cast} onChange={(e)=>updateFilter({cast: e.target.value})}/>
//     </div>
//     <div className="col-span-1">
//         <label htmlFor="profile">Profile</label>
//         <input type="text" name="profile" id="profile" className="w-full" value={filter.profile} onChange={(e)=>updateFilter({profile: e.target.value})}/>
//     </div>


    return (
        <div className="">
            <SearchWall filter={filter} updateFilter={updateFilter} />
            {isLoading && <LoadingLoli />}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mx-auto w-4/5 gap-5">


                {data && data.map((artist:any)=><ArtistCard artist={artist}/>)}
            </div>
        </div>
        )
}