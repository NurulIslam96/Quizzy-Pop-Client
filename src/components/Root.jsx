import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default Root;
