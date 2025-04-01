import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 lg:px-12 text-white bg-black/10 border-b border-white/10 z-20">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="KALTARANG" className="h-16" />
        <span className="text-2xl font-bold text">KALTARANG</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden xl:flex gap-6 text-lg text uppercase">
        {[
          "Home",
          "Events",
          "Merchandise",
          "Schedule",
          "Gallery",
          "Sponsors",
          "Contacts",
        ].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            className="hover:text-gray-300"
          >
            {item}
          </Link>
        ))}
      </nav>

      <a
        href="#"
        className="hidden xl:block bg-yellow-500 text text-black font-bold px-4 py-2 rounded hover:bg-yellow-600 text-sm"
      >
        Register
      </a>

      <button
        onClick={toggleMenu}
        className="xl:hidden text-white text text-2xl z-30"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 text flex flex-col items-center justify-center gap-6 text-white text-xl uppercase transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden`}
      >
        {[
          "Home",
          "Events",
          "Merchandise",
          "Schedule",
          "Gallery",
          "Sponsors",
          "Contacts",
        ].map((item) => (
          <a
            key={item}
            href="#"
            onClick={closeMenu}
            className="hover:text-gray-300"
          >
            {item}
          </a>
        ))}
        <a
          href="#"
          className="bg-yellow-500 text-black font-bold px-6 py-3 rounded hover:bg-yellow-600 text-lg"
        >
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
