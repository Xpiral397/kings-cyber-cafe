import {button as buttonStyles} from "@nextui-org/theme";
import {title, subtitle} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import {Snippet} from "@nextui-org/snippet";
import {siteConfig} from "@/config/site";
import {Code} from "@nextui-org/code"
import {Link} from "@nextui-org/link";

// Images Imports
import MobileSample from '@/public/svgs/mb-display.svg'
import MainView from "@/public/svgs/main-kings.svg"
import Researcher from '@/public/svgs/researcher-svgs.svg'
import LaptopAtWork from '@/public/svgs/laptotp.svg'
import WomenTeaching from '@/public/pngs/Image.jpg'
import PaperCounting from '@/public/pngs/design.jpg'
import GuyWriting from '@/public/pngs/scanning.jpg'
import ResultCheking from '@/public/svgs/result-checking.svg'
import ApplePlayStore from '@/public/svgs/apple-play.svg'
import GooglePlayStore from '@/public/svgs/google-play.svg'
import KingsMobilePreview from '@/public/svgs/mb-white.svg'
import SVGPattern from '@/public/svgs/pattern.svg'
import AboutUss from '@/public/svgs/aboutUs.svg'
import Customer1 from '@/public/svgs/customer-1.svg'
import Customer2 from "@/public/svgs/customer-2.svg"
import Customer3 from "@/public/svgs/customer-3.svg"
import MobileView from '@/public/svgs/mobile-view.svg'


// NextUI
import Image from "next/image";
import {Image as Images} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {ScrollShadow} from "@nextui-org/react";
import CardTemplate, {Card, CardImage} from "@/components/cards";
import {Customer, CustomerFeedback} from "@/components/customerFeedback";
import {CustomerProps} from "@/typing/props";
import Carousal from "@/components/carousal";
import {Facebook, Instagram, LinkedIn, LocationCity, LocationCityRounded, LocationOn, Twitter, WhatsApp} from "@mui/icons-material";
import ReachOutToUsTemplate from "@/components/ReachOutToUs";
import Startar from "@/components/Starter";
import Footer from "@/components/footer";


