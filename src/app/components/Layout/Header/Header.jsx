"use client";
import React, { useState } from "react";
import Image from "next/image";
import { images, Icons } from "@/app/api/Api";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <nav className="container sm:mx-auto px-3 ">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src={images.logo}
                className=""
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
          
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0  md:dark:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <div className="relative inline-block">
                    <button onClick={() => setIsOpen(!isOpen)} className=" flex items-center justify-center  ">
                      Dropdown{" "}
                      <Icons.arrow size={20} className="ml-2"  />
                    </button>

                    {isOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <ul className="py-2">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Option 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Option 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Option 3
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded-sm  md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded-sm  md:hover:bg-transparent md:border-0 md:p-0"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3  rounded-sm  md:hover:bg-transparent md:border-0 md:p-0"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
