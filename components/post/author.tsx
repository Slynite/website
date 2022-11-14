import Link from "next/link";
import { CheckCircleIcon } from '@heroicons/react/outline'
import Image from "next/image";
import { TeamMember } from "../../interfaces/interfaces";

type Props = {
    author: TeamMember
}

export default function PostAuthor({ author }: Props) {
    if (author != null) {
        return (
            <div className="cursor-pointer">
                <Link href={`/team/${author.slug}`} passHref key={author.slug}>
                    <div className="flex space-x-2 items-center">
                        <div className="w-[28px] h-[28px]">
                            <Image className="rounded-full" width={28} height={28} alt={author.name} src={author.image} placeholder="blur" blurDataURL={author.image} />
                        </div>
                        <p className="text-xs md:text-sm text-gray-300">{author.name}</p>
                    </div>
                </Link>
            </div>
        )
    } else {
        return (
            <div className="text-xs md:text-sm text-gray-300">
                <p className="flex"><CheckCircleIcon className="text-green-500 w-5 h-5 mr-1"/> Slynite Announcement</p>
            </div>
        )
    }
} 