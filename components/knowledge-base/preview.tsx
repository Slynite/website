import Image from "next/image";
import Link from "next/link";
import { KnowledgeBaseEntry } from "../../interfaces/interfaces";

type Props = {
    entry: KnowledgeBaseEntry
}

export default function KnowledgeBaseEntryPreview({entry}: Props) {
    return (
        <Link href={`/knowledge/${entry.slug}`} passHref key={entry.slug} legacyBehavior>
            <div className="max-w-md lg:max-w-2xl bg-neutral-850 rounded-md shadow-md min-w-full hover:scale-102 duration-300 motion-reduce:transform-none cursor-pointer">
                <Image
                    className="rounded-t-lg"
                    src={entry.image}
                    width={350}
                    height={200}
                    alt={entry.title}
                    placeholder="blur"
                    blurDataURL={entry.image}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto"
                    }} />
                <div className="p-5">
                    <p className="font-medium text-xs xl:text-base text-neutral-700">{entry.date}</p>
                    <a
                        href={`/knowledge/${entry.slug}`}
                        className="block font-semibold text-base xl:text-xl text-neutral-200 leading-6 hover:underline">
                        {entry.title}
                    </a>
                    <p className="text-xs md:text-base text-neutral-500 leading-6">
                        {entry.excerpt}
                    </p>
                </div>
            </div>
        </Link>
    );
}