"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function LanguageSwitcher() {
    const pathname = usePathname();

    let langKey = pathname.split("/")[1];

    if (langKey === "de") {
        return(
            <div className="flex space-x-1 justify-end">
                <Link href={`/en${pathname.split(langKey)[1]}`} as={`/en${pathname.split(langKey)[1]}`}>English</Link>
                <p>/</p>
                <p className="underline">Deutsch</p>
            </div>
        )
    } else {
        return(
            <div className="flex space-x-1 justify-end">
                <p className="underline">English</p>
                <p>/</p>
                <Link href={`/de${pathname.split(langKey)[1]}`} as={`/de${pathname.split(langKey)[1]}`}>Deutsch</Link>
            </div>
        )
    }
}