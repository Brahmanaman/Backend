import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/auth.api";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";

const AppLayout = () => {
  const dispatch = useDispatch();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: location.pathname !== "/login",
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data && data?.data?.data) {
      dispatch(setUser(data?.data?.data));
    }
  });
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
