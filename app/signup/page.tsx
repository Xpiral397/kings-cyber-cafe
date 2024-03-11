"use client";
import Footer from "@/components/footer";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

import GoogleIcon from "@/public/svgs/googleIcon.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";

interface Credential {
  FirstName: string;
  OtherName: string;
  email: string;
  number: string;
  password: string;
}

export default function SignIn() {
  const [credential, setCredential] = useState();
  return (
    <div className="mt-36">
      <div className="flex flex-col items-center justify-center w-full h-full text-left ">
        <div className="h-full flex justify-center  items-center font-[Proxima Nova] w-[500px]">
          <div className="space-y-3">
            <div className="space-y-2">
              <h1 className="text-[#505050] font-[700] text-[40px] mb-5">
                Sign up
              </h1>
              <div className="w-full ">
                <p className="text-[15px]  font-[400] text-slate-500">
                  Welcome to King’s Online Cyber Cafe platform,
                  <span className=" mt-1 font-[400] text-slate-500">
                    {" "}
                    Log In as member to experience our full service
                  </span>
                </p>
                <Button
                  onClick={() => {
                    signIn("google", { callbackUrl: "https://localhost:3000" });
                  }}
                  className="w-full mt-10 mb-10 bg-white rounded-md shadow-md"
                  startContent={
                    <Image
                      src={GoogleIcon}
                      alt="goole"
                      width={32}
                      height={32}
                    />
                  }
                >
                  Sign up with google
                </Button>
              </div>
              <div className="flex items-center mt-20">
                <div className="w-full h-[2px] bg-slate-500"></div>
                <h1 className="text-[15px] px-2">or</h1>
                <div className="w-full h-[2px] bg-slate-500"></div>
              </div>
              <div className="mt-10 space-y-7">
                <div className="flex justify-between w-full space-x-2">
                  <div className="w-full">
                    <h1 className="font-[500] text-[15px] text-slate-500">
                      FirstName*
                    </h1>
                    <input
                      type="text"
                      placeholder="Luke"
                      className="w-full px-2 py-3 rounded-sm focus:outline-none bg-zinc-100 text-slate-700"
                    />
                  </div>
                  <div className="w-full">
                    <h1 className="w-full font-[500] text-[15px] text-slate-500">
                      OtherNames*
                    </h1>
                    <input
                      type="text"
                      placeholder="Joe Alex"
                      className="w-full px-2 py-3 rounded-sm focus:outline-none bg-zinc-100 text-slate-700"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-[500] text-[15px] text-slate-500">
                    Email*
                  </h1>
                  <input
                    type="email"
                    placeholder="bayur453@gmail.com"
                    className="w-full px-2 py-3 rounded-sm focus:outline-none bg-zinc-100 text-slate-700"
                  />
                </div>
                <div className="flex justify-between w-full space-x-2">
                  <div className="w-full">
                    <h1 className="font-[500] text-[15px] text-slate-500">
                      Gender
                    </h1>
                    <Select
                      value={"Male"}
                      placeholder="Select Your Gender"
                      description="Select Your Gender"
                      className="w-full"
                    >
                      {["Male", "Female"].map((values, index) => {
                        return (
                          <SelectItem key={index} value={values}>
                            {values}
                          </SelectItem>
                        );
                      })}
                    </Select>
                  </div>
                  <div>
                    <h1 className="font-[500] text-[15px] text-slate-500">
                      Tel*
                    </h1>
                    <input
                      type="tel"
                      placeholder="+234 5678 904 323"
                      className="w-full px-2 py-3 rounded-sm focus:outline-none bg-zinc-100 text-slate-700"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-[500] text-[15px] text-slate-500">
                    Password*
                  </h1>
                  <input
                    type="password"
                    placeholder="***********"
                    className="w-full px-2 py-2 rounded-sm focus:outline-none bg-zinc-100 text-slate-700"
                  />
                </div>
              </div>
              <div className="mt-8">
                <span className="space-x-2 ">
                  <input type="checkbox" className="text-red-500" />
                  <span className="text-sm text-slate-500 font-[500]">
                    Save Password
                  </span>
                </span>
              </div>
            </div>

            <Button className="py-5 bg-[#FF3737] text-white text-center text-xl font-[700] text-white w-full rounded-md ">
              {" "}
              Login{" "}
            </Button>

            <div className="mt-20">
              <span className=" mt-24 text-sm font-[500]">
                Already Have Account?
                <span className="mx-2 mt-10 text-red-500 ">
                  <Link href="/login">Sign in</Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
