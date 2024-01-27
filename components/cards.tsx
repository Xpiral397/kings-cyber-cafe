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
    return <div className="rounded-md mt-10 mb-10 max-h-[320px] max-w-[320px] h-[220px] sm:h-[320px]  w-[320px] px-2  flex flex-col items-center justify-between">

        <div className="max-w-[300px] w-full flex flex-col justify-between h-full items-center ">
            <div>
                <h1 className="font-bold text-2xl text-center text-zinc-500">{props.topic}</h1>
                <h1 className="text-center  px-2 text-medium">{props.content}</h1>
            </div>
            <div className='bg-red-300 w-full flex justify-center items-center'>
            </div><Button className="bg-[#FF3131] rounded-md px-2 py-2 w-1/2 text-slate-100 text-sm font-medium  items-center" variant="flat" type="button">
                Send a Request
            </Button>
        </div>
    </div >
}


export function CardImage({src, alt, type}: {src: string, alt: string, type: boolean}) {
    return (
        type ? <Image className='mac-2' src={src} alt={alt} height={300} width={300} />
            : <Image height={100} width={100} alt={alt} className="mac" src={src} />
    )
}
