import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <Navbar /> {/* Navbar shows on Login/Register */}
      <main className="min-h-[80vh]">
        <Outlet /> {/* Child pages render here */}
      </main>
    </div>
  );
};

export default AuthLayout;
