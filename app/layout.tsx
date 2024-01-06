import "@/styles/globals.css";
import {Metadata} from "next";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import {Navbar} from "@/components/navbar";
import {Link} from "@nextui-org/link";
import clsx from "clsx";
import {Facebook, Instagram, LinkedIn, Twitter, WhatsApp} from "@mui/icons-material";

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
	const Links =
		[
			[
				<Facebook key={0} color="inherit" />,
				siteConfig.links.facebook
			],
			[
				<WhatsApp key={0} color="inherit" />,
				siteConfig.links.whatsapp
			],
			[
				<Instagram key={0} color="inherit" />,
				siteConfig.links.Instagram
			],
			[
				<Twitter key={0} color="inherit" />,
				siteConfig.links.twitter
			],
			[
				<LinkedIn key={0} color="inherit" />,
				siteConfig.links.Linkedln
			]
		]

	return (
		<html className="w-full w-screen" lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"w-full h-full bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{attribute: "class", defaultTheme: "light"}}>
					<div className="w-full relative flex flex-col h-full">
						<Navbar />
						<main className="w-full h-full">
							{children}
						</main>
						<footer className="text-white sm:mt-1 mt-[100px] -full bg-danger flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<div className="space-y-3 flex flex-col items-center justify-center ">
									<span className="text-center ">Contact Us</span>
									<ul className="text-white justify center flex items-center space-x-3">
										{Links.map((Link_: Array<any>, index: number) => (<Link className="text-white " key={index} href={Link_[1]}>{Link_[0]}</Link>))}
									</ul>
									<h1>KingsCyberCafe</h1>
								</div>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
