import React from "react";
import { useParams } from "react-router-dom";
import GoogleIcons from "../icons/GoogleIcons";
import AppleIcon from "../icons/AppleIcon";
import { Link } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import XIcon from "../icons/XIcon";

const LoginWithSocialMediaButtons = () => {
  const params = useParams();
  const [modal, setModal] = React.useState(false);

  const openModal = () => {
    setModal(true);
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const years = Array.from(
    { length: 2007 - 1950 + 1 },
    (_, index) => 1950 + index
  );
  return (
    <div className="flex flex-col gap-2.5 ">
      <Button>
        <img
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=$%7Bparams.usersName%7D=${params.userName}`}
          alt="userPicture"
          className="p-1 h-[33px] w-[33px]"
        />
        <div className="text-left">
          <p className="font-semibold text-sm">Sign in as Özge</p>
          <p className="text-xs">ozgenurguclu0@gmail.com</p>
        </div>
        <div className="ml-auto">
          <GoogleIcons />
        </div>
      </Button>

      <Button>
        <div className="mx-auto flex items-center font-bold text-black/80">
          <AppleIcon /> <span className="ml-1">Sign up with Apple</span>
        </div>
      </Button>
      <div className="h-full min-w-[300px] mx-auto ">
        <span className="mx-auto">or</span>
      </div>
      <div>
        <Button bgcolor="blue" text="white" onClick={openModal}>
          <span className="mx-auto font-bold">Create account</span>
        </Button>
        <Modal show={modal}>
          <div className="flex flex-col w-[600px] h-[590px] bg-white rounded-2xl p-3 gap-4">
            <div className="flex">
              <button onClick={() => setModal(false)}>
                <CloseIcon />
              </button>
              <div className="flex mx-auto">
                <XIcon width={32} height={32} />
              </div>
            </div>
            <div className="p-5 mx-9 text-3xl font-bold text-black">
              Create your account
            </div>
            <div className="  flex flex-col mx-14 gap-5">
              <div>
                <input
                  className=" p-2 h-[56px] w-[421px] border  border-black/25"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className=" p-2 h-[56px] w-[421px] border  border-black/25"
                  placeholder="Phone"
                />
              </div>
              <div className="text-right w-[424px] -my-2 ">
                <Link className="text-blue mx-1 text-right ">
                  Use email instead
                </Link>
              </div>
              <div>
                <h1 className="font-semibold">Date of birth</h1>
                <p className="text-searchGray text-sm">
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </p>
              </div>

              <div className="flex gap-3">
                <div>
                  <select className=" text-sm w-[205px] h-[56px] border border-black/25">
                    <label htmlFor="combobox"></label>

                    {months.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select className=" text-sm w-[82px] h-[56px] border border-black/25">
                    <label htmlFor="combobox"></label>

                    {days.map((day, index) => (
                      <option key={index} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select className=" text-sm w-[110px] h-[56px] border border-black/25">
                    <label htmlFor="combobox"></label>

                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <button >
                  <div className=" flex mx-auto w-[424px] h-[52px] border border-black/25 rounded-3xl justify-center items-center bg-searchGray text-white" >
                    Next
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Modal>
        <div className="w-[300px] h-[40px] text-[11px] ">
        <span>
          By signing up, you agree to the
          <Link className="text-blue"> Terms of Service</Link> and
          <Link className="text-blue"> Privacy Policy</Link>, including
          <Link className="text-blue"> Cookie Use.</Link>
        </span>
        </div>
      </div>
    </div>
  );
};

export default LoginWithSocialMediaButtons;
