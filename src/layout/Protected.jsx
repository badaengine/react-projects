import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const access_token = localStorage.getItem("auth");
  console.log(access_token);
  if (access_token === null) {
    return <Navigate to="/303" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default Protected;
