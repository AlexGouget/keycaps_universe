'use client'

import Image from 'next/image'
import {Libre_Baskerville, Silkscreen} from "next/font/google";
import React, {useRef} from "react";
import dynamic from "next/dynamic";
import Wall from "@/components/wall/Wall";

const libre = Libre_Baskerville({weight: '400', subsets: ['latin'] })
const pixel = Silkscreen({weight: '400', subsets: ['latin'] })
//dynamic import
const ExploreButton = dynamic(() => import("@/components/ExploreButton"), {ssr: false})
const WallComponent = dynamic(() => import("@/components/wall/Wall"), {ssr: false})



export default function Home() {
    const ref: React.MutableRefObject<any> = useRef(null)

const handleClick = () =>{
        ref?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
}

  return (
    <main className="w-full h-full p-24">
        <header className="z-10 lg:h-[50vh] flex flex-col items-center justify-between mt-44 mb-44">
            <div className='mx-auto flex flex-col justify-center align-middle items-center'>
                <h1 className={`${pixel.className} text-center lg:text-8xl tracking-[33.00px] whitespace-nowrap`}>KEYCAPS</h1>
                <p className="font-normal text-[24px] text-center pl-11  tracking-[79px] whitespace-nowrap">UNIVERSE</p>
            </div>
            <p className=" w-1/3 text-center whitespace-normal">Discover the art of custom keycaps. Explore unique designs by top creators in our curated collection. Celebrate creativity and craftsmanship in every keystroke!</p>
            <ExploreButton handleClick={handleClick} />
        </header>
        <section ref={ref} className="h-screen z-10 pt-28">
            <WallComponent />
        </section>



    </main>
  )
}


