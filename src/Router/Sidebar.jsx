import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiPlayListLine } from "react-icons/ri";
import { PiSquaresFourBold } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
const Sidebar = () => {
  // Get the current location
  const location = useLocation();

  return (
    <div className="p-4 flex flex-col justify-between h-full">
      {/* Logo */}
      <div className="mb-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&s" alt="Logo" style={{ maxWidth: "100%" }} />
      </div>

      {/* Routes */}
      <div className="flex flex-col gap-4">
        <Link to="/overview" className={`flex flex-col items-center justify-start p-4 rounded-xl ${location.pathname === '/overview' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-blue-100'}`}>
          <PiSquaresFourBold className="text-3xl mr-2" />
          <span className="text-xs">Menu</span>
        </Link>
        <Link to="/course" className={`flex  flex-col items-center justify-start p-4 rounded-xl ${location.pathname === '/course' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-blue-100'}`}>
          <RiPlayListLine className="text-3xl mr-2 " />
          <span className="text-xs">Course</span>
        </Link>
      </div>

      {/* Logout Button */}
      <div className="mt-auto">
        <button className="p-4 bg-white text-gray-700 rounded-xl hover:bg-gray-200 border-none">
          <FiLogOut className="text-2xl mr-2 "/>
          <span className="text-xs">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
