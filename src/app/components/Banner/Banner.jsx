"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { images } from "@/app/api/Api";

const Banner = () => {
  const pathname = usePathname();
  const pageKey = pathname.split("/").pop() || "home";

  const banners = {
    home: {
      title: "Hero Heading Should Appear After A While",
      image: images.homebannerimg,
      buttonText: "Explore More",
    },
    aboutus: {
      title: "About Us",
      image: images.aboutbanner,
    },
    contact: {
      title: "Contact Us",
      image: images.contactbannerimg,
    },
    alltours: {
      title: "All Tours",
      image: images.alltoursbannerimg,

    }
  };

  const { title, image, buttonText } = banners[pageKey] || banners["home"];

  return (
    <section
      className={`banner relative flex items-center shadow-[inset_0_-50px_36px_-28px_rgba(0,0,0,0.35)] ${
        pageKey === "home" ? "justify-start" : "justify-center"
      } min-h-[60vh] sm:min-h-[90vh] bg-cover bg-center`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="container sm:mx-auto px-6 sm:px-10">
        {pageKey === "home" ? (
          <>
            <div className="flex items-center justify-center">
              <div className="basis-1/2 text-left  space-y-4">
                <h1
                  className=" font-extrabold text-white"
                  style={{ fontSize: "clamp(20px, 8vw, 3.5rem)" }}
                >
                  {title}
                </h1>
                <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition">
                  {buttonText}
                </button>
              </div>
              <div className="basis-1/2">
                {/* <Tabs /> */}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center  bg-opacity-50 flex justify-center items-center  rounded-lg">
            <h1
              className=" font-bold bg-[#ffffffba] w-fit p-3 backdrop-blur-xl rounded-full"
              style={{ fontSize: "clamp(0.9rem, 5vw, 1.2rem)" }}
            >
              Home / {title}
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tours", "Hotels", "TravelerPayout Flight"];
  const content = [
    "Content for Tab 1",
    "Content for Tab 2",
    "Content for Tab 3",
  ];

  return (
    <>
      <div className=" bg-[#ffffffba] rounded-xl">
        <div className="flex border-b py-3 px-3">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === index ? "bg-primary text-white " : "text-gray-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-4">
          {activeTab === 0 && (
            <>
              <div className="">
                <input type="dropdown"   />
              {/* <Menu>
      <MenuHandler>
        <Button className="">Menu</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu> */}
              </div>
              
            </>
          )}
          {activeTab === 1 && (
            <>
              <div></div>
              <p>alww</p>
            </>
          )}
          {activeTab === 2 && (
            <>
              <div></div>
              <p>alwww</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};
