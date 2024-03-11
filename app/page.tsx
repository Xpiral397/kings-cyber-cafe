"use client";

import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Snippet } from "@nextui-org/snippet";
import { siteConfig } from "@/config/site";
import { Code } from "@nextui-org/code";
import { Link } from "@nextui-org/link";

// Images Imports
import MobileSample from "@/public/svgs/mb-display.svg";
import MainView from "@/public/svgs/main-kings.svg";
import Researcher from "@/public/svgs/researcher-svgs.svg";
import LaptopAtWork from "@/public/svgs/laptotp.svg";
import WomenTeaching from "@/public/pngs/Image.jpg";
import PaperCounting from "@/public/pngs/binfing.png";
import GuyWriting from "@/public/pngs/scanning.jpg";
import ResultCheking from "@/public/svgs/result-checking.svg";
import ApplePlayStore from "@/public/svgs/apple-play.svg";
import GooglePlayStore from "@/public/svgs/google-play.svg";
import KingsMobilePreview from "@/public/svgs/mb-white.svg";
import SVGPattern from "@/public/svgs/pattern.svg";
import AboutUss from "@/public/svgs/aboutUs.svg";
import Customer1 from "@/public/svgs/customer-1.svg";
import Customer2 from "@/public/svgs/customer-2.svg";
import Customer3 from "@/public/svgs/customer-3.svg";
import MobileView from "@/public/svgs/mobile-view.svg";

// NextUI
import Image from "next/image";
import { Image as Images } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { ScrollShadow } from "@nextui-org/react";
import CardTemplate, { Card, CardImage } from "@/components/cards";
import { Customer, CustomerFeedback } from "@/components/customerFeedback";
import { CustomerProps } from "@/typing/props";
import Carousal from "@/components/carousal";
import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationCity,
  LocationCityRounded,
  LocationOn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import ReachOutToUsTemplate from "@/components/ReachOutToUs";
