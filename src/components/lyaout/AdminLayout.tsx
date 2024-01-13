import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[5]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
