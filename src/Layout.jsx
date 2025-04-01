
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";

const Layout = () => {
  return (
    <>
      <Header /> 
      <main className="min-h-screen bg-black text-white">
        <Outlet /> 
      </main>
      <Footer /> 
    </>
  );
};

export default Layout;
