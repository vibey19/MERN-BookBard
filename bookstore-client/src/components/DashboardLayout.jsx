import React from "react";
import { Outlet } from "react-router-dom";
import SidebarComp from "./SidebarComp";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <SidebarComp />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
