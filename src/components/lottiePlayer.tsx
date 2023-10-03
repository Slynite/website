"use client";

import Lottie from "lottie-react";

import missionHorizontal from "../../public/ressources/lottie/slynite-mission.json";
import missionVertical from "../../public/ressources/lottie/slynite-mission-vertically.json";
import banner from "../../public/ressources/lottie/banner.json";

export default function LottiePlayer({src, width}: {src: 'slynite-mission' | 'slynite-mission-vertically' | 'banner', width: number}) {
    let file;
    if (src === 'slynite-mission') {
        file = missionHorizontal;
    } else if (src === 'slynite-mission-vertically') {
        file = missionVertical;
    } else {
        file = banner;
    }
    
    return(
        <Lottie
            animationData={file}
            loop={true}
            style={{ width: width, maxWidth: '100%'}}
        />
    )
}