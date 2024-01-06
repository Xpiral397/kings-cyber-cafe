import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Kbd} from "@nextui-org/kbd";
import {Link} from "@nextui-org/link";
import {Input} from "@nextui-org/input";

import {link as linkStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import {Logo} from "@/components/icons";
import KingsLogo from "./KingsLogo";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar className="w-full flex justify-between w-full" maxWidth="full" position="sticky">
			<NavbarContent className="flex justify-between " >
				<NavbarBrand as="li" className="gap-3 w-full">
					<NextLink className="flex justify-start items-center " href="/">
						<KingsLogo />
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify="center">
				<NavbarItem>
					<ul className="hidden lg:flex gap-8 justify-start ml-2 flex-1">
						{siteConfig.navItems.map((item) => (
							<NavbarItem key={item.href}>
								<NextLink
									className={clsx(
										linkStyles({color: "foreground"}),
										"data-[active=true]:text-primary data-[active=true]:font-medium"
									)}
									color="foreground"
									href={item.href}
								>
									<p className="font-medium border-danger-300 border-b">{item.label}</p>
								</NextLink>
							</NavbarItem>
						))}
					</ul>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex " justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
				</NavbarItem>
				{/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
				<NavbarItem className="hidden md:flex" >
					<Button
						isExternal
						as={Link}
						className="text-sm  bg-danger text-white font-bold"
						href={siteConfig.links.download}
						variant="flat"
						color="danger"
					> Downalod App
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{/* {searchInput} */}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
