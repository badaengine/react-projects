import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
// import Protected from "../layouts/Protected";
import { Dashboard} from "@/pages/Dashboard";
import { HomePage } from "@/pages/HomePage";
import Counter from "@/pages/Counter";
 

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <HomePage /> 
      )
    },
    {
        path: "/dash",
        element: (
          <Dashboard /> 
        )
      },
      
    { path: "404", element: <>404</> },
    { path: "303", element: <>Not Authenticated, Please Login</> },
    { path: "505", element: <>Not Authorised, Please Check Access</> },
  ]);
};

export default Router;
