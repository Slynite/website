"use client";

import Link from "next/link";
import { HeartIcon } from "@heroicons/react/20/solid";
import LanguageSwitcher from "./language/switcher";

const packageObj = require('../../package.json');

export default async function Footer({dict}: any) {
    return (
        <footer className="mt-4 mb-6 text-zinc-400 md:space-y-2 bottom-0">
            <hr className="w-full h-0.5 border-t-0 bg-zinc-400 my-6" />
            <div className="lg:grid lg:grid-cols-4 space-y-2 lg:space-y-0">
                <div className="lg:col-span-3 space-y-2 lg:space-y-0">
                    <div className="flex">{dict.footer.build_with} <HeartIcon className="h-5 w-5 mr-1 ml-1 text-red-700" /> {dict.footer.by_team_and} <Link className="ml-1" href={"https://github.com/Slynite/website/graphs/contributors"} target="_blank">{dict.footer.contributers}</Link>.</div>
                    <div className="md:flex space-y-2 md:space-y-0">
                        <p>Copyright © 2022 Slynite {dict.footer.rights_reserved}</p>
                        <div className="md:ml-6 space-x-6">
                            <Link href={"/privacy"}>{dict.page.privacy}</Link>
                            <Link href={"/legal"}>{dict.page.legal_notice}</Link>
                            <Link href={"/licenses"}>{dict.page.licenses}</Link>
                            <Link href={"/contact"}>{dict.page.contact}</Link>
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