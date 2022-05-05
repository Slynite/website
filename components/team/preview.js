import Link from "next/link";

export default function MemberPreview({key, member}) {
    return (
        <Link href={`/team/${member.slug}`} passHref key={key}>
            <div>
                <p>IMAGE: {member.image} (TODO: change to Image)</p>
                <p>Name: {member.name}</p>
                <p>Department: {member.position}</p>
            </div>
        </Link>
    )
}