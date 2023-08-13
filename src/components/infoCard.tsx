import Image from "next/image";

export default function InfoCard({title, description, imagePath}: {title: string, description: string, imagePath: string}) {
    return (
        <div className={`rounded-3xl m-3 p-6 bg-zinc-800 animate-fade-up`}>
            <Image src={imagePath} alt={title} width={300} height={300} className=" w-16 h-16 mb-4" />
            <h3 className="text-2xl mb-2">{title}</h3>
            <p className="text-gray-300 text-base">{description}</p>
        </div>
    )
}