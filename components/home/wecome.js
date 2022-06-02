import { ArrowDownIcon } from '@heroicons/react/outline'
import Image from 'next/image';
import Link from 'next/link';
import TextHeader from "../utils/text-header";

export default function Welcome() {
    return (
        <div className="min-h-screen 3xl:grid content-center">
            <div className="text-center">
                <div className='block lg:hidden'>
                    <Image src={"/company/slynite-logo-gradient.png"} alt="Slynite Logo" width={1920} height={1080} layout="responsive" placeholder="blur"  blurDataURL={"/company/slynite-banner-transparent.png"} />
                </div>
                <div className='hidden lg:block'>
                    <Image src={"/company/slynite-banner-transparent.png"} alt="Slynite Logo" width={1920} height={1080} layout="responsive" placeholder="blur" blurDataURL={"/company/slynite-banner-transparent.png"} />
                </div>
                <TextHeader text={"Prevent data theft and make the internet to a better place with us."} size={"text-4xl md:text-5xl 2xl:text-6xl mt-4"} />
                <p className="py-6 lg:text-lg 2xl:text-2xl">The people behind Slynite stand for privacy, security, transparency, and mostly open source. We create customizable software Solutions that are free to use and make the internet a safer place. We particularly focus on user privacy already at the beginning ouf our software designs to accomplish our security aims early.</p>
                <div className="tracking-wider mt-12 text-transform: uppercase">
                    <p>Learn more</p>
                    <ArrowDownIcon className="h-6 w-6 mt-2 text-white justify-self-center ml-auto mr-auto block animate-bounce" aria-hidden="true" />
                </div>
            </div>
        </div>
    )
}