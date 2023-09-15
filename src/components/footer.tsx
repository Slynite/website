"use client";

import Link from "next/link";
import { HeartIcon } from "@heroicons/react/20/solid";
import LanguageSwitcher from "./language/switcher";

const packageObj = require('../../package.json');

export default function Footer({dict}: {dict: any}) {
    return (
        <footer className="mt-4 pb-6 text-zinc-400 md:space-y-2 bottom-0">
            <hr className="w-full h-0.5 border-t-0 bg-zinc-400 my-6" />
            <div className="lg:grid lg:grid-cols-4 space-y-2 lg:space-y-0">
                <div className="lg:col-span-3 space-y-2 lg:space-y-0">
                    <div className="flex flex-wrap">{dict.footer.build_with} <HeartIcon className="h-5 w-5 mr-1 ml-1 text-red-700" /> {dict.footer.by_team_and} <Link className="md:ml-1" href={"https://github.com/Slynite/website/graphs/contributors"} target="_blank">{dict.footer.contributers}</Link>.</div>
                    <div className="lg:flex space-y-2 lg:space-y-0">
                        <p>Copyright © 2022 Slynite {dict.footer.rights_reserved}</p>
                        <div className="lg:ml-6 gap-2 md:gap-0 md:space-x-6 flex md:block flex-wrap">
                            <Link href={"/" + dict.lang + "/legal/privacy"}>{dict.page.privacy}</Link>
                            <Link href={"/" + dict.lang + "/legal"}>{dict.page.legal_notice}</Link>
                            <Link href={"/" + dict.lang + "/legal/licenses"}>{dict.page.licenses}</Link>
                            <Link href={"/" + dict.lang + "/contact"}>{dict.page.contact}</Link>
                        </div>
                    </div>
                </div>
                <div className="text-right flex lg:grid">
                    <LanguageSwitcher />
                    <div className="ml-4 lg:ml-0">
                        <p>ver.: <Link href={`https://github.com/Slynite/website/releases`} target="_blank">{packageObj.version}</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}