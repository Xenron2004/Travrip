import React from "react";
import Logo from "../assets/travriplight.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";
import Bg from "./Bg";

const Footer = () => {
  return (
    <div className="w-full flex justify-center py-14 bg-primary">
      <div className="flex flex-wrap max-w-[1280px] gap-8 w-11/12 py-8 px-2 justify-between">
        <div className="flex flex-col gap-2 ">
          {/* Logo section */}
          <img src={Logo} className="w-fit h-fit" alt="Payswift Logo" />
          <div className="font-plusjakarta font-normal text-[#e8e9eb] text-[14px] max-w-[204px] w-full">
            Your gateway to unforgettable journeys. Explore, discover, and
            travel with ease
          </div>
        </div>

        <div className="flex flex-wrap   max-w-[500px] w-full    items-center justify-between">
          {/* Links */}
          <div className="flex flex-col ">
            {/* company */}
            <h3 className="text-white font-medium tracking-[-2%]  font-plusjakarta text-center mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-center text-gray-600">
              {" "}
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]  "
                >
                  About Us
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]"
                >
                  Careers
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]"
                >
                  Our Story
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]"
                >
                  Blog
                </a>
              </li>{" "}
            </ul>
          </div>
          <div>
            {/* resources */}
            <h3 className="text-white font-medium tracking-[-2%]  font-plusjakarta text-center mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-center text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]"
                >
                  Travel Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]"
                >
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]"
                >
                  Travel Tips
                </a>
              </li>
            </ul>
          </div>
          <div>
            {/* support */}
            <h3 className="text-white font-medium tracking-[-2%] text-center  font-plusjakarta mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-center text-gray-600 ">
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]"
                >
                  Customer Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]"
                >
                  Booking Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[#D4D6D8] font-plusjakarta font-normal tracking-[-2%] text-[14px]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col max-w-[162px] w-full">
          {/* social Links */}
          <div className="text-white font-medium tracking-[-2%]  font-plusjakarta mb-3">
            Social Links
          </div>
          <div className="flex flex-row  gap-4 justify-between ">
            <FaFacebookF className="hover:text-white text-[#D4D6D8] cursor-pointer" />
            <FaTwitter className="hover:text-white text-[#D4D6D8] cursor-pointer" />
            <FaGithub className="hover:text-white text-[#D4D6D8] cursor-pointer" />
            <FaTelegramPlane className="hover:text-white text-[#D4D6D8] cursor-pointer" />
            <FaInstagram className="hover:text-white text-[#D4D6D8] cursor-pointer" />
          </div>
        </div>
        <Bg />
      </div>
    </div>
  );
};

export default Footer;
