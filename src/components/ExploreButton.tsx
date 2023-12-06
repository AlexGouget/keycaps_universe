'use client'

import React from "react";

export default function ExploreButton(){
    'use client'
    const [keyHover, setKeyHover] = React.useState(false)


    const svgStyle = {
      //white color

    }

    return <button onMouseEnter={()=>{setKeyHover(true)}}  onMouseLeave={()=>{setKeyHover(false)}} type="button" className="glass px-5 py-2 rounded-full gradient-border gradientAnimated  flex flex-row items-center gap-6 font-medium ">
        {keyHover ?
            <img  style={svgStyle} src="/assets/img/svg/Keycaps_normal_full_hover.svg" alt="keycaps" className="w-10 h-10" /> :
            <img style={svgStyle} src="/assets/img/svg/Keycaps_normal_full.svg" alt="keycaps" className="w-10 h-10" />}
        EXPLORE COLLECTIONS
    </button>
}