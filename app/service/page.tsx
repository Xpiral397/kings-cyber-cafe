import LaptopAtWork from "@/public/svgs/laptotp.svg";
import WomenTeaching from "@/public/pngs/Image.jpg";
import PaperCounting from "@/public/pngs/binfing.png";
import GuyWriting from "@/public/pngs/scanning.jpg";
import aboutus from "@/public/svgs/aboutUs.svg";
import { Button } from "@nextui-org/button";

import Startar, { ComponentStarter } from "@/components/Starter";
import Footer from "@/components/footer";
import { Card } from "@/components/cards";

export default function Home() {
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
  // Card
  return (
    <main>
      <ComponentStarter
        imageSrc={aboutus}
        text=<h1 className="font-[Roboto] px-20 text-center justify-center mt-40 text-slate-100 font-[700] text-4xl">
          Our Service
        </h1>
      />
      <div>
        <div className="items-center justify-center hidden w-full h-full lg:flex ">
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

        {/* <div className="absolute butom-0 flex items-center mt-[500px] w-full justify-center z-[100]">
          <div className=" px-10 py-10 space-y-10 w-[400px] mt-[-200px] rounded-md text-slate-950 text-center font-[500] bg-white shadow-2xl">
            <div className="text-[16px]">Have a Project in mind?</div>
            <Button className="px-6 py-3 bg-[#FF3737] text-white rounded-md w-[200px] text-[16px] font-[600]">
              Book Now
            </Button>
          </div>
        </div> */}
      </div>
      <Footer />
    </main>
  );
}
