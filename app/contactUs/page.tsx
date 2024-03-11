"use client";
import Startar, { ComponentStarter } from "@/components/Starter";
import {
  Call,
  CallOutlined,
  LocationCityRounded,
  LocationCityTwoTone,
  LocationOn,
  LocationOnOutlined,
  Message,
  MessageSharp,
  VoiceChat,
} from "@mui/icons-material";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import aboutus from "@/public/svgs/contactus.svg";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Location,
  PhoneCall,
  Twitter,
  WhatsApp,
} from "@/components/icon";
import { TwitterIcon } from "@/components/icons";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="relative h-full">
      <ComponentStarter
        imageSrc={aboutus}
        text=<h1 className="font-[Roboto] px-20 text-center justify-center mt-40 text-slate-100 font-[700] text-4xl">
          Make An Order Now
        </h1>
      />
      <div className="flex flex-col justify-around mt-10 space-y-5 md::space-x-10 sm:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-10">
          <div className="py-5 min-h-[150px] min-w-[250px] block justify-left px-2 space-y-5 bg-white rounded-md shadow-md sm:space-x-10">
            <div className="flex flex-col w-full h-full justify-left ">
              <h1 className="text-[30.25px] font-[500] text-left ">
                Our Loction
              </h1>
              <div className="mx-10 flex items-center space-x-5 mt-[20px]">
                <Location />
                <h1 className="h-full ">ODUDUWA UNIVERSITY, ILE IFE</h1>
              </div>
            </div>
          </div>

          <div className="py-5 min-h-[150px] min-w-[250px] block justify-left px-2 space-y-5 bg-white rounded-md shadow-md sm:space-x-10">
            <div className="flex flex-col w-full h-full justify-left ">
              <h1 className="text-[30.25px] font-[500] text-left ">
                Contact Us
              </h1>{" "}
              <div className="flex items-center space-x-5 mt-[20px]">
                <PhoneCall />
                <h1 className="h-full ">+234 705 2904 849</h1>
              </div>
            </div>
          </div>

          <div className="py-5 min-h-[150px] min-w-[250px] block justify-left px-2 space-y-5 bg-white rounded-md shadow-md sm:space-x-10">
            <div className="flex flex-col w-full h-full justify-left ">
              <h1 className="text-[30.25px] font-[500] text-left ">
                Connect With Us
              </h1>{" "}
              <div className="flex flex-col space-y-5 mt-[20px]">
                <span className="flex items-center w-full space-x-3">
                  <WhatsApp />
                  <h1 className="font-[500px]">WhatsApp</h1>
                </span>

                <span className="flex items-center w-full space-x-3">
                  <Facebook />
                  <h1 className="font-[500px]">Facebook</h1>
                </span>

                <span className="flex items-center w-full space-x-3">
                  <Twitter />
                  <h1 className="font-[500px]">Twitter</h1>
                </span>

                <span className="flex items-center w-full space-x-3">
                  <LinkedIn />
                  <h1 className="font-[500px]">LinkedIn</h1>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-4 py-5 rounded-md bg-zinc-200 space-y-5 w-full sm:w-[600px]   ">
          <h1 className="text-4xl font-[600px]">Leave Us A Meessage</h1>
          <div className="flex flex-col justify-between mt-10 ">
            <label>Name*</label>
            <input
              className=" text-slate-950 text-[15px] focus:outline-none rounded-md  w-full px-5 py-3 border"
              placeholder="name"
            />
          </div>
          <div>
            <label>Email Address *</label>
            <input
              className="text-zinc-950 text-[15px]  focus:outline-none rounded-md  w-full px-5 py-3 border"
              placeholder="Email"
            />
          </div>
          <div className="space-y-2">
            <label>Subject *</label>
            <Select className="bg-slate-100">
              {["How We Operates", "Project Management", "Help"].map(
                (e, index) => {
                  return (
                    <SelectItem key={index} value={e}>
                      {e}
                    </SelectItem>
                  );
                }
              )}
            </Select>
            <div className="space-y-2">
              <label>Enter Your Message *</label>
              <div className="relative">
                <textarea
                  className=" w-full rounded-md  border-rose-50 border-none focus:outline-none  bg-white py-5 px-2 h-[200px]"
                  placeholder="Enter Your Message"
                ></textarea>
                <div className="absolute top-0 right-0 mt-5">
                  <svg
                    width="14"
                    height="19"
                    viewBox="0 0 14 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0C7.79565 0 8.55871 0.316071 9.12132 0.87868C9.68393 1.44129 10 2.20435 10 3V9C10 9.79565 9.68393 10.5587 9.12132 11.1213C8.55871 11.6839 7.79565 12 7 12C6.20435 12 5.44129 11.6839 4.87868 11.1213C4.31607 10.5587 4 9.79565 4 9V3C4 2.20435 4.31607 1.44129 4.87868 0.87868C5.44129 0.316071 6.20435 0 7 0ZM14 9C14 12.53 11.39 15.44 8 15.93V19H6V15.93C2.61 15.44 0 12.53 0 9H2C2 10.3261 2.52678 11.5979 3.46447 12.5355C4.40215 13.4732 5.67392 14 7 14C8.32608 14 9.59785 13.4732 10.5355 12.5355C11.4732 11.5979 12 10.3261 12 9H14Z"
                      fill="#222227"
                      fill-opacity="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-center ">
            <Button
              variant="flat"
              type="button"
              className="rounded-md w-full  py-5 px-10 h-8 shadow-xl  bg-[#FF3737] flex items-center justify-center text-white"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
