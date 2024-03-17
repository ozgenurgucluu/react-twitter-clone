import React from "react";
import { Link } from "react-router-dom";
import XIcon from "../icons/XIcon";
import HomePageIcon from "../icons/HomePageIcon";
import DiscoverIcon from "../icons/DiscoverIcon";
import NotificationsIcon from "../icons/NotificationsIcon";
import MessagesIcon from "../icons/MessagesIcon";
import PremiumIcon from "../icons/PremiumIcon";
import ProfileIcon from "../icons/ProfileIcon";
import ListsIcon from "../icons/ListsIcon";
import MoreIcon from "../icons/MoreIcon";
import SendButton from "./SendButton";
import AddAcount from "./AddAcount";

const sidebarLinks = [
  { to: "/", icon: <HomePageIcon />, text: "Home Page" },
  { to: "/", icon: <DiscoverIcon />, text: "Discover" },
  { to: "/", icon: <NotificationsIcon />, text: "Notifications" },
  { to: "/", icon: <MessagesIcon />, text: "Messages" },
  { to: "/", icon: <ListsIcon />, text: "Lists" },
  { to: "/", icon: <PremiumIcon />, text: "Premium" },
  { to: "/", icon: <ProfileIcon />, text: "Profile" },
  { to: "/", icon: <MoreIcon />, text: "More" },
];

const Sidebar = () => {
  return (
    <div className="h-full  bg-white  w-[284px] fixed text-blackflex   gap-6 px-5 py-2 cursor-pointer">
      <div>
        <Link
          className="flex hover:bg-gray-200 hover:rounded-3xl gap-3 text-center mx-auto items-center h-[50.5px]  text-xl"
          to="/"
        >
          <XIcon />
        </Link>
        {sidebarLinks.map((link, index) => (
          <Link
            key={index}
            className="flex  hover:bg-gray-200 hover:rounded-3xl gap-3 text-center mx-auto items-center h-[50.5px] text-xl"
            to={link.to}
          >
            {link.icon} <span>{link.text}</span>
          </Link>
        ))}
        <SendButton />
        <AddAcount />
      </div>
    </div>
  );
};

export default Sidebar;
