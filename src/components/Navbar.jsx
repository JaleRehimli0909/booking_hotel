import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-md bg-gradient-to-r from-blue-500 to-red-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">HalalHolidayCheck</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/hotels"
              className="text-white hover:text-blue-500 transition-colors"
            >
              Hotel List 
            </Link>
          </li>
          <li>
            <Link
              to="/airport-transfers"
              className="block text-white hover:text-blue-500 transition-colors"
            >
              Airport Transfers
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white hover:text-blue-500 transition-colors"
            >
              Special Offers
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link
            to="/hotels"
            className="block text-white hover:text-blue-500 transition-colors text-right "
          >
            Hotel List
          </Link>
          <Link
            to="/airport-transfers"
            className="block text-white hover:text-blue-500 transition-colors text-right"
          >
            Airport Transfers
          </Link>
          <Link
            to="/services"
            className="block text-white hover:text-blue-500 transition-colors text-right"
          >
            Special Offers
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
