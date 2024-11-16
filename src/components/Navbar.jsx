import React, { useState } from "react";
import logo from "../assets/travriplogo.svg";

import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between z-30 items-center mt-[6px] py-[20px]  md:px-3 rounded-40  max-w-[1280px] w-11/12 h-[64px] mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Payswift Logo" className="h-8 w-auto" />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-navText focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Close Icon */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.364 5.636a1 1 0 00-1.414 1.414L10.414 13l6.536 6.536a1 1 0 001.414-1.414L12.828 13l5.536-5.536a1 1 0 000-1.414z"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Hamburger Icon */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navbar Links for Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {" "}
        <div className="font-plusjakarta text-[16px] text-sectionHeading font-normal">
          Home
        </div>
        <div className="font-plusjakarta text-[16px] text-sectionHeading  font-normal">
          <a className="text-sectionHeading">Destinations</a>
        </div>
        <div className="font-plusjakarta text-[16px] text-sectionHeading font-normal">
          Services
        </div>
        <div className="font-plusjakarta text-[16px] text-sectionHeading font-normal">
          Blogs
        </div>
      </div>

      {/* Buttons for Desktop */}
      <div className="hidden md:flex gap-2">
        <button className="w-[100px] h-[42px] text-sectionHeading font-normal font-plusjakarta ">
          Login
        </button>
        <button className="w-[100px] h-[42px] font-normal font-plusjakarta  rounded-lg text-white bg-primary">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[69px] h-screen left-0 w-full bg-primary p-6 md:hidden flex flex-col items-start gap-6">
          {/* Nav Links */}
          <div className="font-sans text-white font-normal">Home </div>
          <div className="font-sans text-white font-normal">Destinations</div>
          <div className="font-sans text-white font-normal">Services</div>
          <div className="font-sans text-white font-normal">Blogs</div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 w-full mt-4">
            <button className="w-full h-[42px] text-white border rounded-lg">
              Login
            </button>
            <button className="w-full h-[42px] rounded-lg text-white bg-primary">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
