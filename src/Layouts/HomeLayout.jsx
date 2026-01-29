import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <Navbar /> 
      <main className="min-h-[80vh]">
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
