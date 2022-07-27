import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter({ component: Component, ...rest }) {
  return (
    <Outlet
      {...rest}
      component={(props) => {
        const token = window.localStorage.getItem("userInfo");
        if (token) {
          return <Component {...props} />;
        } else {
          return <Navigate to={"/Login"} />;
        }
      }}
    />
  );
}

export default PrivateRouter;