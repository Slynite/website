import Link from "next/link";

export default function ProjectPreview({key, project}) {
    return (
        <Link href={`/project/${project.slug}`} passHref key={key}>
            <div>
                <p>IMAGE: {project.image} (TODO: change to Image)</p>
                <p>Logo: {project.logo} (TODO: change to Image)</p>
                <p>Name: {project.name}</p>
                <p>Excerpt: {project.excerpt}</p>
                <span>---</span>
            </div>
        </Link>
    )
}