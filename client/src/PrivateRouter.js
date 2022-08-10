import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter({ children }) {

  const token = window.localStorage.getItem("userInfo");

  if (token) {
    return children
  } else {
    return <Navigate to={`/Login`} />;
  }

  
}

export default PrivateRouter;