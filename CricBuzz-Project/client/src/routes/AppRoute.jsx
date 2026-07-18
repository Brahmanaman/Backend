import React from "react";
import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import AppLayout from "../layout/AppLayout";
import AdminLayout from "../layout/AdminLayout";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import AdminHome from "../pages/private/AdminHome";

const AppRoute = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      Component: AppLayout,
      children: [
        {
          index: true,
          path: "",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/admin",
      Component: AdminLayout,
      children: [
        {
          index: true,
          element: <AdminHome />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoute;
