import { useSelector } from "react-redux";
import { NavLink } from "react-router";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <nav className="py-3 px-5 w-full bg-amber-100 justify-between flex">
        <div className="flex items-center gap-10 font-semibold">
          <NavLink className={({ isActive }) => (isActive ? "underline" : "")} to={"/"}>
            Home
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? "underline" : "")} to={"/login"}>
            Login
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "underline" : "")} to={"/admin"}>
            Admin
          </NavLink>
        </div>
        <div className="h-10 w-10 rounded-full  overflow-hidden">
          <img
            src={user.picture || "https://px.pixxo.io/test/user.png"}
            alt="user"
            className="object-fill h-full w-full"
          ></img>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
