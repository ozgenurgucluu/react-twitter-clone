import React from "react";
import { useParams } from "react-router-dom";
import GoogleIcons from "../icons/GoogleIcons";
import AppleIcon from "../icons/AppleIcon";
import { Link } from "react-router-dom";
import Button from "./Button";
import classNames from "classnames";


const LoginWithSocialMediaButtons = () => {
  const params = useParams();
  return (
    <div className="flex flex-col gap-2.5 ">
      <Button   className={classNames('')}>
        <img
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=$%7Bparams.usersName%7D=${params.userName}`}
          alt="userPicture"
          className="p-1 h-[33px] w-[33px]"
        />

        <div className="text-left">
          <p className="font-semibold text-sm ">Sign in as Özge</p>
          <p className=" text-xs">ozgenurguclu0@gmail.com</p>
        </div>
        <div className=" ml-auto ">
          <GoogleIcons />
        </div>
      </Button>

      <Button className={classNames('')}>
        <div className="mx-auto flex  justify-center items-center font-bold text-black/80">
          <AppleIcon /> <span className="ml-1">Sign up with Apple</span>
        </div>
      </Button>

      <span className="  h-[23px] w-[300px] mx-auto  ">or</span>

      <div>
        <Button  bgcolor='blue' text='white' 
       ><span className="mx-auto font-bold">
          Create account</span>
        </Button>
        <p className="w-[300px] h-[40px] text-[11px] ">
          By signing up, you agree to the{" "}
          <Link className="text-blue">Terms of Service</Link> and
          <Link className="text-blue">Privacy Policy</Link>, including
          <Link className="text-blue">Cookie Use.</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginWithSocialMediaButtons;
