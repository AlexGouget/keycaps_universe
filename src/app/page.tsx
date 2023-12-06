import Image from 'next/image'
import {Libre_Baskerville} from "next/font/google";
import React from "react";
import dynamic from "next/dynamic";

const libre = Libre_Baskerville({weight: '400', subsets: ['latin'] })

//dynamic import
const ExploreButton = dynamic(() => import("@/components/ExploreButton"), {ssr: false})



export default function Home() {




  return (
    <main className="w-full min-h-screen p-24">
        <header className="flex flex-col items-center justify-between h-[50vh] mt-44">
            <div className='mx-auto flex flex-col justify-center align-middle items-center'>
                <h1 className={`${libre.className} text-center lg:text-8xl tracking-[33.00px] whitespace-nowrap`}>KEYCAPS</h1>
                <p className="font-normal text-[24px] text-center pl-6  tracking-[68px] whitespace-nowrap">ARCHIVIST</p>

            </div>
            <p className="w-1/3 text-center whitespace-normal">Discover the art of custom keycaps. Explore unique designs by top creators in our curated collection. Celebrate creativity and craftsmanship in every keystroke!</p>
            <ExploreButton />
        </header>


    </main>
  )
}


