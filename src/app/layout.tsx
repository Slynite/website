import "./[lang]/globals.css";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Slynite",
	applicationName: "Slynite",
	referrer: "origin",
	keywords: ["Slynite", "Travelventures", "ActiveHQ.works", "Open Source", "Privacy", "Privacy-focused", "Security", "Transparency", ],
	robots: "index,follow",
	openGraph: {
		type: "website",
		url: "https://slynite.com",
		title: "Slynite",
		siteName: "Slynite",
		description: "Slynite is a company who focuses on privacy, transparency and security on the internet.",
		images: [{
			url: "https://slynite.com/ressources/slynite-og-banner.jpg",
		}],
	},
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
    return (
		<html lang="en">
			<body className={`${roboto.className} text-gray-200 flex flex-col min-h-screen h-screen container mx-auto text-sm px-6 lg:px-5 xl:px-36 2xl:px-64`}>
				{children}
			</body>
		</html>
	);
}
