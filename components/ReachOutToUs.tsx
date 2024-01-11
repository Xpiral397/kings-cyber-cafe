import {Divider} from '@nextui-org/react'
import {link} from 'fs'
import Link from 'next/link'
import React from 'react'

export default function ReachOutToUsTemplate(props: {
    logo: any,
    title: string,
    link: string
}) {
    return (

        <Link href={props.link}>
            <div className='w-full  p-6 rounded-md scale-10 bg-white shadow-2xl hover:bg-purple-100'>
                <h1 className='text-left font-bold text-green-600 text-[16px]'>{props.title}</h1>
                <Divider />
                <div className='w-full text-center items-center justify-center '>
                    {
                        props.logo
                    }
                </div>
            </div>

        </Link >
    )
}
