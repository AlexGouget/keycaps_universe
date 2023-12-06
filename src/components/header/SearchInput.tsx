'use client';
import React from "react";
import {CiSearch} from "react-icons/ci";

export default function SearchInput(){
        const [isFocus, setIsFocus] = React.useState(false)

    return(
        <div>

            <div className={`relative ${isFocus && 'gradient-border'}`}>
                <div className="absolute text-gray-400 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <CiSearch size={25} />
                </div>
                <input
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    className="
                    block
                    w-full
                    p-4
                    ps-10
                    text-sm
                    text-gray-900
                    rounded-full
                    bg-gray-50
                    dark:bg-dark-400
                    dark:border-dark-700
                    dark:placeholder-gray-400
                    dark:text-primary/80"

                    placeholder="Search Artist, collection, universe ..." required />
                {/*SEARCH  POP UP*/}
                {/*<div className="absolute top-14 left-0 w-full bg-white dark:bg-dark-400 rounded-lg shadow-lg">*/}
                {/*    <div className="flex flex-col p-4">*/}
                {/*        <div className="flex flex-row justify-between">*/}
                {/*            <h3 className="text-gray-900 dark:text-gray-50">Search</h3>*/}
                {/*            <button className="text-gray-900 dark:text-gray-50">Clear</button>*/}
                {/*        </div>*/}
                {/*        <div className="flex flex-col">*/}
                {/*            <p className="text-gray-900 dark:text-gray-50">Recent Searches</p>*/}
                {/*            <div className="flex flex-row">*/}
                {/*                <button className="text-gray-900 dark:text-gray-50">Keycult</button>*/}
                {/*                <button className="text-gray-900 dark:text-gray-50">Keycult</button>*/}
                {/*                <button className="text-gray-900 dark:text-gray-50">Keycult</button>*/}
                {/*                <button className="text-gray-900 dark:text-gray-50">Keycult</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="flex flex-col">*/}
                {/*            <p className="text-gray-900 dark:text-gray-50">Popular Searches</p>*/}
                {/*            <div className="flex flex-row">*/}
                {/*                <button className="text-gray-900 dark:text-gray-50">Keycult</button>*/}
                {/*                <button className="text-gray-900 dark:text-gray-50">Keycult</button>*/}
                {/*                <button className="text-gray-900 dark:text-gray-50">Keycult</button>*/}
                {/*                <button className="text-gray-900 dark:text-gray-50">Keycult</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}






            </div>
        </div>

    )

}