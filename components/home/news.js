import Link from "next/link";
import PostsList from "../post/list";
import TextHeader from "../utils/text-header";

export default function News({ posts, areThereMoreThenFourPosts }) {
    return (
        <div>
            <div className="text-center">
                <TextHeader text={"Related news"} size={"text-center text-3xl sm:text-4xl 2xl:text-5xl mb-1 sm:mb-2 2xl:mb-4"} />
            </div>
            <PostsList posts={posts} />

            {areThereMoreThenFourPosts && (
                <div className="text-center">
                    <Link href={"/newsroom"} passHref>
                        <a className="cursor-pointer p-3 rounded-md border border-customGray bg-neutral-850">
                            <p className="bg-primary text-base p-4 lg:text-lg 2xl:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gradient-primary to-gradient-secondary inline-block">See all news</p>
                        </a>
                    </Link>
                </div>
            )}
        </div>
    )
}