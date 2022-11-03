import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const manuItem = (
    <>
      <NavLink
        style={({ isActive }) => ({
          color: isActive && "orange",
        })}
        to={"/home"}
        className="font-semibold mx-3"
      >
        Home
      </NavLink>
      {user?.uid && (
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "orange",
          })}
          to={"/orders"}
          className="font-semibold mx-3"
        >
          Orders
        </NavLink>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar  shadow-xl bg-gray-800 md:text-gray-100 px-8 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  text-white"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {manuItem}
            </ul>
          </div>
          <Link to={"/"}>
            <img src={logo} className="w-14 h-14 text-2xl text-white" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{manuItem}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <>
              {" "}
              <p className="font-semibold mx-3">{user?.displayName}</p>
              <p onClick={logOut} className="btn btn-sm mx-3">
                Log Out
              </p>
            </>
          ) : (
            <>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "orange",
                })}
                to={"/login"}
                className="font-semibold mx-3"
              >
                Login
              </NavLink>
            </>
          )}
          <></>

          <Link className="btn btn-secondary btn-sm">Apointment</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
