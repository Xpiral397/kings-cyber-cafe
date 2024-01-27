import Startar from '@/components/Starter'
import {Call, CallOutlined, LocationCityRounded, LocationCityTwoTone, LocationOn, LocationOnOutlined, Message, MessageSharp} from '@mui/icons-material'
import {Button} from '@nextui-org/button'
import {Input} from '@nextui-org/input'
import {Divider} from '@nextui-org/react'
import React from 'react'


export default function Page() {
    return (
        <div className='relative h-[120vh]'>
            <Startar />
            <div className='flex sm:flex-row flex-col lg:justify-around justify-between  px-2 items-start space-y-5  sm:space-x-10'>
                <div className='space-y-5'>
                    <p className='text-2xl font-bold text-zinc-950'>
                        Our Location
                    </p>
                    <div className='space-y-2 items-start'>
                        <p>
                            <span className='focus:outline-none mb-10 font-[200] text-[12px]'><LocationOnOutlined /> ODUDUWA UNIVERSITY, ILE IFE</span>
                        </p>
                        <p><span className=' text-slate-900 font-[200]'><CallOutlined color='inherit' /> +234 705 2904 849</span></p>
                    </div>
                    <Divider className='sm:flex w-full hidden' />
                </div>

                <div className='space-y-3 sm:w-[600px]  w-full '>
                    <div className=' flex items-center   justify-between  space-x-5'>
                        <input className='text-zinc-950 text-[15px]  text-slate-950 text-[15px] focus:outline-none rounded-[46px] bg-[#FFF7F7] w-full px-5 py-3 border border-slate-200' placeholder='name' />
                        <input className='text-zinc-950 text-[15px]  focus:outline-none rounded-[46px] bg-[#FFF7F7] w-full px-5 py-3 border border-slate-200' placeholder='Email' />
                    </div>
                    <div className='space-y-2'>
                        <input className='text-zinc-950 text-[15px]  rounded-[46px] bg-[#FFF7F7] w-full px-5 py-3 border border-slate-200' placeholder='Subject' />
                        <textarea className='focus:outline-none bg-[#FFF7F7] px-8 py-8 border border-slate-200 rounded-[46px] h-[300px] w-full' placeholder='Your Message'>
                        </textarea>
                    </div>
                    <div className="text-center flex justify-center ">
                        <Button variant='flat' type='button' className='py-5 px-10 h-8 shadow-xl rounded-[46px] bg-[#FF3737] flex items-center justify-center  text-neutral-100'>Send Your Message</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
