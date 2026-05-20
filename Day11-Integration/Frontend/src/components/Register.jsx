import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axiosInstance from "../config/AxiosInstance";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = async (data) => {
    const response = await axiosInstance.post("/auth/register", data);
    console.log(response);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account 🚀</h2>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1">Full Name</label>
            <input
              {...register("name", { required: "Please enter the name" })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500"
            />
            {errors && <p className="text-sm text-red-500">{errors.name?.message}</p>}
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              {...register("email", { required: "Please enter an email" })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500"
            />
            {errors && <p className="text-sm text-red-500">{errors.email?.message}</p>}
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500"
            />
            {errors && <p className="text-sm text-red-500">{errors.password?.message}</p>}
          </div>

          {/* <div>
            <label className="block text-gray-400 mb-1">Confirm Password</label>
            <input
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) => value === watch("password") || "Password do not match",
              })}
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500"
            />
            {errors && <p className="text-sm text-red-500">{errors.confirmPassword?.message}</p>}
          </div> */}

          <button
            type="submit"
            disabled={!isValid}
            className="w-full bg-indigo-600 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-400">
            Already have an account?
            <span onClick={() => navigate("/")} className="text-indigo-400 cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
