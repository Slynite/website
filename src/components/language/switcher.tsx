"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const langKey = pathname.split("/")[1];

    if (langKey === "de") {
        return(
            <div className="flex space-x-1 justify-end">
                <Link href={pathname.replace(langKey, "en")} as={pathname.replace(langKey, "en")}>English</Link>
                <p>/</p>
                <p className="underline">Deutsch</p>
            </div>
        )
    } else {
        return(
            <div className="flex space-x-1 justify-end">
                <p className="underline">English</p>
                <p>/</p>
                <Link href={pathname.replace(langKey, "de")} as={pathname.replace(langKey, "de")}>Deutsch</Link>
            </div>
        )
    }
}