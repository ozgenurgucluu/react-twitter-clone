import React from "react";
import SearchIcon from "../icons/SearchIcon";

const Search = () => {
  return (
    <div className="p-2 ">
      <div className="relative text-searchGray">
        <input className="rounded-full w-[335px] mx-auto bg-gray-100 h-[43px] border-purple-300 hover:border-blue-500 pl-10 pr-4  " 
        placeholder="Ara"/>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-searchGray ">
         <SearchIcon/>
        </div>
      </div>
    </div>
  );
};

export default Search;
