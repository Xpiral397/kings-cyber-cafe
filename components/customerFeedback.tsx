import {CustomerProps} from '@/typing/props'
import {ScrollShadow} from '@nextui-org/react'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick'
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import React, {ReactNode} from 'react'
import Carousal from './carousal';
import {FormatQuoteOutlined, FormatQuoteRounded} from '@mui/icons-material';

export function CustomerFeedback({children}: {children: ReactNode[]}) {
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
                <div className='flex w-full items-center justify-center px-2 space-x-10 min-w-[254px] min-h-[271px]'>
                    <Carousal sidePallet={false} Items={children} />
                    <Carousal className='hidden md:flex' sidePallet={false} Items={children} />
                    <div className='hidden lg:flex'>
                        <Carousal sidePallet={false} Items={children} />
                    </div>
                </div>
            </ScrollShadow>

        </div>
    )
}

export function Customer({customer}: {customer: CustomerProps}) {
    return (
        < div className='py-10 w-[300px]' >
            <div id={customer?.id as string} className='py-2 text-cent space-y-1 w-[300px] relative bg-[#31FFFF] rounded-md text-center px-3 '>
                <div className='flex flex-col items-center  absolute w-full -top-10 mx-[10px] ' >
                    {(customer?.image)}
                </div >

                <div>
                    <div className='min-h-[150px] px-2'>
                        <h1 className="text-7xl font-['Arial', sans-serif] text-center "><FormatQuoteRounded /></h1>
                        <h1 className="font-[font-family: 'Roboto', sans-serif] w-full text-slate-700 text-sm">{customer?.feedbackText}</h1>
                    </div>
                    <div className='mt-10'>
                        <p className="font-bold text-[13px]">{customer?.name}</p>
                        <p className='text-sm'>{customer?.resident}</p>
                    </div>
                </div >
            </div>
        </div >)
}
