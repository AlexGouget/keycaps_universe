import {CiSearch} from "react-icons/ci";
import React from "react";
import {debounce} from "lodash";
import {Select} from "antd";
import useSWR from "swr";
import {fetcher} from "@/components/wall/Wall";

export const CAST = ['resin','mixed'];
export const DESIGN = ['physical','digital','hybrid'];
export const PROFILE = ['blank','sculpt'];


export default function SearchWall({filter, updateFilter}:{filter:any, updateFilter:any}){

    const {data:countries, error, isLoading} = useSWR('/api/utils/countries', fetcher)

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return( <form action="">
                <div className="grid grid-cols-5 gap-5 mx-auto w-4/5">
                    <div className="relative">
                        <input onChange={debounce((e)=>updateFilter({query: e.target.value},500), 300)} className="input-text" placeholder="Artist, collection, universe..." required />
                        <div className="absolute text-gray-400 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <CiSearch size={25} />
                        </div>
                    </div>
                    <Select
                        allowClear
                        showSearch
                        placeholder="Country..."
                        optionFilterProp="children"
                        mode="tags"
                        onChange={(e)=>updateFilter({country: e})}
                        filterOption={filterOption}
                        options={countries || []}
                    />
                    <Select
                        allowClear
                        className='h-full'
                        placeholder="Design style"
                        onChange={(e)=>updateFilter({design: e})}
                        options={DESIGN.map((d)=>({label:d, value:d}))}
                    />
                    <Select
                        allowClear
                        className='h-full'
                        placeholder="Cast"
                        onChange={(e)=>updateFilter({cast: e})}
                        options={CAST.map((d)=>({label:d, value:d}))}
                    />
                    <Select
                        allowClear
                        className='h-full'
                        placeholder="Profile"
                        onChange={(e)=>updateFilter({profile: e})}
                        options={PROFILE.map((d)=>({label:d, value:d}))}
                    />
                </div>


    </form>)
}