"use client";

import Lottie from "lottie-react";

import missionHorizontal from "../../public/ressources/lottie/slynite-mission.json";
import missionVertical from "../../public/ressources/lottie/slynite-mission-vertically.json";
import banner from "../../public/ressources/lottie/banner.json";

export default function LottiePlayer({src, width}: {src: 'slynite-mission' | 'slynite-mission-vertically' | 'banner', width: number}) {
    const file = src === 'slynite-mission' ? missionHorizontal : src === 'slynite-mission-vertically' ? missionVertical : banner;
    
    return(
        <Lottie
            animationData={file}
            loop={true}
            style={{ width: width, maxWidth: '100%'}}
        />
    )
}