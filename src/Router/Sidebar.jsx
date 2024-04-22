import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiPlayListLine } from "react-icons/ri";
import { PiSquaresFourBold } from "react-icons/pi";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/Redux/Action/action";

const Sidebar = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    alert("Logout Successful")
  };

  return (
    <div className="p-4 flex flex-col justify-between h-full">
      <div className="mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&s"
          alt="Logo"
          style={{ maxWidth: "100%" }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Link
          to="/overview"
          className={`flex flex-col items-center justify-start p-4 rounded-xl ${
            location.pathname === "/overview"
              ? "bg-blue-300 text-white"
              : "bg-white text-gray-700 hover:bg-blue-100"
          }`}
        >
          <PiSquaresFourBold className="text-3xl mr-2" />
          <span className="text-xs">Menu</span>
        </Link>
        <Link
          to="/course"
          className={`flex  flex-col items-center justify-start p-4 rounded-xl ${
            location.pathname === "/course"
              ? "bg-blue-300 text-white"
              : "bg-white text-gray-700 hover:bg-blue-100"
          }`}
        >
          <RiPlayListLine className="text-3xl mr-2 " />
          <span className="text-xs">Course</span>
        </Link>
      </div>

      <div className="mt-auto">
        {isAuthenticated ? (
          <button
            className="p-4 bg-transparent text-gray-700 rounded-xl  border-none"
            onClick={handleLogout}
          >
            <FiLogOut className="text-2xl mr-2 text-gray-700" />{" "}
            {/* Set icon color here */}
            <span className="text-xs">Logout</span>
          </button>
        ) : (
          <Link
            to="/login"
            className="p-4 bg-transparent text-gray-700 rounded-xl  border-none"
          >
            <FiLogIn className="text-2xl mr-2" />{" "}
            {/* Assuming default color is fine for login icon */}
            <span className="text-xs">Login</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
