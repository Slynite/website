import { CalendarIcon, TagIcon } from '@heroicons/react/outline'
import Image from "next/image";
import PostAuthor from "./author";

export default function PostHeader({ post }) {
    return (
        <div className="space-y-2">
            <Image data-fallback-image="/content/not-found.png" src={post.image} alt={`cover image for ${post.title}`} layout="responsive" width={1920} height={1080} className="rounded-md" placeholder="blur" blurDataURL={post.image} />
            <div className="space-y-1">
                <p className="text-xl font-semibold sm:text-2xl">{post.title}</p>
                <p className="text-xs md:text-sm text-gray-300 flex"><CalendarIcon className='h-5 w-5 mr-1'/> {new Date(post.date).toLocaleString("de-DE")}</p>
                <p className="text-xs md:text-sm text-gray-300 flex"><TagIcon className='h-5 w-5 mr-1'/> {post.category}</p>
                <PostAuthor author={post.author} />
            </div>
        </div>
    )
}