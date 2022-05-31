import PostsList from "../post/list";
import TextHeader from "../utils/text-header";

export default function News({ posts }) {
    return (
        <div>
            <div className="text-center">
                <TextHeader text={"Related news"} size={"text-center text-3xl sm:text-4xl 2xl:text-5xl mb-1 sm:mb-2 2xl:mb-4"} />
            </div>
            <PostsList posts={posts} />
        </div>
    )
}