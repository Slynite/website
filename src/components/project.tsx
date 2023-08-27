import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Project({ name, description, logo, link, linkName, isUpcoming, isNew, dict }: { name: string, description: string, logo: string, link: string, linkName: string, isUpcoming?: boolean, isNew?: boolean, dict: any }) {
    return(
        <div className='ml-8 mr-8 pb-4 pt-4 md:ml-0 md:mr-0 md:p-5 rounded-xl bg-zinc-800 flex flex-col items-center justify-center min-h-full'>
            <Image src={logo} alt={name} width={150} height={150} className="mb-4" />
            {isUpcoming && !isNew ? (
                <p className="pl-2.5 pr-2.5 mb-1 text-xs rounded-full bg-zinc-700">{dict.coming_soon}</p>
            ) : (
                <></>
            )}

            {isNew ? (
                <div className="pl-2.5 pr-2.5 mb-1 text-xs rounded-full bg-zinc-700">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green">{dict.launched_previously}</p>
                </div>
            ) : (
                <></>
            )}
            <h2 className='text-xl font-bold'>{name}</h2>
            <p className='m-6 mt-3'>{description}</p>
            <Link href={link} target="_blank" rel="noopener noreferrer">{linkName} <ChevronRightIcon className='inline-block h-5 w-5' /></Link>
        </div>
    )
}