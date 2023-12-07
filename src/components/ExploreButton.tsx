'use client'

import React from "react";

export default function ExploreButton({handleClick}: {handleClick: () => void}) {
    'use client'
    const [keyHover, setKeyHover] = React.useState(false)


    return <button
            onMouseDown={()=>{setKeyHover(true)}}
            onMouseUp={()=>{setKeyHover(false)}}
            type="button"
            onClick={() => {
                 handleClick()
            }}
            className="glass px-5 py-2 rounded-full gradient-border gradientAnimated  flex flex-row items-center gap-6 font-medium ">
            {keyHover ?
            <img src="/assets/img/svg/Keycaps_normal_full_hover.svg" alt="keycaps" className="w-10 h-10" />
                :
            <img src="/assets/img/svg/Keycaps_normal_full.svg" alt="keycaps" className="w-10 h-10" />
            }
        EXPLORE COLLECTIONS
    </button>
}