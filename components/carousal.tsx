'use client'
import {ArrowBack, ArrowBackIos, ArrowForward, ArrowForwardIos, BackHand, FlipToBack, KeyboardBackspace} from '@mui/icons-material'
import React, {ReactNode, useEffect, useState} from 'react'

export default function Carousal({Items, className, sidePallet}: {Items: ReactNode[], className?: string, sidePallet: boolean}) {
    const [Item, setItems] = useState<ReactNode[]>(Items)
    const [CurrentItem, setCurrentItem] = useState<{index: number}>({index: 0})


    useEffect(
        () => {
            const Interval = setInterval(() => {
                if(CurrentItem.index + 1 === Item.length) {
                    setCurrentItem(e => ({index: 0}))
                }
                else {
                    setCurrentItem(e => ({index: CurrentItem.index + 1}))
                }
            }, 5000)
            return () => clearInterval(Interval)
        },
        [CurrentItem, Item]
    )
    const Control = (cmd: string): void => {
        switch(cmd) {
            case 'forward':
                setCurrentItem(e => ({index: (e.index === Item.length - 1) ? 0 : e.index + 1}))
                break;
            case 'backward':
                setCurrentItem(e => ({index: e.index == 0 ? Item.length - 1 : e.index - 1}))
                break;
        }
    }
    return (
        <div className={className}>
            <div className='animate animate-slide-left w-full flex items-center justify-center '>
                <div className='relative'>

                    {Item[CurrentItem.index]}
                    {
                        sidePallet &&
                        <div className='bg-gradient-to-r from-slate-800 to-transparent h-full w-[10%] absolute top-0 left-0'></div> &&
                        <div className='bg-gradient-to-l from-slate-800 to-transparent h-full w-[10%] absolute top-0 right-0'></div>
                    } <span className='mx-1 absolute left-0 top-[45%] text-purple-900  text-[10px] font-black ' onClick={() => {Control('backward')}}><ArrowBackIos /></span>
                    <span className='mx-1 absolute right-0 top-[45%] text-purple-950 text-[10px] font-black ' onClick={() => {Control('forward')}}><ArrowForwardIos /></span>
                </div>
            </div>
        </div>
    )
}
