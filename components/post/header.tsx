import { CalendarIcon, TagIcon } from '@heroicons/react/outline'
import Image from "next/image";
import { Post, TeamMember } from '../../interfaces/interfaces';
import PostAuthor from "./author";

type Props = {
    post: Post
    author: TeamMember
}

export default function PostHeader({ post, author }: Props) {
    return (
        <div className="space-y-2">
            <Image
                data-fallback-image="/content/not-found.png"
                src={post.image}
                alt={`cover image for ${post.title}`}
                width={1920}
                height={1080}
                className="rounded-md"
                placeholder="blur"
                blurDataURL={post.image}
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto"
                }} />
            <div className="space-y-1">
                <p className="text-xl font-semibold sm:text-2xl">{post.title}</p>
                <p className="text-xs md:text-sm text-gray-300 flex"><CalendarIcon className='h-5 w-5 mr-1'/> {post.date}</p>
                <p className="text-xs md:text-sm text-gray-300 flex"><TagIcon className='h-5 w-5 mr-1'/> {post.category}</p>
                <PostAuthor author={author} />
            </div>
        </div>
    );
}