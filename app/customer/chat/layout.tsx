import { Add } from "@mui/icons-material";
import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import App from "./app";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" bg-blue-50">
      <div className="flex justify-between py-20">
        <h1 className="text-zinc-800 font-[700]">Chat</h1>
        <div className="flex spae-x-2">
          <div>
            <h1 className="px-2 py-2 ronded-md text-white border-red-500">
              Download Report
            </h1>
          </div>
          <div>
            <h1 className="px-2 py-2 ronded-md text-slate-200 bg-red-500 border-red-500">
              <Add /> Start new chat
            </h1>
          </div>
        </div>
      </div>
      <main className="w-full flex ">
        <App />
      </main>
    </div>
  );
}
