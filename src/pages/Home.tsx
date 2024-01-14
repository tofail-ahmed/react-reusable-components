import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/ui/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);

  console.log(modal);
  return (
    <div className="flex items-center justify-around">
      <h1>Home</h1>

      <div
        className={`${
          modal ? " fixed inset-0 z-50 flex items-center justify-center " : ""
        }`}
      >
        {modal ? (
          <Modal modal={modal} setModal={setModal}></Modal>
        ) : (
          <Button
            onClick={() => setModal(!modal)}
            variant="solid"
            title="Open Modal"
          >
            Click Meh
          </Button>
        )}
      </div>
    </div>
  );
};

export default Home;
