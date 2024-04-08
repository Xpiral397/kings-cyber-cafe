"use clinet";
import { Avatar } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React from "react";

export default function UserPallet({ lastMessage }: { lastMessage: string }) {
  const { data } = useSession();
  return (
    <div className="flex items-center">
      <Avatar src={data?.user?.image ?? ""} />
      <div className="text-sm ">
        <h1>{data?.user?.name ?? "Unknow"}</h1>
        <p className="text-right text-[10px] font-[700] text-slate-950">
          25min
        </p>
        <p className=" text-ellipsis">{lastMessage}</p>
      </div>
    </div>
  );
}
