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
import WomenTeaching from '@/public/svgs/wm-teach.svg'
import PaperCounting from '@/public/paper-conting.svg'
import ResultCheking from '@/public/svgs/result-checking.svg'


// NextUI
import Image from "next/image";
import {Button} from "@nextui-org/button";
import {ScrollShadow} from "@nextui-org/react";
import CardTemplate from "@/components/cards";

export default function Home() {
	const ImagesStroll = []
	return (
		<main className="mb-10 w-full  flex flex-col items-center justify-center space-y-10" >
			<div className="relative h-full w-full overflow-hidden sm:h-[50vh] h-[60vh]">
				<div>
					<Image
						src={MainView}
						alt="Mobile Sample"
						layout="fill"
						objectFit="cover"
						quality={900} // Adjust quality as needed
					/>
					<div className="absolute w-full sm:h-[50vh] h-[60vh] bg-[#008C83] opacity-[0.5]"></div>
				</div>
				<div className="flex justify-center items-center relative  w-full h-[60vh] bg-[#00000001]">
					<div className="flex flex-col justify-between h-full">
						<div className="sm:hidden">
							<section className="flex flex-col mt-10 w-full h-full justify-center items-center text-white p-8">
								<h1 className="text-6xl font-bold mb-4 text-center">
									<p>Your Trusted</p>
									<p className="whitespace-nowrap">Partner In <span className="text-orange-500">Digital</span></p>
									<p>Cafe Experience</p>
								</h1>
								<Button variant="flat" className="rounded-md p-6 w-full bg-red-500 text-white text-sm">
									Start A Project
								</Button>
							</section>
						</div>
					</div>

					<div className="hidden sm:flex items-center justify-around w-full">
						<section className=" flex flex-col   text-white ">
							<h1 className="text-6xl font-bold space-y-1 ">
								<p>Your Trusted</p>
								<p>Partner In <span className="text-orange-500">Digital</span></p>
								<p>Cafe Experience</p>
							</h1>
							<Button variant="flat" size="md" className="mt-5 rounded-md bg-danger-500  w-[300px] text-white text-sm">
								Start A Project
							</Button>
						</section>
						<div className="w-[300px] h-[500px]">
							<Image
								className="mb-20  transform skew-y-12 "
								src={MobileSample}
								alt="Mobile Sample"
								height={250}
								width={400}
								objectFit="cover"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="space-y-10 w-full flex flex-col justify-center items-center">
				<div>
					<h1 className="text-2xl text-center sm:text-4xl mt-10 font-medium">All Your Cafe Needs Are Here</h1>
					<p className="text-center">Printing, Photocopy, Book Binding, Lamination, Project Writing and more </p>
				</div>

				<ScrollShadow hideScrollBar orientation="vertical" offset={100} className="max-width-[600px] w-full w-full flex items-center lg:justify-center space-x-10">
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
			</div>

			<div className="mt-10 flex flex-row items-center h-full -space-x-[50px] sm:space-x-[100px] mt-10">
				<div>
					<Image
						className="hidden sm:flex"
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
							<h1 className="w-[200px] text-sm font-[400] w-full">
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
							<h1 className="w-[200px] text-sm font-[400] w-full">
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
							<h1 className="w-[200px] text-sm font-[400] w-full">
								Create order description and details.
							</h1>
						</div>
					</div>
					<Button type="button" variant="flat" size="md" className="mt-5 rounded-md bg-danger-500  w-[300px] text-white text-sm">
						<h1 className="text-slate-100 text-sm ">Download App</h1>
					</Button>
				</div>
			</div>
		</main>
	);
}
