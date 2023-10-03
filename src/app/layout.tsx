import Footer from "@/components/footer";
import "./[lang]/globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/header";
import { getMainDictionary } from "./[lang]/dictionaries";
import { cookies } from "next/headers";
import { getLangFromCookie } from "../../lib/i18nHelper";
import { Metadata } from "next";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Slynite",
	applicationName: "Slynite",
	referrer: "origin",
	keywords: ["Slynite", "Travelventures", "ActiveHQ.works", "Open Source", "Privacy", "Privacy-focused", "Security", "Transparency", ],
	robots: "index,follow",
	authors: [
		{
			name: "Slynite",
			url: "https://slynite.de"
		},
		{
			name: "Contributors",
			url: "https://github.com/slynite/website/graphs/contributors"
		}
	],
	icons: [
		{
			rel: "apple-touch-icon",
			url: "/ressources/favicon/apple-icon.png"
		},
		{
			rel: "icon",
			url: "/ressources/favicon/favicon.ico"
		},
	],
	manifest: "/ressources/favicon/manifest.json",
}

export default async function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	const cookieList = cookies();
	const dict = await getMainDictionary(getLangFromCookie(cookieList.get("lang")));

    return (
		<html lang={dict.lang}>
			<body className={`${roboto.className} text-gray-200 flex flex-col min-h-screen h-screen container mx-auto text-sm px-6 lg:px-5 xl:px-36 2xl:px-64`}>
				<Header dict={dict}/>
				<div className="flex-grow">
                    {children}
                </div>
                <Footer dict={dict}/>
			</body>
		</html>
	);
}
