import React from "react";
import XIcon from "../icons/XIcon";
import LoginWithSocialMediaButtons from "../components/LoginWithSocialMediaButtons";
import LoginAccount from "../components/LoginAccount";
import { Link } from "react-router-dom";

const Login = () => {
  const footer = [
    { to: "/", text: "About" },
    { to: "/", text: "Download the X app" },
    { to: "/", text: "Help Center" },
    { to: "/", text: "Terms of Service" },
    { to: "/", text: "Privacy Policy" },
    { to: "/", text: "Cookie Policy" },
    { to: "/", text: "Imprint" },
    { to: "/", text: "Accessibility" },
    { to: "/", text: "Ads info" },
    { to: "/", text: "Blog" },
    { to: "/", text: "Status" },
    { to: "/", text: "Careers" },
    { to: "/", text: "Brand Resources" },
    { to: "/", text: "Advertising" },
    { to: "/", text: "Marketing" },
  ];
  const footer1 = [
    { to: "/", text: "X for Busiuness" },
    { to: "/", text: "Developers" },
    { to: "/", text: "Directory" },
    { to: "/", text: "Settings" },
    { to: "/", text: "© 2024 X Corp." },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex ">
        <div className="flex p-16  w-[604px] mt-24 mx-20">
          <XIcon width={547} height={344} />
        </div>

        <div className="w-full flex flex-col relative  ">
          <div className=" text-6xl font-bold mt-24 mb-12 ">
            <h2>Happening Now</h2>
          </div>
          <div className="text-[31px] font-bold mb-4">
            <h2>Join Today</h2>
          </div>
          <div>
            <LoginWithSocialMediaButtons />
          </div>
          <div>
            <LoginAccount />
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto -mt-2 ">
        <div className="flex p-2 w-[1250px]  ">
          {footer.map((link, index) => (
            <Link
              className=" min-w-[15px] mx-auto text-[13px] text-footer  "
              key={index}
              to={link.to}
            >
              <span>{link.text}</span>
            </Link>
          ))}
        </div>
        <div className="flex p-2 mx-auto w-[460px] -mt-3 ">
          {footer1.map((link, index) => (
            <Link
              className=" max-w-[96px] mx-auto text-[13px] text-footer  "
              key={index}
              to={link.to}
            >
              <span>{link.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
