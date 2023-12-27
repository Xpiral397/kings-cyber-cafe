import {CardTemplateProps} from "@/typing/props";
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import {ImageConfigContext} from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import Image from "next/image";
import React from 'react'

export default function CardTemplate(props: CardTemplateProps) {
    return (
        <div className="relative max-w-[350px] max-h-[300px] transition ease-in ease-out hover:skew-x-12  duration-[2000s] transform">
            <Image src={props.image} className="relative rounded-md  min-w-[350px]" height={300} width={400} alt={props.alt} />
            <div className="absolute top-0 w-full h-full bg-gradient-to-b  from-transparent via-transparent to-slate-950 duration-900 transition ease-in hover:to-orange-900">
            </div>
            <div className="absolute top-[50%]">
                <div className="p-6 sm:py-2 py-10">
                    {props.footer}
                </div>
            </div>
        </div>
    )
}
