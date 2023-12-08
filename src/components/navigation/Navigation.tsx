'use client'

import {RiDiscordLine} from "react-icons/ri";
import {FaGithub} from "react-icons/fa";
import {FiCheck, FiMinus, FiPlus} from "react-icons/fi";
import {RxDividerVertical} from "react-icons/rx";
import React, {Suspense, useEffect, useState} from "react";
import dynamic from "next/dynamic";
import {Libre_Baskerville, Silkscreen} from "next/font/google";

//dynamic import for SearchInput
const SearchInput = dynamic(() => import("@/components/navigation/SearchInput"), {ssr: false})
const pixel = Silkscreen({weight: '400', subsets: ['latin'] })


export default function Navigation() {

    const [shouldHide, setShouldHide] = useState(false);
    const threshold = 300; // Remplacez 200 par la distance de défilement souhaitée

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setShouldHide(true);
            } else {
                setShouldHide(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
            <nav className="grad-dark-to-transparent fixed w-full z-20">
                <div className="w-full grid grid-rows-3 xl:grid-cols-3 mx-auto p-6 align-middle items-center">
                   {/*LOGO*/}
                    <div>
                        <div className={`mx-auto flex place-self-center sm:place-self-start flex-col transition-opacity  duration-300 ${!shouldHide ? 'opacity-0' : 'opacity-100'}`}>
                            <h1 className={`${pixel.className} text-2xl lg:text-2xl tracking-[15.00px] whitespace-nowrap`}>KEYCAPS</h1>
                            <p className="font-normal text-[12px]  tracking-[21px] whitespace-nowrap">UNIVERSE</p>
                        </div>
                   </div>

                    <div className={`w-full place-self-center transition-opacity  duration-300 ${shouldHide ? 'opacity-0' : 'opacity-100'}`}>
                        <Suspense fallback={'loading'}>
                            <SearchInput />
                        </Suspense>
                    </div>
                {/*NAVIGATION*/}
                    <div className="text-secondary flex flex-row items-center gap-2 place-self-end h-full">
                            {/*<button className="transition transform hover:rotate-90 relative hover:text-accent ">*/}
                            {/*    <FiPlus size={50} />*/}
                            {/*</button>*/}
                            {/*<RxDividerVertical size={30} />*/}
                            {/*<button className="hover:text-accent">*/}
                            {/*    <RiDiscordLine size={30}  />*/}
                            {/*</button>*/}
                            <a href="https://github.com/AlexGouget/keycaps_universe" className="hover:text-accent" rel={'noopener noreferrer'} target={'_blank'}>
                                <FaGithub size={25} />
                            </a>
                        </div>
                </div>
            </nav>

         )
}