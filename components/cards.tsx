import {CardProps, CardTemplateProps} from "@/typing/props";
import {Button} from "@nextui-org/button";
import {ImageConfigContext} from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import Image from "next/image";
import React from 'react'

export default function CardTemplate(props: CardTemplateProps) {
    return (
        <div className="relative max-w-[350px] max-h-[300px] transition hover:rounded-md hover:-translate-y-2 delay-100 duration-[2000s] transform">
            <Image src={props.image} className="scale-y-10 relative rounded-md  min-w-[350px]" height={300} width={400} alt={props.alt} />
            <div className="absolute top-0 w-full h-full bg-gradient-to-b  from-transparent hover:via-bg-ornage-500 via-transparent to-slate-950 delay-200 duration-300   transition ease-in-out hover:to-orange-900">
            </div>
            <div className="absolute top-[70%]">
                <div className="p-6 sm:py-2 py-2 text-white font-bold text-medium ">
                    {props.footer}
                </div>
            </div>
        </div>
    )
}

export function Card(props: CardProps) {
    return <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-sm">{props.topic}</h1>
        <div>
            {props.content}
        </div>
        <Button className="bg-danger-500 text-slate-100 text-sm font-medium " variant="flat" type="button">
            {props.button}
        </Button>
    </div>
}
