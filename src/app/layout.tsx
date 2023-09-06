import Footer from "@/components/footer";
import "./[lang]/globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/header";
import { getDictionary } from "./[lang]/dictionaries";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default async function RootLayout({
	children,
	params: { lang }
}: {
	children: React.ReactNode
	params: { lang: string }
}) {
	const dict = await getDictionary(lang);

    return (
		<html lang={lang}>
			<body className={`${roboto.className} text-gray-200 flex flex-col min-h-screen h-screen container mx-auto text-sm px-6 lg:px-5 xl:px-36 2xl:px-64`}>
				<Header dict={dict} />
				<div className="flex-grow">
                    {children}
                </div>
                <Footer dict={dict}/>
			</body>
		</html>
	);
}
