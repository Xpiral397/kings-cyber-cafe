import Footer from "@/components/footer";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";

export default function SignIn() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-screen text-left ">
        <div className="h-full flex justify-center  items-center font-[Proxima Nova] w-[500px]">
          <div className="space-y-3">
            <div>
              <h1 className="text-[#505050] font-[700] text-[40px] mb-5">
                Sign in
              </h1>
              <div className="space-y-1">
                <p className="text-[20px] font-[400] text-slate-500">
                  Welcome to King’s Online Cyber Cafe platform{" "}
                </p>
                <p className="text-[20px] font-[400] text-slate-500">
                  Log In as member to experience
                </p>
                <div></div>
              </div>
              <div className="mt-10 space-y-7">
                <div>
                  <h1 className="font-[700] text-[15px] text-slate-500">
                    Email
                  </h1>
                  <input
                    type="email"
                    placeholder="bayur453@gmail.com"
                    className="w-full px-2 py-3 rounded-sm focus:outline-none bg-zinc-100 text-slate-700"
                  />
                </div>
                <div>
                  <h1 className="font-[700] text-[15px] text-slate-500">
                    Password
                  </h1>
                  <input
                    type="password"
                    placeholder="***********"
                    className="w-full px-2 py-2 rounded-sm focus:outline-none bg-zinc-100 text-slate-700"
                  />
                </div>
              </div>
              <div className="mt-8">
                <span className="flex items-center space-x-2">
                  <input type="checkbox" className="text-red-500" />
                  <span className="text-sm text-slate-500 font-[500]">
                    Save Password
                  </span>
                </span>
              </div>
            </div>

            <Button className="w-full py-5 bg-[#FF3737] text-white text-center text-xl font-[700] text-white w-full rounded-md ">
              {" "}
              Login{" "}
            </Button>

            <span className="mt-10 text-sm font-[700]">Forget Password ?</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
