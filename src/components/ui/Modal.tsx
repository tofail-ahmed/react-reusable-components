import React from "react";
import Button from "../Button";

const Modal = ({ modal, setModal }) => {
  return (
    <div className="relative w-[500px] h-[500px] flex justify-center items-center bg-slate-500 rounded-lg">
      <h1>Hey! it works now</h1>
      <div className={`absolute top-0 right-0 `}>
        <Button onClick={() => setModal(!modal)} title="X" className="btn-warning">
          Close Modal
        </Button>
      </div>
    </div>
  );
};

export default Modal;
