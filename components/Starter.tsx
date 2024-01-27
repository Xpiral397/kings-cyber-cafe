// Images Imports
import MobileSample from '@/public/svgs/mb-display.svg'
import MainView from "@/public/svgs/main-kings.svg"
// NextUI
import Image from "next/image";
import {Button} from "@nextui-org/button";

export default function Startar() {
    return <div>
        <section className=" mb-10 w-full  flex flex-col items-center justify-center space-y-10" >
            <div className="relative h-full w-full overflow-hidden sm:h-[50vh] h-[40vh]">
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
                        <div className="sm:hidden flex">
                            <section className="flex flex-col mt-10 w-full h-full justify-center items-center text-white p-8">
                                <h1 className="lg:px-2 md:text-3xl lg:text-4xl xl:text-6xl font-medium mb-4 text-center">
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
                            <h1 className="text-4xl md:text-6xl font-medium space-y-2 ">
                                <p>Your Trusted</p>
                                <p>Partner In <span className="text-orange-500">Digital</span></p>
                                <p>Cafe Experience</p>
                            </h1>
                            <Button variant="flat" size="md" className="mt-5 rounded-md bg-danger-500  w-[300px] text-white text-sm">
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
}
