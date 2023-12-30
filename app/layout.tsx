import "@/styles/globals.css";
import {Metadata} from "next";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import {Navbar} from "@/components/navbar";
import {Link} from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{media: "(prefers-color-scheme: light)", color: "white"},
		{media: "(prefers-color-scheme: dark)", color: "black"},
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="w-full w-screen" lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"w-full h-full bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
					<div className="w-full relative flex flex-col h-full">
						<Navbar />
						<main className="w-full h-full">
							{children}
						</main>
						<footer className="sm:mt-1 mt-[100px] -full bg-danger flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<span className="text-default-600">Contact Us</span>
								<p className="text-primary">Kings</p>
								<h1>KingsCyberCafe</h1>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
