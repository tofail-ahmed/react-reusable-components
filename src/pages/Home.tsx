// Home.jsx
import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/ui/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex items-center justify-around">
      <h1>Home</h1>

      <Button
        onClick={() => setModal((prev) => !prev)}
        variant="solid"
        title="Open Modal"
        className={`${modal ? "invisible" : "visible"}`}
      >
        Click Meh
      </Button>
      <Modal modal={modal} setModal={setModal}></Modal>
    </div>
  );
};

export default Home;
