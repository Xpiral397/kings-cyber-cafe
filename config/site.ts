export type SiteConfig = typeof siteConfig;


function ScrollToSite(siteName: string) {
	const siteIdentity = document.getElementById(siteName)
	if(siteIdentity) {
		siteIdentity.scrollIntoView({behavior: 'smooth'})
	}
}

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
			onclick: () => ScrollToSite('home')
		},
		{
			label: "Service",
			href: "/service",
			onclick: () => ScrollToSite('service')
		},
		{
			label: "About us",
			href: "/about",
			onclick: () => ScrollToSite('about-us')
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
			onclick: () => ScrollToSite('home')
		},
		{
			label: "Service",
			href: "/service",
			onclick: () => ScrollToSite('service')
		},
		{
			label: "About us",
			href: "/about",
			onclick: () => ScrollToSite('about-us')
		}
	],
	links: {
		twitter: "https://twitter.com/KingsOnlineCC",
		facebook: "https://web.facebook.com/groups/263466069868705/",
		Instagram: "https://instagram.com/kingsonlinecc?igshid=MzNlNGNkZWQ4Mg==",
		whatsapp: 'https://wa.me/2347052904849',
		Linkedln: 'https://www.linkedin.com/company/king-s-online-cyber-cafe/'
	},
	cards: [
		{
			topic: "Graphics design, Branding & General Printing",
			content: "Match your idea with creative designs, good printing and branding project.",
			button: "Send A Request"
		},
		{
			topic: "Photocopy, Typing & Scanning",
			content: "Acess quick quality sharp photocopies and good typing services.",
			button: "Send A Request"
		},
		{
			topic: "esult checking application & many more",
			content: "Fast result checking, online application with esase",
			button: "Send A Request"
		}
	]
};
