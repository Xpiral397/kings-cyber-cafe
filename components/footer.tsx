import React from "react";
import { siteConfig } from "@/config/site";
import {
  ArrowDropDown,
  Facebook,
  Instagram,
  LinkedIn,
  List,
  ListAlt,
  MessageSharp,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

export default function Footer() {
  const Links = [
    [<Facebook key={0} color="inherit" />, siteConfig.links.facebook],
    [<WhatsApp key={0} color="inherit" />, siteConfig.links.whatsapp],
    [<Instagram key={0} color="inherit" />, siteConfig.links.Instagram],
    [<Twitter key={0} color="inherit" />, siteConfig.links.twitter],
    [<LinkedIn key={0} color="inherit" />, siteConfig.links.Linkedln],
  ];
  return (
    <footer>
      <div className="sm:px-2 px-3 text-[Roboto] text-white sm:mt-1 mt-[100px] w-full bg-[#C30015] flex items-center justify-center py-10">
        <div className="flex flex-col justify-between w-full px-1 space-y-5 lg:justify-around sm:px-10 sm:flex-row">
          <div className="space-y-5 text-sm text-white">
            <h1 className="font-[500] text-white text-[15px]">Contact Us</h1>
            <h1>+234 705 2904 849</h1>
            <h1>Office Address: Oduduwa University, Ile-Ife</h1>
            <h1 className="mt-3 text-yellow-400">
              {" "}
              Download King’s app from Playstore here
            </h1>
          </div>
          <div className="relative flex flex-col items-start justify-center space-y-3 ">
            <span className="text-left ">Get in touch </span>
            <ul className="flex items-center space-x-3 text-white justify center">
              {Links.map((Link_: Array<any>, index: number) => (
                <Link className="text-white " key={index} href={Link_[1]}>
                  {Link_[0]}
                </Link>
              ))}
            </ul>
            <Input
              className="w-full"
              placeholder="Your email here"
              endContent={
                <button className="rounded-md bg-[#C30015] h-full  w-full">
                  Subscribe Now
                </button>
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full px-2 py-10 mt-10 bg-red-600 sm:flex-row ">
        <h1 className="w-full text-sm text-center text-white ">
          All rights reserved by King’s Online Cyber Cafe. Copyright © 2024
        </h1>
        <ul className="flex justify-around w-full mt-10 text-sm text-white ">
          <li>Cookie policy </li>
          <li>Cookie Setting </li>
          <li>Terms & use </li>
        </ul>
      </div>
    </footer>
  );
}
