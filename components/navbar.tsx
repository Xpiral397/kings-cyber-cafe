"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import KingsLogo from "./KingsLogo";
import { ListboxItem } from "@nextui-org/react";
import { AnimationSequence } from "framer-motion";
import { signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data } = useSession();
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
        <SearchIcon className="flex-shrink-0 text-base pointer-events-none text-default-400" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      className="flex justify-between w-full shadow-md "
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent className="flex justify-between ">
        <NavbarBrand as="li" className="w-full gap-3">
          <NextLink className="flex items-center justify-start " href="/">
            <KingsLogo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarItem>
          <ul className="justify-start flex-1 hidden gap-8 ml-2 lg:flex">
            {siteConfig.navItems.map((item: any, index: number) => (
              <NavbarItem
                key={item.href}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                onClick={() => item.onclick()}
              >
                <Link href={item.href ?? "#"}>
                  <p className="text-slate-900 font-[450] border-danger-300 ">
                    {item.label}
                  </p>
                </Link>
              </NavbarItem>
            ))}
          </ul>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex " justify="end">
        <NavbarItem className="hidden gap-2 sm:flex"></NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            onClick={() => {
              if (data?.user?.email ?? false) {
                signOut();
              }
            }}
            as={Link}
            className="text-sm font-bold text-white bg-danger"
            variant="flat"
            color="danger"
          >
            {data?.user?.email ? "Log out" : "Download App"}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="flex flex-col gap-2 mx-4 mt-2">
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
                href={item.href ?? "#"}
                size="lg"
                onClick={() => item.onclick()}
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
