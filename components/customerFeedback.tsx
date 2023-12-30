import {CustomerProps} from '@/typing/props'
import {ScrollShadow} from '@nextui-org/react'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick'
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import React, {ReactNode} from 'react'

export function CustomerFeedback({children}: {children: ReactNode}) {
    const customerComponents = React.Children.toArray(children).filter((child) => React.isValidElement(child) && (child.type as any).name == "Customer")
    const ConfigSliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "sm:hidden flex"
    }
    return (
        <div>
            <ScrollShadow className='max-w-full w-full h-full ' offset={100} hideScrollBar orientation='vertical'>
                <div className='flex w-full justify-start px-10 space-x-10 min-w-[254px] min-h-[271px]'>
                    {children}
                </div>
            </ScrollShadow>

        </div>
    )
}

export function Customer({customer}: {customer: CustomerProps}) {
    return (
        < div className='py-10 min-w-[254px] min-h-[271px]' >
            <div id={customer?.id as string} className='space-y-3  w-full relative bg-[#31FFFF] w-[254px] h-[271px] rounded-md text-center'>
                <div className='flex flex-col items-center justify-center absolute left-[38%] -top-10 '>
                    {(customer?.image)}
                </div>
                <div className='min-h-[150px] px-2'>
                    <h1 className="text-7xl font-['Arial', sans-serif]">{'"'}</h1>
                    <h1 className="font-[font-family: 'Roboto', sans-serif] text-slate-700 text-sm">{customer?.feedbackText}</h1>
                </div>
                <div className='mt-10'>
                    <p className="font-bold text-[13px]">{customer?.name}</p>
                    <p className='text-sm'>{customer?.resident}</p>
                </div>
            </div>
        </div >)
}
