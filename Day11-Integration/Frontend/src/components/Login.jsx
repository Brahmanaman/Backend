import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginAction } from "../features/AuthAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = async (data) => {
    try {
      await dispatch(loginAction(data)).unwrap();
      navigate("/home");
      reset();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-950 text-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back 👋</h2>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              {...register("email", { required: "Please enter your email" })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none text-white placeholder-gray-500"
            />
            {errors && <p className="text-sm text-red-500">{errors.email?.message}</p>}
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Password</label>
            <input
              {...register("password", { required: "Please enter your password" })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none text-white placeholder-gray-500"
            />
            {errors && <p className="text-sm text-red-500">{errors.password?.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")} className="text-indigo-400 cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
