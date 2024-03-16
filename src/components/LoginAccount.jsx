import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import CloseIcon from "../icons/CloseIcon";
import XIcon from "../icons/XIcon";

const LoginAccount = () => {
  const [modal, setModal] = React.useState(false);
  const openModal = () => {
    setModal(true);
  };

  return (
    <div className="font-bold my-12 text-black/85 text-[17px] flex flex-col">
      Already have an account?
      <div className="my-5">
        <Button onClick={openModal}>
          <span className="text-blue font-bold mx-auto">Sign in</span>
        </Button>
        <Modal show={modal}>
          <div className="w-[600px] h-[550px] bg-white rounded-2xl p-3 ">
            <button onClick={() => setModal(false)}>
              <CloseIcon />
            </button>
            <XIcon />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default LoginAccount;
