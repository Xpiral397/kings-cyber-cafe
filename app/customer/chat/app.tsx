import React from "react";
import Sidebar from "./sidebar";

export default function App() {
    
  return (
    <div className="flex justify-between">
      <Sidebar />
      <MessageComponent />
    </div>
  );
}