export default function Home() {

    // Card
    const GraphicsCard = <Card topic="Graphics design, Branding & General Printing" content="Match your idea with creative design, good printing, an branding project" button="Send a Request" />
    const ResultCheckings = <Card topic="Result checking , online application with ease" content="Fast result checking, online application with ease " button='Send a Request' />
    const PhotoCopy = <Card topic="Photocopy, Typing & Scanning" content="Access quick quality sharp photocopies and good typing service" button="Send a Rquest"></Card>


    // Images
    const Image1 = <Images
        width={340}
        src={PaperCounting.src}
        alt="NextUI Album Cover"
        classNames="m-5"
    />
    const Image2 = <Images
        isBlurred
        width={340}
        src={WomenTeaching.src}
        alt="NextUI Album Cover"
        classNames="m-5"
    />
    const ImageCustomer1 = <Image src={Customer1.src} width={64} height={300} alt="customer-image" />
    const ImageCustomer2 = <Image src={Customer2.src} width={64} height={300} alt="customer-image" />
    const ImageCustomer3 = <Image src={Customer3.src} width={64} height={300} alt="customer-image" />
    const Image3 = <Images
        isBlurred
        width={340}
        src={GuyWriting.src}
        alt="NextUI Album Cover"
        classNames="m-5"
    />


    // Data

    const CustomerData: CustomerProps[] = [
        {
            id: 1,
            image: ImageCustomer1,
            name: "Jason Oladipo",
            resident: 'Student',
            feedbackText: 'They are amazing and helped out with my project. For from the typing, to printing and my spiral binding, they handled them all and my project came it excellent well'
        },
        {
            id: 1,
            image: ImageCustomer2,
            name: "Abidemi Hassan",
            resident: 'Professional',
            feedbackText: 'They are amazing and helped out with my project. For from the typing, to printing and my spiral binding, they handled them all and my project came it excellent well'
        },
        {
            id: 1,
            image: ImageCustomer2,
            name: "Grace Thomas",
            resident: 'Student',
            feedbackText: 'I got my printing job done at an unbelievable price and got it the same day. Thank you'

        }
    ]

    return (
        <main className="relative space-y-10" id='home'>
            <section>
                <Startar />

                <div className="space-y-10 w-full flex flex-col justify-center items-center" id='service'>
                    <div>
                        <h1 className="text-2xl text-center sm:text-4xl mt-10 font-medium">All Your Cafe Needs Are Here</h1>
                        <p className="text-center">Printing, Photocopy, Book Binding, Lamination, Project Writing and more </p>
                    </div>

                    <ScrollShadow hideScrollBar orientation="vertical" offset={100} className="hidden max-width-[600px] w-full w-full md:flex items-center lg:justify-center space-x-10">
                        <CardTemplate image={Researcher.src} alt='img-1' footer={
                            <h1 className="text-white text-sm  ">Researcher & Project Work</h1>} />
                        <CardTemplate image={ResultCheking.src} alt='img-2' footer={
                            <h1 className="text-white text-sm  "><p>Result checking, </p><p>online application & many more</p></h1>} />
                        <CardTemplate image={LaptopAtWork} alt='img-3' footer={
                            <h1 className="text-white text-sm  ">
                                <p>Spiral Binding</p>
                                <p>Hard cover Binding Stationaries</p>
                            </h1>} />
                    </ScrollShadow>

                    <Carousal
                        className="sm:flex md:hidden block"
                        sidePallet={true}
                        Items={
                            [
                                <CardTemplate
                                    image={Researcher.src}
                                    alt='img-1'
                                    key={1}
                                    footer={
                                        <h1 className="text-white text-sm  ">Researcher & Project Work</h1>
                                    }
                                />,
                                <CardTemplate
                                    image={ResultCheking.src}
                                    alt='img-2'
                                    key={2}
                                    footer={
                                        <h1 className="text-white text-sm  ">
                                            <p>Result checking, </p>
                                            <p>online application & many more</p>
                                        </h1>}
                                />,
                                <CardTemplate
                                    image={LaptopAtWork}
                                    alt='img-3'
                                    key={3}
                                    footer={
                                        <h1 className="text-white text-sm  ">
                                            <p>Spiral Binding</p>
                                            <p>Hard cover Binding Stationaries</p>
                                        </h1>}
                                />
                            ]
                        }
                    />
                </div>

                <div className="flex justify-center items-center py-10 mb-10 space-x-5">
                    <input className="border border-slate-500 px-2 focus:outline-none py-3 w-[350px] text-slate-900 rounded-md" placeholder="Email" />
                    <Button className="rounded-md bg-[#FF3737] text-slate-100 text-[13px]"><Link href="/login">Sign Up - it's Free !</Link></Button>
                </div>

                <div className="justify-center w-full mt-10 flex flex-row items-center h-full md:space-x-[50px] lg:space-x-[100px] mt-10" id="customer">
                    <div>
                        <Image
                            className="hidden md:flex"
                            src={MobileSample}
                            alt="Mobile Sample"
                            height={250}
                            width={250}
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-5">
                        <h1 className="font-bold text-4xl">How it works</h1>
                        <div className="flex justify-between w-full">
                            <div className="w-full flex flex-col justify-center items-center">
                                <div>01</div>
                                <div className="w-[2px] h-20 bg-zinc-500"></div>
                            </div>
                            <div className="flex justify-center flex-col">
                                <h1 className="text-md font-bold">
                                    Create a free account
                                </h1>
                                <h1 className="min-w-[200px] text-sm font-[400] w-full">
                                    Sign up for a free account with your name email and number.
                                </h1>
                            </div>
                        </div>
                        <div className="w-full flex justify-between">
                            <div className="w-full flex flex-col justify-center items-center">
                                <div>02</div>
                                <div className="w-[2px] h-20 bg-zinc-500"></div>
                            </div>
                            <div className="flex justify-center flex-col">
                                <h1 className="text-md font-bold">
                                    Pick a service you want
                                </h1>
                                <h1 className="min-w-[200px] text-sm font-[400] w-full">
                                    Select amng different of your name, email, number.
                                </h1>
                            </div>
                        </div>
                        <div className="w-full flex justify-between">
                            <div className="w-full flex flex-col justify-center items-center">
                                <div>03</div>
                                <div className="w-[2px] h-20 bg-zinc-500"></div>
                            </div>
                            <div className="flex justify-center flex-col">
                                <h1 className="text-md font-bold">
                                    Place an order
                                </h1>
                                <h1 className="min-w-[200px] text-sm font-[400] w-full">
                                    Create order description and details.
                                </h1>
                            </div>
                        </div>
                        <Button type="button" variant="flat" size="md" className="mt-5 rounded-md bg-danger-500  w-[300px] text-white text-sm">
                            <h1 className="text-slate-100 text-sm ">Download App</h1>
                        </Button>
                    </div>
                </div>

                <div className="hidden lg:flex justify-center items-center w-full h-full ">
                    {/* <ScrollShadow orientation="vertical" className="flex items-center  justify-center mt-20 max-width-full h-full"> */}
                    {/* <div className="hidden md:flex -space-x-5 items-center justify-center ">
                            <div className="w-full flex flex-col items-center justify-between">
                                <div>{GraphicsCard}</div>
                                <div>{Image2}</div>
                            </div>
                            <div className="-full flex flex-col items-center justify-center">
                                <div>{Image2}</div>
                                <div>{ResultCheckings}</div>
                            </div>
                            <div className="-full flex flex-col items-center justify-center">
                                <div>{PhotoCopy}</div>
                                <div>{Image2}</div>
                            </div>
                        </div> */}

                    <div className='mt-[200px]'>
                        <div className="flex space-y-5">
                            <div>{GraphicsCard}</div>
                            <div>{Image1}</div>
                            <div>{PhotoCopy}</div>
                        </div>

                        <div className="flex">
                            <div>{Image3}</div>
                            <div>{ResultCheckings}</div>
                            <div>{Image2}</div>

                        </div>
                    </div>
                    {/* </ScrollShadow> */}
                </div>


                <ScrollShadow orientation="vertical" className="max-width-[100px] scale-[800px] w-full h-full">
                    <div className=" mt-[200px] lg:hidden flex flex-col -space-x-5 items-center justify-center ">
                        <div className="w-full flex flex-col items-center justify-between">
                            <div>{Image1}</div>
                            <div>{GraphicsCard}</div>
                        </div>
                        <div className="-full flex flex-col items-center justify-center">
                            <div>{Image2}</div>
                            <div>{ResultCheckings}</div>

                        </div>
                        <div className="-full flex flex-col items-center justify-center">
                            <div>{Image3}</div>
                            <div>{PhotoCopy}</div>
                        </div>
                    </div>
                </ScrollShadow>
            </section>





            <div className="space-y-0 sm:space-y-5 h-full h-screen flex  sm:flex-row flex-col justify-center sm:justify-around items-center ">
                <div className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl sm:px-2 px-5">
                    <div>{PhotoCopy}</div>
                </div>
            </div>

            <div className="absolute butom-0 flex items-center mt-[500px] w-full justify-center z-[100]">
                <div className=" px-10 py-10 space-y-10 w-[400px] mt-[-200px] rounded-md text-slate-950 text-center font-[500] bg-white shadow-2xl">

                    <div className="text-[16px]">
                        Have a Project in mind?
                    </div>
                    <Button className='px-6 py-3 bg-[#FF3737] text-white rounded-md w-[200px] text-[16px] font-[600]'>Book Now</Button>
                </div>
            </div>
            <Footer />

        </main >
    );
}
