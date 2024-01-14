import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Button from "../Button";
import Modal from "../ui/Modal";

const AdminLayout = () => {
  const [modal,setModal]=useState(false)
  return (
    <div className="flex">
      <div className="flex-[1]">
      <h1>Admin Dashborad</h1>
        <Sidebar />
      </div>
      <div className="flex-[5]">
        <Outlet />
      </div>
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

export default AdminLayout;
