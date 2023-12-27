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
import researcher from '@/public/svgs/researcher-svgs.svg'


// NextUI
import Image from "next/image";
import {Button} from "@nextui-org/button";
import {ScrollShadow} from "@nextui-org/react";
import CardTemplate from "@/components/cards";

export default function Home() {
	return (
		<main className="mb-10 w-full  flex flex-col items-center justify-center">



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
					<h1 className="text-4xl mt-10 font-medium">All Your Cafe Needs Are Here</h1>
					<p>Printing, Photocopy, Book Binding, Lamination, Project Writing and more </p>
				</div>

				<ScrollShadow hideScrollBar orientation="vertical" offset={100} className="max-width-[600px] w-full w-full flex items-center lg:justify-center space-x-10">
					<CardTemplate image={researcher.src} alt='img-1' footer={
						<h1 className="text-white text-sm  ">Researcher & Project Work</h1>} />
					<CardTemplate image={researcher.src} alt='img-2' footer={
						<h1 className="text-white text-sm  ">Researcher & Project Work</h1>} />
					<CardTemplate image={researcher.src} alt='img-3' footer={
						<h1 className="text-white text-sm  ">Researcher & Project Work</h1>} />
				</ScrollShadow>
			</div>
		</main>
	);
}
