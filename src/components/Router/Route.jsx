import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Route = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Route;
