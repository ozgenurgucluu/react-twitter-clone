import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DefaultLayout = () => {
  return <div className=" flex mx-auto container min-h-[500px] bg-pink-300">
    <div className=" w-[284px]"><Sidebar/></div>
    <div className="flex-1">
      
        <Outlet/>
    </div>

  </div>;
};

export default DefaultLayout;
