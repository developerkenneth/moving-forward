import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-green-600">
        <img className="h-12" src={logo} alt="moving forward logo" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "text-gray-700 hover:text-green-600 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "text-gray-700 hover:text-green-600 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "text-gray-700 hover:text-green-600 transition"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "text-gray-700 hover:text-green-600 transition"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold border-b-2 border-green-600"
                  : "text-gray-700 hover:text-green-600 transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold border-b-2 border-green-600"
                  : "text-gray-700 hover:text-green-600 transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold border-b-2 border-green-600"
                  : "text-gray-700 hover:text-green-600 transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold border-b-2 border-green-600"
                  : "text-gray-700 hover:text-green-600 transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
