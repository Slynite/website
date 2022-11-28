import Image from "next/image";
import Link from "next/link";
import { Project } from "../../interfaces/interfaces";

type Props = {
    project: Project
    slideIndex: number
}

export default function ProjectCarouselSlide({ project, slideIndex }: Props) {
    return(
        <div className={`keen-slider__slide number-slide${slideIndex} cursor-pointer`}>
            <Link href={project.url} passHref>
                <div className="max-w-md lg:max-w-2xl bg-neutral-850 rounded-md shadow-md min-w-full">
                    <div className="flex flex-col">
                        <Image className="rounded-t-lg h-[400px] w-[800px]"
                                src={project.image}
                                width={1600}
                                height={800}
                                layout="intrinsic"
                                alt={project.name} 
                                placeholder="blur" 
                                blurDataURL={project.image}
                        />
                        <div className="flex items-center">
                            <div className="grid w-12 m-2 md:w-16 md:m-3">
                                    <Image
                                        className="rounded-full bg-neutral-850"
                                        src={project.logo}
                                        width={65}
                                        height={65}
                                        layout="intrinsic"
                                        alt={project.name} 
                                        placeholder="blur" 
                                        blurDataURL={project.logo}
                                    />
                            </div>
                            <div className="pr-3 grid">
                                <a
                                    href={project.url}
                                    className="block font-semibold text-base xl:text-xl text-neutral-200 leading-6 hover:underline">
                                    {project.name}
                                </a>
                                 <p className="text-neutral-400 truncate ... text-xs md:text-base">{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}