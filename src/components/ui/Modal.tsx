import React, { ReactNode } from "react";
import Button from "../Button";
type TModal = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};
const Modal = ({ modal, setModal, children }: TModal) => {
  const closeModal = () => {
    setModal(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center  ${
        modal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative bg-slate-400/20 p-6 rounded-lg max-w-[80%] max-h-[80%] overflow-y-auto">
        <div >
          {children}
        </div>
        <div className="absolute top-1 right-1">
          <Button onClick={closeModal} title="X" className="btn-warning">
            Close Modal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
