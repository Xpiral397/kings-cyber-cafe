import {Divider} from '@nextui-org/react'
import {link} from 'fs'
import Link from 'next/link'
import React from 'react'

export default function ReachOutToUsTemplate(props: {
    logo: any,
    title: any,
    link: string,
    text?: string,
}) {
    return (

        <Link href={props.link} className='hover:scale-10 transition duration-300 ease-in ease-out'>


            <div className='w-full  rounded-md scale-10 bg-white shadow-2xl hover:bg-purple-100'>
                <div className=' max-w-[20px] max-h-[20px] w-full h-full relative'>
                    <span className='absolute bg-[#AEEE2E] rounded-full top-[-20px] left-[-10px] w-[25px] h-[25px] '></span>
                </div>
                <div className='p-6'>
                    <h1 className='text-left font-bold text-green-600 text-[16px] text-center'>{props.title}</h1>
                    <Divider className='opacity-[0.5]' />
                    {props.text && <h1>{props.text}</h1>}
                    <div className='w-full text-center items-center justify-center text-green-500 text-3xl  '>{props.logo}</div>
                </div>

            </div>

        </Link >
    )
}
