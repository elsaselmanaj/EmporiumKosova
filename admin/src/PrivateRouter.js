import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter({ children }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  if (userInfo && userInfo.isAdmin) {
    return children;
  } else {
    return <Navigate to={`/Login`} />;
  }

  
}

export default PrivateRouter;
