
import React from "react";
import { Link } from "react-router-dom"; 

const Navigation = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
            TaskIT
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <Link to="/login" className="text-white hover:text-gray-400 transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-white hover:text-gray-400 transition">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
