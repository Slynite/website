import PostPreview from "./preview";

export default function PostsList({ posts }) {
  return (
    <section>
      <div>
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