import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "Slynite - Company for Privacy, Security and Transparency on the Internet",
	description:
		"We are a company who focused on privacy, transparency and security on the internet.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${roboto.className} text-gray-200 min-h-screen container mx-auto px-4 lg:px-5 xl:px-36 2xl:px-64`}>
				{children}
			</body>
		</html>
	);
}
