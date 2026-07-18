import React from "react";
import { API_URL } from "../../utils/env";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = API_URL + "/auth/google";
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <button onClick={handleGoogleLogin} className="px-3 py-2 border border-black cursor-pointer">
          Login with Google
        </button>
      </div>
    </>
  );
};

export default Login;
