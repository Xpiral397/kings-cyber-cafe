export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Pricing",
			href: "/pricing",
		},
		{
			label: "Service",
			href: "/service",
		},
		{
			label: "About us",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		download: "#"
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
