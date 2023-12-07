import useSWR from "swr";
import {useReducer, useState} from "react";
import {QUERY_ARTIST} from "../../../pages/api/artist/find";
import ArtistCard from "@/components/wall/ArtistCard";

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

    const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json());

    const {data, error, isLoading} = useSWR(getKey, fetcher)


    return (<div className="grid grid-cols-5 mx-auto w-4/5 gap-5">
                {isLoading && <div>Loading...</div>}
                {data && data.map((artist:any)=><ArtistCard artist={artist}/>)}
            </div>)
}