import Link from "next/link";
import PostAuthor from "./author";

export default function PostHeader({ post }) {
    return (
        <div>
            <p>Title: {post.title}</p>
            <p>Date: {post.date}</p>
            <p>Category: {post.category}</p>
            <p>Image: {post.image} (TODO: change to Image)</p>
            <PostAuthor author={post.author} />
            <span>---</span>
        </div>
    )
}