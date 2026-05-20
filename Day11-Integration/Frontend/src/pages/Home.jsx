import React from "react";
import axiosInstance from "../config/AxiosInstance";
import { Navigate } from "react-router";
import { removeUser } from "../features/AuthSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const logout = async () => {
    let response = await axiosInstance.get("/auth/logout");
    alert(response.data.message);
    dispatch(removeUser());
  };
  return (
    <>
      <div>Home</div>
      <button onClick={logout} className="border-0 w-20 h-10 rounded-xl bg-blue-900 text-white cursor-pointer">
        Logout
      </button>
    </>
  );
};

export default Home;
