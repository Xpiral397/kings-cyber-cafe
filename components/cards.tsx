import {CardTemplateProps, CardProps} from "@/typing/props";
import {Button, Divider} from "@nextui-org/react";
import {ImageConfigContext} from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import Image from "next/image";
import React from 'react'

export default function CardTemplate(props: CardTemplateProps) {
    return (
        <div className="relative h-full w-full  transition hover:rounded-md hover:-translate-y-2 delay-100 duration-[2000s] transform">
            <Image src={props.image} className="relative rounded-md  min-w-[350px]" height={300} width={500} alt={props.alt} />
            <div className="absolute top-0 w-full h-full bg-gradient-to-b  from-transparent hover:via-bg-ornage-500 via-transparent to-slate-950 delay-200 duration-300   transition ease-in-out hover:to-orange-900">
            </div>
            <div className="absolute top-[50%]">
                <div className="p-6 sm:py-2 py-2 text-white font-bold text-medium">
                    {props.footer}
                </div>
            </div>
        </div>
    )
}

export function Card(props: CardProps) {
    return <div className="rounded-md mt-10 mb-10 max-h-[350px] max-w-[350px] h-[120px] sm:h-[300px]  w-[350px]  flex flex-col items-center justify-between">

        <div className="max-w-[300px]">
            <h1 className="font-bold text-sm text-center text-orange-500">{props.topic}</h1>
            <Divider />
            <h1 className="text-left px-2 text-medium">{props.content}</h1>
        </div>
        <Button className="bg-danger-500 text-slate-100 text-sm font-medium " variant="flat" type="button">
            Send a Request
        </Button>
    </div>
}


export function CardImage({src, alt, type}: {src: string, alt: string, type: boolean}) {
    return (
        type ? <Image className='mac-2' src={src} alt={alt} height={300} width={300} />
            : <Image height={100} width={100} alt={alt} className="mac" src={src} />
    )
}
