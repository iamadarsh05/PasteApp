import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-8 bg-white shadow-md py-4 px-6 mb-8 rounded-b-xl">
      
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg transition ${
            isActive
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/pastes"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg transition ${
            isActive
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`
        }
      >
        Pastes
      </NavLink>
      
    </div>
  );
};

export default Navbar;
