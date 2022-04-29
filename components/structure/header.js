import Link from "next/link";
import React from "react";
import { SITE_NAME } from "../../lib/constrants";

//TODO: When we implement the styling, then we can also rewrite this component. This is only for a basic functionallity.
export default function Header() {
    return (
        <div>
            <Link href="/" passHref><p>{SITE_NAME}</p></Link>
                <li>
                    <Link href="/" passHref>Home</Link>
                </li>
                <li>
                    <Link href="/projects" passHref>Projetcs</Link>
                </li>
                <li>
                    <Link href="/newsroom" passHref>Newsroom</Link>
                </li>
                <li>
                    <Link href="/company/about-us" passHref>About us</Link>
                </li>
        </div>
    )
}