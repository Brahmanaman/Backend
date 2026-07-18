import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="py-3 px-5 w-full bg-amber-100">
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
      </nav>
    </>
  );
};

export default Navbar;
