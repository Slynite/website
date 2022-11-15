import Link from "next/link";
import TextHeader from "../utils/text-header";

export default function About() {
    return (
        <div className="text-center">
            <TextHeader text={"Our Team"} size={"text-3xl sm:text-4xl 2xl:text-5xl mb-1 sm:mb-2 2xl:mb-4"} />
            <p className="lg:text-lg 2xl:text-2xl">Our creative team has specialized themselves providing tailor-made software solutions, all-in-one systems and support Open Source software newcomers. As experienced developers with a wealth of expertise we build the future together.</p>
            <Link href={"/team"} passHref>
                <a className="cursor-pointer">
                    <p className="text-base lg:text-lg 2xl:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gradient-primary to-gradient-secondary inline-block">Meet the Team</p>
                </a>
            </Link>
        </div>
    )
}