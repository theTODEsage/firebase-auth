import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <Navbar /> 
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
