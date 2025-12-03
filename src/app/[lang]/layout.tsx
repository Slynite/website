import Footer from "@/components/footer";
import Header from "@/components/header";
import { getMainDictionary } from "./dictionaries";

export default async function RootLayout({
	children,
    params
}: {
	children: React.ReactNode,
    params: Promise<{lang: string}>
}) {
	const { lang } = await params;
	const dict = await getMainDictionary(lang);

    return (
		<>
            <Header dict={dict}/>
            <div className="flex-grow">
                {children}
            </div>
            <Footer dict={dict}/>
        </>
	);
}
