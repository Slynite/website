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
                    <Link href={"/"}>
                        <Image src={"/logo.svg"} alt="Logo" width={1000} height={1000} className="w-10 h-10" />
                    </Link>

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
                    <div className="lg:hidden grid text-center text-lg pt-2 pb-4 space-y-2 animate-fade-down">
                        <Link className="animate-once animate-fade-up animate-ease-out" href={"/"} onClick={() => setIsMenuOpen(false)}>{dict.header.home}</Link>
                        <Link className="animate-once animate-fade-up animate-delay-[200ms] animate-ease-out" href={"/about"} onClick={() => setIsMenuOpen(false)}>{dict.header.about}</Link>
                        <Link className="animate-once animate-fade-up animate-delay-[400ms] animate-ease-out" href={"/projects"} onClick={() => setIsMenuOpen(false)}>{dict.header.projects}</Link>

                        <Link className="animate-once animate-fade-up animate-delay-[600ms] animate-ease-out pb-6" href={"/contact"} onClick={() => setIsMenuOpen(false)}>
                            <button type="button" className="text-black bg-zinc-200 hover:bg-zinc-300 text-sm rounded-full py-0.5 px-5 text-center">
                                {dict.header.contact_us}
                            </button>
                        </Link>

                        <hr className="h-px border-0 dark:bg-zinc-600 animate-once animate-fade-down animate-ease-out" />
                    </div>
                )}
            </nav>
        </header>
    );
}