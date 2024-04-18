import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiPlayListLine } from "react-icons/ri";
import { PiSquaresFourBold } from "react-icons/pi";

const Sidebar = () => {
  // Get the current location
  const location = useLocation();

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      {/* Logo */}
      <div className="mb-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&s" alt="Logo" style={{ maxWidth: "100%" }} />
      </div>

      {/* Routes */}
      <div style={{backgroundColor: location.pathname === '/route1' ? 'lightblue' : 'white' }}>
        <Link to="/route1" className="block mb-2" style={{ padding: "10px", borderRadius: "5px", color: location.pathname === '/route1' ? 'white' : '#1a202c',  }}>
          <PiSquaresFourBold style={{ fontSize: "31px" }} />
          <span>Menu</span>
        </Link>
      </div>
      <div style={{backgroundColor: location.pathname === '/route2' ? 'lightblue' : 'white' }}>
        <Link to="/route2" className="block" style={{ padding: "10px", borderRadius: "5px", color: location.pathname === '/route2' ? 'white' : '#1a202c', }}>
          <RiPlayListLine style={{ fontSize: "31px" }} />
          <span>Course</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

