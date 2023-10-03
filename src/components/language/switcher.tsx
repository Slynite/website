"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const langKey = pathname.split("/")[1];

    const router = useRouter();
    function handleLangSwitch(lang: string) {
        router.push(pathname.replace(langKey, lang));
        router.refresh();
    }

    if (langKey === "de") {
        return(
            <div className="flex space-x-1 justify-end">
                <button className="text-zinc-200" onClick={() => handleLangSwitch("en")}>English</button>
                <p>/</p>
                <p className="underline">Deutsch</p>
            </div>
        )
    } else {
        return(
            <div className="flex space-x-1 justify-end">
                <p className="underline">English</p>
                <p>/</p>
                <button className="text-zinc-200" onClick={() => handleLangSwitch("de")}>Deutsch</button>
            </div>
        )
    }
}