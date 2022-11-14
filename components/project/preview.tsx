import Image from "next/image";
import Link from "next/link";
import { Project } from "../../interfaces/interfaces";

type Props = {
    project: Project
}

export default function ProjectPreview({project}: Props) {
    return (
        <Link href={project.url} passHref key={project.slug} target="_blank" rel="noreferrer">
            <div className="cursor-pointer max-w-md lg:max-w-2xl bg-neutral-850 rounded-md shadow-md min-w-full hover:scale-102 duration-300 motion-reduce:transform-none">
                <div className="flex flex-col">
                    <Image className="rounded-t-lg h-[400px] w-[800px]"
                            src={project.image}
                            width={800}
                            height={400}
                            layout="intrinsic"
                            alt={project.name} 
                            placeholder="blur" 
                            blurDataURL={project.image}
                    />
                    <div className="flex items-center">
                        <div className="w-[65px] h-[65px] p-1 m-2">
                            <Image
                                className="ml-3 mt-40 rounded-full bg-neutral-850"
                                src={project.logo}
                                width={65}
                                height={65}
                                layout="intrinsic"
                                alt={project.name} 
                                placeholder="blur" 
                                blurDataURL={project.logo}
                            />
                        </div>
                        <a
                            href={`/project/${project.slug}`}
                            className="block font-semibold text-base xl:text-xl text-neutral-200 leading-6 hover:underline">
                            {project.name}
                        </a>
                    </div>
                </div>
            </div>
        </Link>
    )
}