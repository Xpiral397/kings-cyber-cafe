import React from 'react'
import {siteConfig} from "@/config/site";
import {ArrowDropDown, Facebook, Instagram, LinkedIn, List, ListAlt, MessageSharp, Twitter, WhatsApp} from "@mui/icons-material";
import {Link} from '@nextui-org/link';


export default function Footer() {
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
        <footer className="text-white sm:mt-1 mt-[100px] w-full bg-[#C30015] flex items-center justify-center py-10">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
            >
                <div className="relative space-y-3 flex flex-col items-center justify-center ">
                    <div className="absolute top-[-50px] w-[400px] rounded-md bg-white shadow-2xl  ">
                        Bluestacks |
                    </div>
                    <span className="text-center ">Contact Us</span>
                    <ul className="text-white justify center flex items-center space-x-3">
                        {Links.map((Link_: Array<any>, index: number) => (<Link className="text-white " key={index} href={Link_[1]}>{Link_[0]}</Link>))}
                    </ul>
                    <h1>KingsCyberCafe</h1>
                </div>
            </Link>
        </footer>
    )
}
