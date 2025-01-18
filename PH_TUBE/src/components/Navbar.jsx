/* eslint-disable no-unused-vars */
/* PH_TUBE\src\components\Navbar.jsx */
import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={Logo}
          alt="PH Tube Logo"
          className="h-10 w-28"
        />
      </div>

      {/* Centered "Sort by View" Button */}
      <div className="flex justify-center flex-1">
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
          Sort by View
        </button>
      </div>

      {/* Blog Button */}
      <div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Blog
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
