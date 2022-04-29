import Link from "next/link";

export default function PostPreview({key, post}) {
    return (
        <Link href={`/newsroom/${post.slug}`} passHref key={key}>
            <div>
                <p>IMAGE: {post.image} (TODO: change to Image)</p>
                <p>Title: {post.title}</p>
                <p>Date: {post.date}</p>
                <p>Excerpt: {post.excerpt}</p>
                <span>---</span>
            </div>
        </Link>
    )
}