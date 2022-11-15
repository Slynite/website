import { Post } from "../../interfaces/interfaces";
import PostPreview from "./preview";

type Props = {
    posts: Post[]
}

export default function PostsList({ posts }: Props) {
  return (
    <section>
      <div className="p-5 space-y-4 md:space-y-0 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {posts.map((post) => (
            <PostPreview
                key={post.slug}
                post={post}
            />
        ))}
      </div>
    </section>
  )
}