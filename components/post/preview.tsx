import Image from "next/image";
import Link from "next/link";
import { Post } from "../../interfaces/interfaces";

type Props = {
    post: Post
}

export default function PostPreview({post}: Props) {
    return (
        <Link href={`/newsroom/${post.slug}`} passHref key={post.slug}>
            <div className="max-w-md lg:max-w-2xl bg-neutral-850 rounded-md shadow-md min-w-full hover:scale-102 duration-300 motion-reduce:transform-none cursor-pointer">
                <Image className="rounded-t-lg"
                        src={post.image}
                        width={350}
                        height={200}
                        layout="responsive"
                        alt={post.title} 
                        placeholder="blur" 
                        blurDataURL={post.image}
                />
                <div className="p-5">
                    <p className="font-medium text-xs xl:text-base text-neutral-700">{post.date}</p>
                    <a
                        href={`/newsroom/${post.slug}`}
                        className="block font-semibold text-base xl:text-xl text-neutral-200 leading-6 hover:underline">
                        {post.title}
                    </a>
                    <p className="text-xs md:text-base text-neutral-500 leading-6">
                        {post.excerpt}
                    </p>
                </div>
            </div>
        </Link>
    )
}