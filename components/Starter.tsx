// Images Imports
import MobileSample from "@/public/svgs/mb-display.svg";
import MainView from "@/public/svgs/main-kings.svg";
// NextUI
import Image, { StaticImageData } from "next/image";
import { Button } from "@nextui-org/button";
import { ReactNode } from "react";

export default function Startar({ text }: { text?: ReactNode | null }) {
  return (
    <div>
      <section className="flex flex-col items-center justify-center w-full mb-10 space-y-10 ">
        <div className="relative w-full overflow-hidden sm:h-[50vh] h-[40vh]">
          <div>
            <Image
              src={MainView}
              alt="Mobile Sample"
              layout="fill"
              objectFit="cover"
              quality={900} // Adjust quality as needed
            />
            <div className="px-[100px] card absolute w-full sm:h-[55vh] h-[60vh] bg-[#008C83] opacity-[0.5]"></div>
          </div>
          <div className="flex justify-center items-center relative  w-full h-[60vh] bg-[#00000001]">
            <div className="flex flex-col justify-between h-full">
              <div className="flex sm:hidden">
                <section className="flex flex-col items-center justify-center w-full h-full p-8 mt-10 text-white">
                  <h1 className="mb-4 font-medium text-center lg:px-2 md:text-3xl lg:text-4xl xl:text-6xl">
                    <p>Your Trusted</p>
                    <p className="whitespace-nowrap">
                      Partner In{" "}
                      <span className="text-orange-500">Digital</span>
                    </p>
                    <p>Cafe Experience</p>
                  </h1>
                  <Button
                    variant="flat"
                    className="p-6 px-5 text-sm text-white bg-red-500 rounded-md sm:w-full"
                  >
                    Start A Project
                  </Button>
                </section>
              </div>
            </div>

            <div className="items-center justify-around hidden w-full sm:flex">
              <section className="flex flex-col text-white ">
                <h1 className="space-y-2 text-4xl font-medium md:text-6xl ">
                  <p>Your Trusted</p>
                  <p>
                    Partner In <span className="text-orange-500">Digital</span>
                  </p>
                  <p>Cafe Experience</p>
                </h1>
                <Button
                  variant="flat"
                  size="md"
                  className="mt-5 rounded-md bg-danger-500  w-[300px] text-white text-sm"
                >
                  Start A Project
                </Button>
              </section>
              <div className="md:w-[300px] w-[225px] h-[500px]">
                <Image
                  className="md:w-[400px] w-[300px] mb-20  transform skew-y-12 "
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
      </section>
    </div>
  );
}

export function ComponentStarter({
  text,
  imageSrc,
}: {
  text?: ReactNode | null;
  imageSrc: any;
}) {
  return (
    <div className="w-full">
      <section className="flex flex-col items-center justify-center w-full mb-10 space-y-10 ">
        <div className="relative w-full overflow-hidden  max-h-[70vh] sm:h-[100vh] h-[40vh]">
          <div className="z-10 w-full h-full bg-red-500">
            <div className=" absolute px-[100px] card  w-full sm:h-[70vh] h-[40vh] bg-[#008C83] opacity-[0.4]"></div>
            <img
              src="https://s3-alpha-sig.figma.com/img/ca0b/96c0/deb2fc42dd8d793ae7aab513a5ab3450?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f4Vij2pxs4tGnqfDYsExriMV7~YFmD7-y8-JlDc2nnCFYT5tx5bM2YKWQMXyKh7IEkwHbsKfbpBcusYxW3OQ8tTLcRkpDUNaijjjavOb0I7gVbeEW2b5LrME23p64RaYWTecWT94BJ7RsoC6jR733HLkbTFcMmTotUbE~0E~tmuAE9kF8lLuen7344-vDqI5KWUaHCqjbvNsF67r8a3SKWroKqh8vXPm0gMaf9pvGoZWi1iQ175MXFCKvc8h8l29DS-6DxUud0EcJWvmjRUvGQR9LIcahC0KrfJr7d0Ix1QHQ-neIaveni99T6LjRTPxl8wiYfCUkDy7as2Boz5OBA__"
              alt="Mobile Samples"
              className="z-10" // Adjust quality as needed
            />
          </div>
          <div className="absolute top-[25%]">{text}</div>
        </div>
      </section>
    </div>
  );
}
