import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/auth.api";

const AppLayout = () => {
  useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
    refetchOnWindowFocus: false,
  });
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
