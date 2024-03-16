import React from "react";
import Timeline from "../components/Timeline";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="flex h-full">
      <div className="flex-1 bg-white border  border-black/15">
       <Feed/>
      </div>
      <div className="w-[350px] bg-white "><Timeline/></div>
    </div>
  );
};

export default Home;
