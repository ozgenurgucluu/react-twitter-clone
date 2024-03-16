import React from "react";
import { Link } from "react-router-dom";

const trendsData = [
  { topic: "#Deprem", posts: "5,987" },
  { topic: "Washington Büyükelçiliği", posts: "18.1K" },
  { topic: "Jacob Rothschild", posts: "8,325" },
  { topic: "Icardi", posts: "25.3K" },
  { topic: "#BugünGünlerdenGALATASARAY", posts: "78.1K" },
  { topic: "Ankara Makarna", posts: "5.8K" }
];

const Trends = () => {
  return (
    <div className="w-[325px] min-h gap-2 flex flex-col bg-slate-100 p-4 m-3 rounded-xl relative">
      <div className="font-bold text-xl">Trends for you</div>
      <div className="flex flex-col gap-5">
        {trendsData.map((item, index) => (
          <Link key={index} className="flex flex-col">
            <span className="text-searchGray text-sm">Trending in Turkey</span>
            <span className="font-bold">{item.topic}</span>
            <span className="text-searchGray text-sm">{item.posts} posts</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trends;
