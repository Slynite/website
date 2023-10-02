import Footer from "@/components/footer";
import "./[lang]/globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/header";
import { getMainDictionary } from "./[lang]/dictionaries";
import { cookies } from "next/headers";
import { getLangFromCookie } from "../../lib/i18nHelper";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

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
