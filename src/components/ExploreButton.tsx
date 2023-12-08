'use client'

import React, {useEffect} from "react";
import {Silkscreen} from "next/font/google";
const pixel = Silkscreen({weight: '400', subsets: ['latin'] })
export default function ExploreButton({handleClick}: {handleClick: () => void}) {
    'use client'
    const [keyHover, setKeyHover] = React.useState(false)


    //TODO preload image
    useEffect(() => {
        const img = new Image();
        img.src = "/assets/img/svg/Keycaps_normal_full_hover.svg";
    })

    return <button
            onMouseDown={()=>{setKeyHover(true)}}
            onMouseUp={()=>{setKeyHover(false)}}
            type="button"
            onClick={() => {
                 handleClick()
            }}
            className={`glass px-5 py-2 rounded-full gradient-border gradientAnimated  flex flex-row items-center gap-6 font-medium ${pixel.className}`}>
            {keyHover ?
            <img src="/assets/img/svg/Keycaps_normal_full_hover.svg" alt="keycaps" className="w-10 h-10" />
                :
            <img src="/assets/img/svg/Keycaps_normal_full.svg" alt="keycaps" className="w-10 h-10" />
            }
                 EXPLORE COLLECTIONS
    </button>
}