import Image from "next/image";
import Link from "next/link";

export default function CarouselSlide(project) {
    return(
        <div className={`keen-slider__slide number-slide${project.project.number}`}>
            <Link href={project.project.url} passHref norefer>
                <div className="max-w-md lg:max-w-2xl bg-neutral-900 rounded-md shadow-md min-w-full">
                    <div className="flex flex-col">
                        <Image className="rounded-t-lg h-[400px] w-[800px]"
                                src={project.project.image}
                                width={800}
                                height={400}
                                layout="responsive"
                                alt={project.name} 
                        />
                        <div className="flex items-center">
                            <div className="w-[45px] h-[45px] md:w-[65px] md:h-[65px] p-1 m-2">
                                <Image
                                    className="ml-3 mt-40 rounded-full bg-neutral-900"
                                    src={project.project.logo}
                                    width={65}
                                    height={65}
                                    layout="responsive"
                                    alt={project.name} 
                                />
                            </div>
                            <div>
                                <a
                                    href={`/project/${project.project.slug}`}
                                    className="block font-semibold text-base xl:text-xl text-neutral-200 leading-6 hover:underline">
                                    {project.project.name}
                                </a>
                                <p className="text-neutral-400 text-xs md:text-base truncate">{project.project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}