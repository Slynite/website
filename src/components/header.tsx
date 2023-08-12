"use client";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header({ dict }: any) {
    const [menuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="pt-3 pb-3">
            <nav>
                <div className="flex lg:items-center">
                    <Image src={"/logo.svg"} alt="Logo" width={100} height={100} className="w-10 h-10" />

                    <div className="hidden lg:block space-x-6 ml-6">
                        <Link href={"/"}>{dict.header.home}</Link>
                        <Link href={"/about"}>{dict.header.about}</Link>
                        <Link href={"/projects"}>{dict.header.projects}</Link>
                    </div>
                    <Link className="hidden lg:block ml-auto" href={"/contact"}>
                            <button type="button" className="text-black bg-zinc-200 hover:bg-zinc-300 font-medium rounded-full px-4 text-center">
                                {dict.header.contact}
                            </button>
                    </Link>

                    <button className="ml-auto lg:hidden" onClick={() => setIsMenuOpen(!menuOpen)}>{!menuOpen ? <Bars2Icon className="h-6 w-6" /> : <XMarkIcon className="h-6 w-6" />}</button>
                </div>

                {menuOpen && (
                    <div className="lg:hidden grid text-lg pt-2 space-y-2 animate-fade-down animate-once animate-duration-300 animate-ease-linear animate-normal animate-fill-forwards">
                        <Link href={"/"}>{dict.header.home}</Link>
                        <Link href={"/about"}>{dict.header.about}</Link>
                        <Link href={"/projects"}>{dict.header.projects}</Link>

                        <Link href={"/contact"}>
                            <button type="button" className="text-black bg-zinc-200 hover:bg-zinc-300 text-sm rounded-full py-0.5 px-5 text-center mr-2 mb-2">
                            {dict.header.contact_us}
                            </button>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}