import Startar from "@/components/Starter";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  const route = useRouter();
  // Card
  const GraphicsCard = (
    <Card
      topic="Graphics design, Branding & General Printing"
      content="Match your idea with creative design, good printing, an branding project"
      button="Send a Request"
    />
  );
  const ResultCheckings = (
    <Card
      topic="Result checking , online application with ease"
      content="Fast result checking, online application with ease "
      button="Send a Request"
    />
  );
  const PhotoCopy = (
    <Card
      topic="Photocopy, Typing & Scanning"
      content="Access quick quality sharp photocopies and good typing service"
      button="Send a Rquest"
    ></Card>
  );

  // Images
  const Image1 = (
    <img
      width={380}
      height={100}
      src={LaptopAtWork.src}
      alt="NextUI Album Cover"
      className="m-5"
    />
  );
  const Image2 = (
    <img
      width={440}
      height={840}
      src={WomenTeaching.src}
      alt="NextUI Album Cover"
      className="m-5"
    />
  );
  const Image3 = (
    <img
      height={500}
      width={500}
      src={GuyWriting.src}
      alt="NextUI Album Cover"
      className="m-5 rounded-md"
    />
  );

  const ImageCustomer1 = (
    <img src={Customer1.src} width={64} height={300} alt="customer-image" />
  );
  const ImageCustomer2 = (
    <img src={Customer2.src} width={64} height={300} alt="customer-image" />
  );
  const ImageCustomer = (
    <img src={Customer3.src} width={64} height={300} alt="customer-image" />
  );

  // Data

  const CustomerData: CustomerProps[] = [
    {
      id: 1,
      image: ImageCustomer1,
      name: "Jason Oladipo",
      resident: "Student",
      feedbackText:
        "They are amazing and helped out with my project. For from the typing, to printing and my spiral binding, they handled them all and my project came it excellent well",
    },
    {
      id: 1,
      image: ImageCustomer2,
      name: "Abidemi Hassan",
      resident: "Professional",
      feedbackText:
        "They are amazing and helped out with my project. For from the typing, to printing and my spiral binding, they handled them all and my project came it excellent well",
    },
    {
      id: 1,
      image: ImageCustomer2,
      name: "Grace Thomas",
      resident: "Student",
      feedbackText:
        "I got my printing job done at an unbelievable price and got it the same day. Thank you",
    },
  ];

  return (
    <main className="space-y-10" id="home">
      <section>
        <Startar />

        <div className="flex items-center justify-center w-full mb-10 ">
          {!data?.user?.email ? (
            <Button
              onClick={() => route.push("signup")}
              className="font-[500] py-2 flex justify-center bg-[#AEEE2E] w-[300px] px-10 mt-10"
              endContent={
                <div>
                  <svg
                    width="32"
                    height="22"
                    viewBox="0 0 32 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0938 21.4998H17.9375C18.4446 21.4989 18.9425 21.3955 19.382 21.1997C19.8215 21.004 20.1874 20.7227 20.4432 20.3838C20.6991 20.0449 20.8362 19.6601 20.8408 19.2675C20.8455 18.875 20.7176 18.4883 20.4698 18.1458C20.8246 17.9702 21.1259 17.7371 21.3528 17.4624C21.5797 17.1878 21.7268 16.8783 21.7839 16.5553C21.841 16.2323 21.8068 15.9036 21.6836 15.5918C21.5604 15.2801 21.3512 14.9928 21.0704 14.7498C21.4193 14.4497 21.6569 14.0822 21.7582 13.6861C21.8594 13.2901 21.8206 12.8802 21.6459 12.4998H28.5938C30.1961 12.4998 31.5 11.4903 31.5 10.2498C31.5 9.00932 30.1961 7.99982 28.5938 7.99982H16.6452L19.4856 3.87482C19.8321 3.39873 19.9434 2.84134 19.7986 2.30646C19.6538 1.77159 19.2628 1.29569 18.6985 0.967409C18.1341 0.639129 17.4349 0.480845 16.731 0.522038C16.0271 0.563231 15.3666 0.801092 14.8724 1.19132L14.8511 1.20932L8.25 6.81482V5.74982C8.25 5.55091 8.14794 5.36014 7.96626 5.21949C7.78458 5.07884 7.53818 4.99982 7.28125 4.99982H1.46875C1.21182 4.99982 0.965416 5.07884 0.783739 5.21949C0.602064 5.36014 0.5 5.55091 0.5 5.74982V20.7498C0.5 20.9487 0.602064 21.1395 0.783739 21.2802C0.965416 21.4208 1.21182 21.4998 1.46875 21.4998H7.28125C7.53818 21.4998 7.78458 21.4208 7.96626 21.2802C8.14794 21.1395 8.25 20.9487 8.25 20.7498V19.7133L12.6597 21.4203C12.7944 21.4728 12.943 21.5 13.0938 21.4998ZM5.34375 19.9998C5.08682 19.9998 4.84042 19.9208 4.65874 19.7802C4.47706 19.6395 4.375 19.4487 4.375 19.2498C4.375 19.0509 4.47706 18.8601 4.65874 18.7195C4.84042 18.5788 5.08682 18.4998 5.34375 18.4998C5.60068 18.4998 5.84708 18.5788 6.02876 18.7195C6.21044 18.8601 6.3125 19.0509 6.3125 19.2498C6.3125 19.4487 6.21044 19.6395 6.02876 19.7802C5.84708 19.9208 5.60068 19.9998 5.34375 19.9998ZM13.3224 19.9998L8.25 18.0363V9.04082L16.2771 2.22482C16.4439 2.09239 16.6681 2.01238 16.9065 2.00016C17.145 1.98794 17.3808 2.04438 17.5688 2.15863C17.7567 2.27288 17.8835 2.43687 17.9247 2.61909C17.966 2.80132 17.9188 2.98891 17.7922 3.14582L14.1768 8.39582C14.0976 8.51 14.0581 8.63815 14.0621 8.7677C14.0661 8.89726 14.1135 9.0238 14.1996 9.13492C14.2857 9.24605 14.4077 9.33796 14.5534 9.40166C14.6992 9.46536 14.8639 9.49867 15.0312 9.49832H28.5938C28.8507 9.49832 29.0971 9.57734 29.2788 9.71799C29.4604 9.85864 29.5625 10.0494 29.5625 10.2483C29.5625 10.4472 29.4604 10.638 29.2788 10.7787C29.0971 10.9193 28.8507 10.9983 28.5938 10.9983H18.9062C18.6493 10.9983 18.4029 11.0773 18.2212 11.218C18.0396 11.3586 17.9375 11.5494 17.9375 11.7483C17.9375 11.9472 18.0396 12.138 18.2212 12.2787C18.4029 12.4193 18.6493 12.4983 18.9062 12.4983C19.1632 12.4983 19.4096 12.5773 19.5913 12.718C19.7729 12.8586 19.875 13.0494 19.875 13.2483C19.875 13.4472 19.7729 13.638 19.5913 13.7787C19.4096 13.9193 19.1632 13.9983 18.9062 13.9983C18.6493 13.9983 18.4029 14.0773 18.2212 14.218C18.0396 14.3586 17.9375 14.5494 17.9375 14.7483C17.9375 14.9472 18.0396 15.138 18.2212 15.2787C18.4029 15.4193 18.6493 15.4983 18.9062 15.4983C19.1632 15.4983 19.4096 15.5773 19.5913 15.718C19.7729 15.8586 19.875 16.0494 19.875 16.2483C19.875 16.4472 19.7729 16.638 19.5913 16.7787C19.4096 16.9193 19.1632 16.9983 18.9062 16.9983H17.9375C17.6806 16.9983 17.4342 17.0773 17.2525 17.218C17.0708 17.3586 16.9688 17.5494 16.9688 17.7483C16.9688 17.9472 17.0708 18.138 17.2525 18.2787C17.4342 18.4193 17.6806 18.4983 17.9375 18.4983C18.1944 18.4983 18.4408 18.5773 18.6225 18.718C18.8042 18.8586 18.9062 19.0494 18.9062 19.2483C18.9062 19.4472 18.8042 19.638 18.6225 19.7787C18.4408 19.9193 18.1944 19.9983 17.9375 19.9983H13.3224V19.9998Z"
                      fill="#040707"
                    />
                  </svg>
                </div>
              }
            >
              Get Started
            </Button>
          ) : (
            <Button
              isExternal
              as={Link}
              className="w-full px-10 sm:px-5 sm:w-[300px] text-sm font-bold text-white bg-danger"
              variant="flat"
              color="danger"
            >
              {" "}
              Downalod App
            </Button>
          )}
        </div>

        <div
          className="flex flex-col items-center justify-center w-full space-y-10"
          id="service"
        >
          <div>
            <h1 className="mt-10 text-2xl font-medium text-center sm:text-4xl">
              All Your Cafe Needs Are Here
            </h1>
            <p className="text-center">
              Printing, Photocopy, Book Binding, Lamination, Project Writing and
              more{" "}
            </p>
          </div>

          <ScrollShadow
            hideScrollBar
            orientation="vertical"
            offset={100}
            className="hidden max-width-[600px] w-full md:flex items-center lg:justify-center space-x-10"
          >
            <CardTemplate
              image={Researcher.src}
              alt="img-1"
              footer={
                <h1 className="text-sm text-white ">
                  Researcher & Project Work
                </h1>
              }
            />
            <CardTemplate
              image={ResultCheking.src}
              alt="img-2"
              footer={
                <h1 className="text-sm text-white ">
                  <p>Result checking, </p>
                  <p>online application & many more</p>
                </h1>
              }
            />
            <CardTemplate
              image={LaptopAtWork}
              alt="img-3"
              footer={
                <h1 className="text-sm text-white ">
                  <p>Spiral Binding</p>
                  <p>Hard cover Binding Stationaries</p>
                </h1>
              }
            />
          </ScrollShadow>

          <Carousal
            className="block sm:flex md:hidden"
            sidePallet={true}
            Items={[
              <CardTemplate
                image={Researcher.src}
                alt="img-1"
                key={1}
                footer={
                  <h1 className="text-sm text-white ">
                    Researcher & Project Work
                  </h1>
                }
              />,
              <CardTemplate
                image={ResultCheking.src}
                alt="img-2"
                key={2}
                footer={
                  <h1 className="text-sm text-white ">
                    <p>Result checking, </p>
                    <p>online application & many more</p>
                  </h1>
                }
              />,
              <CardTemplate
                image={LaptopAtWork}
                alt="img-3"
                key={3}
                footer={
                  <h1 className="text-sm text-white ">
                    <p>Spiral Binding</p>
                    <p>Hard cover Binding Stationaries</p>
                  </h1>
                }
              />,
            ]}
          />
        </div>

        <div
          className="justify-center w-full mt-10 flex flex-row items-center h-full md:space-x-[50px] lg:space-x-[100px] mt-10"
          id="customer"
        >
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
            <h1 className="text-4xl font-bold">How it works</h1>
            <div className="flex justify-between w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div>01</div>
                <div className="w-[2px] h-20 bg-zinc-500"></div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-md">Create a free account</h1>
                <h1 className="min-w-[200px] text-sm font-[400] w-full">
                  Sign up for a free account with your name email and number.
                </h1>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div>02</div>
                <div className="w-[2px] h-20 bg-zinc-500"></div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-md">Pick a service you want</h1>
                <h1 className="min-w-[200px] text-sm font-[400] w-full">
                  Select amng different of your name, email, number.
                </h1>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div>03</div>
                <div className="w-[2px] h-20 bg-zinc-500"></div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-md">Place an order</h1>
                <h1 className="min-w-[200px] text-sm font-[400] w-full">
                  Create order description and details.
                </h1>
              </div>
            </div>
            <Button
              type="button"
              variant="flat"
              size="md"
              className="mt-5 rounded-md bg-danger-500  w-[300px] text-white text-sm"
            >
              <h1 className="text-sm text-slate-100 ">Download App</h1>
            </Button>
          </div>
        </div>

        <div className="items-center justify-center hidden w-full h-full lg:flex ">
          {/* <ScrollShadow orientation="vertical" className="flex items-center justify-center h-full mt-20 max-width-full"> */}
          {/* <div className="items-center justify-center hidden -space-x-5 md:flex ">
                            <div className="flex flex-col items-center justify-between w-full">
                                <div>{GraphicsCard}</div>
                                <div>{Image2}</div>
                            </div>
                            <div className="flex flex-col items-center justify-center -full">
                                <div>{Image2}</div>
                                <div>{ResultCheckings}</div>
                            </div>
                            <div className="flex flex-col items-center justify-center -full">
                                <div>{PhotoCopy}</div>
                                <div>{Image2}</div>
                            </div>
                        </div> */}
          <div className="w-full mt-[200px]">
            <div className="flex w-full justify-evenly">
              <div>{GraphicsCard}</div>
              <div>{Image2}</div>
              <div>{PhotoCopy}</div>
            </div>

            <div className="flex w-full justify-evenly">
              <div>{Image1}</div>
              <div>{ResultCheckings}</div>
              <div>{Image3}</div>
            </div>
          </div>
          {/* </ScrollShadow> */}
        </div>
        <ScrollShadow
          orientation="vertical"
          className="max-width-[100px] scale-[800px] w-full h-full"
        >
          <div className=" mt-[100px] lg:hidden flex flex-col -space-x-5 items-center justify-center ">
            <div className="flex flex-col items-center justify-between w-full">
              <div>{Image1}</div>
              <div>{GraphicsCard}</div>
            </div>
            <div className="flex flex-col items-center justify-center -full">
              <div>{Image2}</div>
              <div>{ResultCheckings}</div>
            </div>
            <div className="flex flex-col items-center justify-center -full">
              <div>{Image3}</div>
              <div>{PhotoCopy}</div>
            </div>
          </div>
        </ScrollShadow>
      </section>

      <section>
        <div className="overflow-hidden relative flex flex-col justify-center items-center sm:py-1 py-[100px]">
          <div className="absolute w-full h-full bg-gradient-to-b  from-white from-10% via-transparent via-30%  to-green-200 to-90% bg-gradient-stops-0 "></div>
          <div className="relative justify-around mb-10 ">
            <h1 className="mt-8 text-center font-bold text-4xl font-[cursive, Heltivica , Poppins, sans-serif]">
              {" "}
              {"Why King's App"}
            </h1>
            <div className=" gap-x-[56px] mt-[300px] z-[10] flex sm:flex-row flex-col items-center justify-evenly ">
              <ul className="text-left w-[300px]  md:w-[400px] text-[14px] p-1 space-y-2 sm:px-5">
                <li>
                  <h1 className="font-bold text-medium ">
                    We’re budget friendly
                  </h1>
                  <p className="text-zinc-900 ">
                    We asked around and crunched the numbers, and some of our
                    customers save up to 68% on their monthly printing bill
                  </p>
                </li>
                <li>
                  <h1 className="font-bold text-medium ">
                    We’re quick and value your time
                  </h1>
                  <p className="text-zinc-900">
                    With a King’s subscription saving you up to 40 hours a week,
                    all the services you choose run efficiently and frees you up
                    to do other things that matter
                  </p>
                </li>
                <li>
                  <h1 className="font-bold text-medium ">
                    Discount bonus on every referrals
                  </h1>
                  <p className="text-zinc-900">
                    We asked around and crunched the numbers, and some of our
                    customers save up to 68% on their monthly printing bill
                  </p>
                </li>
                <li>
                  <h1 className="font-bold text-medium ">
                    We’re budget friendly
                  </h1>
                  <p className="text-zinc-900">
                    Refer us and get a 10% discount on your next request on any
                    of our services
                  </p>
                </li>
              </ul>

              <div>
                <Image
                  src={MobileView}
                  height={300}
                  width={300}
                  alt="mobile-view"
                  objectFit="cover"
                  className="z-10 hidden md:flex "
                />
              </div>

              <ul className="text-left w-[300px]  md:w-[400px] text-[14px] p-1 space-y-5 sm:px-5">
                <li>
                  <h1 className="font-bold text-medium ">
                    Professionals workforce
                  </h1>
                  <p className="text-zinc-900">
                    Our workforce are highly professional about work during
                    execution
                  </p>
                </li>
                <li>
                  <h1 className="font-bold text-medium ">
                    Skilled and excellent delivery
                  </h1>
                  <p className="text-zinc-900">
                    We delivery and go the best to get jibs done
                  </p>
                </li>
                <li>
                  <h1 className="font-bold text-medium ">
                    Discount bonus on every referrals
                  </h1>
                  <p className="text-zinc-900">
                    We asked around and crunched the numbers, and some of our
                    customers save up to 68% on their monthly printing bill
                  </p>
                </li>
                <li>
                  <h1 className="font-bold text-medium ">We care about you</h1>
                  <p className="text-zinc-900">
                    Showing empathy and concern for every client helps us to
                    understand give good services
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-[200px] flex flex-col h-full w-full justify-center items-start p-3 lg:p-12 py-10 lg:px-2"
          id="about-us"
        >
          <div className="flex md:flex-row flex-col justify-center center md:space-x-[40px] lg:space-x-[90px] items-center space-y-2">
            <h1 className="pt-3 mb-5 text-5xl font-bold text-center md:hidden">
              Learn More
            </h1>
            <Image
              src={AboutUss.src}
              width={100}
              height={100}
              alt="about-us"
              className="rounded-md md:w-[500px] w-[300px]"
              objectFit="cover"
            />
            <div className=" sm:w-full  lg:w-[36%] sm:px-2 px-0 w-full">
              <div className="flex flex-col justify-center space-y-5 ">
                <h1 className="hidden mb-3 text-5xl font-bold md:flex sm:text-center xl:text-left">
                  Learn More
                </h1>
                <div>
                  <p className="font-[400] mt-2 mb-2">{"King's Cyber Cafe"}</p>
                  <p className="text-zinc-950 sm:text-[17px] text-[15px]   w-full">
                    An online cyber cafe app for various computer aided
                    services, including graphic designing, project,
                    presentation, direct-image printing, online student
                    application assistant and more.
                  </p>
                  <p className="text-zinc-950 w-full sm:text-[17px] text-[15px] sm:w-full sm:w-[95%] w-full">
                    We’re a committed company of skilful professionals ready to
                    deliver quality and exceptional results.
                    <p>
                      {" "}
                      Our clients are first hand important and attended to.
                    </p>
                  </p>
                </div>
              </div>

              <Button
                type="button"
                variant="flat"
                className="mt-4 py-2 px-4 rounded-md bg-[#AEEE2E] text-zinc-950"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-20">
        <h1 className="mb-5 text-3xl font-bold text-center sm:text-inherit">
          Our Satisfied customers
        </h1>
        <p className="mx-2 font-medium text-center text-medium sm:text-inherit">
          Customer speak for themeselves about experience
        </p>
      </section>

      <div className="mt-20 mb-20 w-">
        <CustomerFeedback>
          {CustomerData.map((props, index) => {
            return <Customer key={index} customer={props} />;
          })}
        </CustomerFeedback>
      </div>

      <div className="flex flex-col items-center justify-center h-full h-screen space-y-0 sm:space-y-5 sm:flex-row sm:justify-around ">
        <div className="px-5 text-2xl font-bold md:text-4xl lg:text-5xl xl:text-6xl sm:px-2">
          <p>
            <span>{"Downlaod King's app on"} </span>
          </p>
          <p>
            <span>google play store store and</span>
          </p>
          <p>app store</p>
          <Button
            variant="flat"
            className="bg-[#FF3131] text-white text-sm rounded-md"
          >
            Download App
          </Button>
        </div>

        <div className="rounded-full w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] relative flex flex-col justify-center items-center sm:py-1 py-[100px] bg-[#00B2B4]">
          <div className="relative">
            <Image
              src={KingsMobilePreview.src}
              height={300}
              width={250}
              objectFit="cover"
              alt="mobile"
              className=" mt-[300px] left-0 right-0"
            />
            <div>
              {/* <Image src={GooglePlayStore.src} height={300} width={250} objectFit="cover" alt='mobile' className="absolute button-[400px] " /> */}
              <Image
                src={ApplePlayStore.src}
                height={300}
                width={200}
                objectFit="cover"
                alt="mobile"
                className="absolute top-[420px] left-[150px]"
              />
            </div>
            <div>
              <Image
                src={GooglePlayStore.src}
                height={300}
                width={200}
                objectFit="cover"
                alt="mobile"
                className="absolute top-[360px] top-10 right-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
