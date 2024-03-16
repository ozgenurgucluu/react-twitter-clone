import React from "react";
import { useParams } from "react-router-dom";

const AddAcount = () => {
  const params = useParams();
  return (
    <div className="h-[242px] w-[65px] flex flex-row   cursor-pointer py-2 my-10">
      <img
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=$%7Bparams.usersName%7D=${params.userName}`}
        alt="userPicture"
        className="h-[42px] w-[42px]"
      />
      {/* <span className=" mx-4 text-xl">{params.userName}</span> */}
      <div className="mx-2 flex flex-col ">  
     
        <p className="font-bold">Özge </p>
       
        <span className="">@ozgengcl</span>
      </div>
    </div>
  );
};

export default AddAcount;
