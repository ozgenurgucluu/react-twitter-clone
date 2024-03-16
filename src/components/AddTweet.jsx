import React from "react";
import { useParams } from "react-router-dom";
import WorldIcon from "../icons/WorldIcon";
import MedyaIcon from "../icons/MedyaIcon";
import GIFIcon from "../icons/GIFIcon";
import PollIcon from "../icons/PollIcon";
import EmojiIcon from "../icons/EmojiIcon";
import Schedule from "../icons/Schedule";
import PlaceIcon from "../icons/PlaceIcon";

const AddTweet = () => {
  const params = useParams();
  return (
    <div className="flex flex-col p-2  h-min-[116px] border border-black/10">
      <div className=" flex flex-row  ">
        <img
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=$%7Bparams.usersName%7D=${params.userName}`}
          alt="userPicture"
          className="h-[42px] w-[42px] mx-2"
        />
        <textarea
          className="h-[52px] w-[524px] text-xl  outline-none  "
          placeholder="What is happening?!"
        />
      </div>
      <div>
        <a
          href="https://google.com"
          className="flex flex-row mx-14 text-blue font-semibold hover:bg-sky-100 hover:rounded-full "
        >
          <WorldIcon />
          Everyone can reply
        </a>
        <div className="my-3 mx-14 border border-y-black/5 "></div>
        <div className=" flex flex-row mx-14 gap-2 "><MedyaIcon/> <GIFIcon/> <PollIcon/> <EmojiIcon/><Schedule/><PlaceIcon/></div>

      </div>
    </div>
  );
};

export default AddTweet;
