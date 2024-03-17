import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import CloseIcon from "../icons/CloseIcon";
import XIcon from "../icons/XIcon";
import { useParams } from "react-router-dom";
import GoogleIcons from "../icons/GoogleIcons";
import AppleIcon from "../icons/AppleIcon";
import { Link } from "react-router-dom";

const LoginAccount = () => {
  const [modal, setModal] = React.useState(false);
  const openModal = () => {
    setModal(true);
  };
  const params = useParams();

  return (
    <div className="flex flex-col my-12 text-black/85 text-[17px]  ">
      <div className="font-bold">Already have an account?</div>
      <div className="my-5">
        <Button onClick={openModal}>
          <div className="text-blue font-bold mx-auto">Sign in</div>
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
            <div className="p-5 mx-32 text-3xl font-semibold text-black">
              Sign in to X
            </div>
            <div className=" flex flex-col mx-auto gap-4">
              <div>
                <Button>
                  <img
                    src={
                      "https://api.dicebear.com/7.x/adventurer/svg?seed=$%7Bparams.usersName%7D"
                    }
                    alt="userPicture"
                    className="p-0.5 h-[33px] w-[33px]"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-sm ">Sign in as Özge</p>
                    <p className=" text-xs">ozgenurguclu0@gmail.com</p>
                  </div>
                  <div className=" ml-auto ">
                    <GoogleIcons />
                  </div>
                </Button>
              </div>
              <div>
                <Button>
                  <div className="mx-auto flex items-center font-bold text-black/80">
                    <AppleIcon />
                    <span className="ml-1">Sign up with Apple</span>
                  </div>
                </Button>
              </div>
              <div className=" h-full max-w-[300px] mx-auto  ">
                <span className=" items-center justify-center">or</span>
              </div>
       
              <div >
                <input
                  className=" p-2 h-[56px] w-[298px] border  border-black/25"
                  placeholder="Phone, email, or username"
                />
              </div>
              <div>
                <Button bgcolor="black" text="white">
                  <span className="mx-auto">Next</span>
                </Button>
              </div>
              <div >
                <Button>
                  <span className="mx-auto font-semibold text-base">
                    Forgot password?
                  </span>
                </Button>
              </div>
              <div className="my-12 text-base text-black/60">
                <p>
                  Don't have an account?
                  <Link className="text-blue mx-1">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default LoginAccount;
