import Footer from "@/components/footer";
import "./globals.css";
import { Roboto } from "next/font/google";
import { getDictionary } from "./dictionaries";
import { usePathname } from "next/navigation";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
    return (
		<html lang="en">
			<body className={`${roboto.className} text-gray-200 flex flex-col min-h-screen h-screen container mx-auto text-sm px-6 lg:px-5 xl:px-36 2xl:px-64`}>
				<div className="flex-grow">
                    {children}
                </div>
                <Footer/>
			</body>
		</html>
	);
}
