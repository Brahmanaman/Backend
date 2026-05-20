import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import PublicRoute from "../components/PublicRoute";
import Protected from "../components/Protected";
import axiosInstance from "../config/AxiosInstance";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/AuthSlice";

const AppRoutes = () => {
  const dispatch = useDispatch();

  const getLoggedInUser = async () => {
    try {
      let res = await axiosInstance.get("/getLoggedInUser");
      dispatch(addUser(res.data.user));
    } catch (error) {
      dispatch(removeUser());
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      Component: PublicRoute,
      children: [
        {
          path: "",
          Component: AuthLayout,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      Component: Protected,
      children: [
        {
          path: "",
          Component: MainLayout,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
