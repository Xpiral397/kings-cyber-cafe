"use client";
import React from "react";
import { Input, Tab, Tabs } from "@nextui-org/react";
import { Search } from "@mui/icons-material";
import UserPallet from "@/components/userPallet";

export default function Sidebar() {
  return (
    <div className="w-full bg-white px-2 py-2">
      <Input startContent={<Search />} className="w-full" />
      <div className="flex flex-wrap gap-4">
        <Tabs aria-label="Tabs variants">
          <Tab key="New" title="New" />
          <Tab key="progress" title="In progress" />
          <Tab key="wait" title="Waiting" />
          <Tab key="wait" title="Waiting" />
        </Tabs>
      </div>
      <div>
        {Array.from({ length: 20 }, (_, index) => (
          <UserPallet lastMessage="Hello, How can i help you" />
        ))}
      </div>
    </div>
  );
}
