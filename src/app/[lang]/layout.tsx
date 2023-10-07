import Footer from "@/components/footer";
import Header from "@/components/header";
import { getMainDictionary } from "./dictionaries";

export default async function RootLayout({
	children,
    params
}: {
	children: React.ReactNode,
    params: {lang: string}
}) {
	const dict = await getMainDictionary(params.lang);

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
