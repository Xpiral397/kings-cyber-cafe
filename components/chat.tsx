"use client"
import {ArrowDropDown, ListAlt, MessageSharp, MoreVertRounded} from '@mui/icons-material'
import {Avatar, Button, User} from '@nextui-org/react'
import React, {useState} from 'react'
import ChartEngine from './chartEngine'
import {ListItemAvatar} from '@mui/material'

export default function Chat() {
    const [isClicked, setIsClicked] = useState<boolean>(false)

    if(!isClicked) {
        return <div className='rounded-md  animate animate-pulse flex absolute top-0 right-0 '>
            <Button onClick={() => setIsClicked(!isClicked)} className='rounded-md w-[200px] shadow-xl mx-2 bg-neutral-100 rotate-180'><span className='rotate-180'>Chat Us</span></Button>
            <div className='relative rounded-full h-10 w-10 flex justify-center items-center bg-[#FF3737] text-white '>
                <div className='absolute rounded-full top-0 mt-3 h-3 w-4  flex justify-center items-center  text-[15px]  bg-white text-white '>

                </div>
                <MessageSharp fontSize={'medium'} color='inherit' />
            </div>
        </div>
    }
    return (
        <div className='border border-green-100'>
            <div className='shadow-xl rounded-md bg-white  absolute md:-mx-[-30px] top-[-420px] right-0 max-h-[24px] w-[387px] md:w-[427px]'>
                <div className='w-full py-10 px-3 bg-red-500 rounded-md text-white'>
                    <div className="flex items-center justify-between w-full">
                        <User
                            name="Jane Doe"
                            description="Product Designer"
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                            }}
                        />

                        <span className="flex text-white">
                            <MoreVertRounded color='inherit' />
                            <div onClick={() => setIsClicked(false)}><ArrowDropDown color='inherit' /></div>
                        </span>

                    </div>
                </div>
                <div className='bg-white'>
                    <div className='bg-[#FF0000] h-[80px] w-full chat-shape'>
                        <div className='flex w-full items-center mt-2 px-3 space-x-2  mb-10'>
                            <div className='h-[55px]'></div>
                            <div className='w-3 h-3 text-white  rounded-full bg-green-500'>
                            </div>
                            <h1 className='text-white text-[12px]'>We reply immediately</h1>
                        </div>
                    </div>
                    <div className=''> <ChartEngine /></div>
                </div>
            </div>
        </div>
    )
}
