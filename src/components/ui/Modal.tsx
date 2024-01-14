// Modal.jsx
import React from "react";
import Button from "../Button";
type TModal={
      modal:boolean;
      setModal:React.Dispatch<React.SetStateAction<boolean>>
}
const Modal = ({ modal, setModal }:TModal) => {
  // Add or remove a class to trigger the CSS transition
  document.body.classList.toggle("modal-open", modal);

  const closeModal = () => {
    setModal(false);
    // Remove the class on modal close
    document.body.classList.remove("modal-open");
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${modal ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className={`relative bg-slate-400 p-6 rounded-lg`}>
        <h1>Hey! it works now</h1>
        <div className={`absolute top-1 right-1`}>
          <Button
            onClick={closeModal}
            title="X"
            className="btn-warning"
          >
            Close Modal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
