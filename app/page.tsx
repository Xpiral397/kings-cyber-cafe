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
import PaperCounting from '@/public/svgs/paper-conting.svg'
import GuyWriting from '@/public/svgs/guy-writing.svg'
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
import {Button} from "@nextui-org/button";
import {ScrollShadow} from "@nextui-org/react";
import CardTemplate, {Card, CardImage} from "@/components/cards";
import {Customer, CustomerFeedback} from "@/components/customerFeedback";
import {CustomerProps} from "@/typing/props";
import {Kings} from "next/font/google";
import Carousal from "@/components/carousal";



export default function Home() {

	// Card
	const GraphicsCard = <Card topic="Graphics design, Branding & General Printing" content="Match your idea with creative design, good printing, an branding project" button="Send a Request" />
	const ResultCheckings = <Card topic="Result checking , online application with ease" content="Fast result checking, online application with ease " button='Send a Request' />
	const PhotoCopy = <Card topic="Photocopy, Typing & Scanning" content="Access quick quality sharp photocopies and good typing service" button="Send a Rquest"></Card>


	// Images
	const Image1 = <Image src={PaperCounting.src} alt='result-cheking' width={300} height={100} />
	const Image2 = <Image src={WomenTeaching.src} alt='result-cheking' width={400} height={500} />
	const ImageCustomer1 = <Image src={Customer1.src} width={64} height={300} alt="customer-image" />
	const ImageCustomer2 = <Image src={Customer2.src} width={64} height={300} alt="customer-image" />
	const ImageCustomer3 = <Image src={Customer3.src} width={64} height={300} alt="customer-image" />
	const Image3 = <Image className=" max-h-[350px] max-w-[250px]" src={GuyWriting.src} alt='result-cheking' width={400} height={0} />


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
		<main className="space-y-10" id='home'>
			<section className="mb-10 w-full  flex flex-col items-center justify-center space-y-10" >
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
									<h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">
										<p>Your Trusted</p>
										<p className="whitespace-nowrap">Partner In <span className="text-orange-500">Digital</span></p>
										<p>Cafe Experience</p>
									</h1>
									<Button variant="flat" className="rounded-md p-6 px-5 sm:w-full bg-red-500 text-white text-sm">
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

				<div className=" mt-10 flex flex-row items-center h-full md:space-x-[50px] lg:space-x-[100px] mt-10" id="customer">
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

				<div>
					<ScrollShadow orientation="vertical" className="mt-20 max-width-full h-full">
						<div className="hidden md:flex -space-x-5 items-center justify-center ">
							<div className="w-full flex flex-col items-center justify-between">
								<div>{GraphicsCard}</div>
								<div>{Image2}</div>
							</div>
							<div className="-full flex flex-col items-center justify-center">
								<div>{Image1}</div>
								<div>{ResultCheckings}</div>
							</div>
							<div className="-full flex flex-col items-center justify-center">
								<div>{PhotoCopy}</div>
								<div>{Image3}</div>
							</div>
						</div>
					</ScrollShadow>

					<ScrollShadow orientation="vertical" className="max-width-[100px] scale-[800px] w-full h-full">
						<div className="md:hidden flex flex-col -space-x-5 items-center justify-center ">
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
				</div>
			</section>

			<section>
				<div className='overflow-hidden relative flex flex-col justify-center items-center sm:py-1 py-[100px] ' style={{
					backgroundImage: `url(${SVGPattern.src})`
				}}>
					<div className="absolute w-full h-full bg-gradient-to-b  from-white from-10% via-transparent via-30%  to-green-200 to-90% bg-gradient-stops-0 "></div>
					<div className="relative justify-around mb-10  ">
						<h1 className="mt-8 text-center font-bold text-4xl font-[cursive, Heltivica , Poppins, sans-serif]"> {"Why King's App"}</h1>
						<div className=" gap-x-[56px] mt-[300px] z-[10] flex sm:flex-row flex-col items-center justify-evenly ">
							<ul className="text-left w-[300px]  md:w-[400px] text-[14px] p-1 space-y-2 sm:px-5">
								<li>
									<h1 className="font-bold text-medium ">
										We’re budget friendly
									</h1>
									<p className="text-zinc-900 ">We asked around and crunched the numbers, and some of our customers save up to 68% on their monthly printing bill</p>
								</li>
								<li>
									<h1 className="font-bold text-medium ">
										We’re quick and value your time
									</h1>
									<p className="text-zinc-900">With a King’s subscription saving you up to 40 hours a week, all the services you choose run efficiently and frees you up to do other things that matter</p>
								</li>
								<li>
									<h1 className="font-bold text-medium ">
										Discount bonus on every referrals
									</h1>
									<p className="text-zinc-900">We asked around and crunched the numbers, and some of our customers save up to 68% on their monthly printing bill</p>
								</li>
								<li>
									<h1 className="font-bold text-medium ">
										We’re budget friendly
									</h1>
									<p className="text-zinc-900">Refer us and get a 10% discount on your next request on any of our services</p>
								</li>
							</ul>


							<div>
								<Image src={MobileView} height={300} width={300} alt='mobile-view' objectFit="cover" className="z-10 hidden md:flex  " />
							</div>

							<ul className="text-left w-[300px]  md:w-[400px] text-[14px] p-1 space-y-5 sm:px-5">
								<li>
									<h1 className="font-bold text-medium ">
										Professionals workforce
									</h1>
									<p className="text-zinc-900">Our workforce are highly professional about work during execution</p>
								</li>
								<li>
									<h1 className="font-bold text-medium ">
										Skilled  and excellent delivery
									</h1>
									<p className="text-zinc-900">We delivery and go the best to get jibs done</p>
								</li>
								<li>
									<h1 className="font-bold text-medium ">
										Discount bonus on every referrals
									</h1>
									<p className="text-zinc-900">We asked around and crunched the numbers, and some of our customers save up to 68% on their monthly printing bill</p>
								</li>
								<li>
									<h1 className="font-bold text-medium ">
										We care about you
									</h1>
									<p className="text-zinc-900">Showing empathy and concern for every client helps us to understand give good services</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="flex flex-col h-full w-full justify-center items-center p-3 lg:p-12 py-10 lg:px-2" id='about-us' >
					<div className="flex md:flex-row flex-col justify-center md:space-x-[40px] lg:space-x-[90px] items-center space-y-2">
						<h1 className='md:hidden  text-5xl font-bold text-center mb-5 pt-3'>About Us</h1>
						<Image
							src={AboutUss.src}
							width={500}
							height={500}
							alt='about-us'
							className="rounded-md md:w-[400px]"
							objectFit="cover"
						/>
						<div className=" md:w-full  sm:w-3/6 sm:px-2 px-0 w-full">
							<h1 className='hidden md:flex text-5xl font-bold sm:text-center xl:text-left mb-3'>About Us</h1>
							<div>
								<h1 className="font-[650] text-medium mb-1 ">King’s Cyber cafe App</h1>
								<p className="text-zinc-950 w-full sm:text-[16px] text-[15px] sm:w-full sm:w-[95%] w-full">
									An online cyber cafe app for various computer aided services, including graphic designing, project, presentation, direct-image printing, online student application assistant and more.
								</p>
								<p className="text-zinc-950 w-full sm:text-[16px] text-[15px] sm:w-full sm:w-[95%] w-full">We’re a committed company of skilful professionals ready to deliver quality and exceptional results. Our clients are first hand important and attended to.
								</p>
							</div>
							<Button type="button" variant='flat' className="mt-4 rounded-md bg-green-400 text-zinc-800">Learn more</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="flex flex-col items-center justify-enter">
				<h1 className="font-bold sm:text-inherit text-center text-3xl mb-5">
					Our Satisfied customers
				</h1>
				<p className="mx-2 text-medium font-medium text-center sm:text-inherit">Customer speak for themeselves about experience</p>
			</section>


			<div className="w-full">
				<CustomerFeedback>
					{
						CustomerData.map((props, index) => {
							return (
								<Customer
									key={index}
									customer={props}
								/>
							)
						}
						)
					}
				</CustomerFeedback>
			</div>

			<div className="space-y-0 sm:space-y-5 h-full h-screen flex  sm:flex-row flex-col justify-center sm:justify-around items-center ">
				<div className="font-bold text-2xl sm:text-3xl sm:px-2 px-5">
					<p>
						<span>{"Downlaod King's app on"} </span>
					</p>
					<p>
						<span>
							google play store store and
						</span>
					</p>
					<p>
						app storegit
					</p>
					<Button variant="flat" className="bg-danger-500 text-slate-300 text-sm rounded-md">
						Download App
					</Button>
				</div>

				<div className='rounded-full w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] relative flex flex-col justify-center items-center sm:py-1 py-[100px] ' style={{
					backgroundImage: `url(${SVGPattern.src})`
				}}>
					<div className="absolute  rounded-full w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] w-full h-full bg-gradient-to-b opacity-[0.4] from-white from-10% via-[#00C7CE59] via-30%  to-[#00C7CE59] to-90% bg-gradient-stops-0 "></div>
					<div className="relative">
						<Image src={KingsMobilePreview.src} height={300} width={250} objectFit="cover" alt="mobile" className=" mt-[300px] left-0 right-0" />
						<div>
							{/* <Image src={GooglePlayStore.src} height={300} width={250} objectFit="cover" alt='mobile' className="absolute button-[400px] " /> */}
							<Image src={ApplePlayStore.src} height={300} width={200} objectFit="cover" alt="mobile" className="absolute top-[420px] left-[150px]" />
						</div>
						<div>
							<Image src={GooglePlayStore.src} height={300} width={200} objectFit="cover" alt="mobile" className="absolute top-[360px] top-10 right-[150px]" />
						</div>
					</div>
				</div>
			</div>
		</main >
	);
}
