"use client";
import React, { useState } from "react";
import Image from "next/image";
import { images, Icons } from "@/app/api/Api";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 w-[95%] z-10 backdrop-blur-xl rounded-full px-2">
      <nav className="container sm:mx-auto px-3 sm:px-0">
        <div className="flex items-center justify-between py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <figure style={{ width: "clamp(60px, 8vw, 86px)" }}>
              <img src={images.logo} className="w-full h-auto" alt="Logo"  />
            </figure>
          </Link>

          {/* Mobile & Tablet Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
            aria-controls="navbar-dropdown"
            aria-expanded={isOpen}
          >
            <Icons.menu size={24} />
          </button>

          {/* Sidebar for Mobile & Tablet */}
          <div
            className={`fixed top-0  left-0 w-64 h-full bg-white shadow-lg transform transition-transform ${
              isOpen ? "-translate-x-0" : "-translate-x-[300px]"
            } lg:hidden`}
          >
            <div className="p-4 bg-white rounded-2xl">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="block mb-4 text-gray-500 hover:text-gray-700"
              >
                X
                {/* <Icons.close size={24} /> */}
              </button>

              <ul className="flex flex-col space-y-3">
                <li><Link href="/" className="block py-2 px-3">Home</Link></li>
                <li><Link href="/premiumgrouptours" className="block py-2 px-3">Premium Group Tours</Link></li>
                <li>
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center justify-between w-full py-2 px-3"
                    >
                    <Link href='/privatetours'>Private Tours</Link> <Icons.arrow size={20} className="cursor-pointer" />
                    </button>
                    {isDropdownOpen && (
                      <div className="mt-2 bg-white border rounded-lg shadow-lg">
                        <ul className="py-2">
                          <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</Link></li>
                          <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</Link></li>
                          <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</Link></li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
                <li><Link href="/byair" className="block py-2 px-3">By Air</Link></li>
                <li><Link href="/pakistansikhyatra" className="block py-2 px-3">Pakistan Sikh Yatra</Link></li>
                <li><Link href="/contact" className="block py-2 px-3">Contact</Link></li>
                <li><Link href="/login" className="block py-2 px-3">Login</Link></li>

                {/* "Plan My Trip" button inside sidebar for mobile/tablet */}
                <li>
                  <button className="btn w-full py-2 px-3 rounded-full bg-blue-600 text-white">
                    Plan My Trip
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar for Large Screens */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="">Home</Link>
            <Link href="#" className="">Premium Group Tours</Link>
            <div className="relative m-0">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center justify-between w-full "
                    >
                    <Link href='/privatetours'>Private Tours</Link> <Icons.arrow size={20}  />
                    </button>
                    {isDropdownOpen && (
                      <div className="mt-2 absolute top-4 bg-white border rounded-lg shadow-lg">
                        <ul className="py-2">
                          <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</Link></li>
                          <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</Link></li>
                          <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</Link></li>
                        </ul>
                      </div>
                    )}
                  </div>
            <Link href="#" className="">By Air</Link>
            <Link href="#" className="">Pakistan Sikh Yatra</Link>
            <Link href="/contact" className="">Contact</Link>
            <Link href="#" className="">Login</Link>
          </div>

          {/* "Plan My Trip" button for large screens */}
          <button className="btn hidden lg:flex py-2 px-4 rounded-full bg-blue-600 text-white">
            Plan My Trip
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
