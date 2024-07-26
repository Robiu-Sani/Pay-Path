import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const LogedUser = localStorage.getItem("UserLogedIn");

  const navitems = (
    <>
      <li className="text-gradient drop-shadow font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-gradient drop-shadow font-bold">
        <Link to="/about">About</Link>
      </li>
      <li className="text-gradient drop-shadow font-bold">
        <Link to="/services">Services</Link>
      </li>
      <li className="text-gradient drop-shadow font-bold">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="w-full fixed z-[9999]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#cfb56b]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-gradient-bg border border-[#cfb46b73] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navitems}
            </ul>
          </div>
          <div className="relative">
            <div className="w-[50px] h-[50px] rounded-full bg-gradient-bg absolute left-1"></div>
            <a className="btn btn-ghost text-xl text-gradient drop-shadow font-extrabold ">
              <span className="">PayPath</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">{navitems}</ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => navigate("/DeshboardHome")}
            className={`border ${
              LogedUser ? " !w-[120px]" : ""
            } border-[#00eeff80] button`}
          >
            <span className="absolute text-gradient">
              {LogedUser ? "DeshBoard" : "LogIn"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
// LogedUser
