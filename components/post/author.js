import Link from "next/link";

export default function PostAuthor({ author }) {
    if (author.slug !== undefined) {
        return (
            <div>
                <p>Author:</p>
                <Link href={`/team/${author.slug}`} passHref key={author.slug}>
                    <div>
                        <p>Name: {author.name}</p>
                        <p>Image: {author.image} (TODO: change to Image)</p>
                    </div>
                </Link>
            </div>
        )
    } else {
        return (
            <div>
                <p>Author:</p>
                <p>TODO: Add (?) icon</p>
            </div>
        )
    }
} 