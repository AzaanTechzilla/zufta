'use client';
import React, { useState } from "react";
import { images, Icons } from "../api/Api";
import WishList from "./wishlist/page";
import BookingHistory from "./bookinghistory/page";
import Setting from "./setting/page";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const handleMenuClick = (page) => {
    setIsOpen(true);
    setActivePage(page);
  };

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardContent />;
      case "wishlist":
        return <WishList />;
      case "history":
        return <BookingHistory />;
      case "settings":
        return <Setting />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`h-screen bg-white transition-all duration-300 border-2 border-black ${
          isOpen ? "w-52" : "w-24"
        }`}
      >
        {/* Logo Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 focus:outline-none"
        >
          <figure>
            <img src={images.logo} alt="Logo" className="w-full h-auto" />
          </figure>
        </button>

        {/* Menu Items */}
        <nav className="mt-5 flex flex-col gap-[35px] items-center">
          <button
            className="flex items-center px-4 py-2 text-primary font-bold cursor-pointer"
            onClick={() => handleMenuClick("dashboard")}
          >
            {isOpen ? (
              <>
                <Icons.dashboard size={25} className="mr-2" /> Dashboard
              </>
            ) : (
              <Icons.linedashboard size={25} />
            )}
          </button>

          <button
            className="flex items-center px-4 py-2 text-primary font-bold cursor-pointer"
            onClick={() => handleMenuClick("wishlist")}
          >
            {isOpen ? (
              <>
                <Icons.fillheart size={25} className="mr-2" /> Wishlist
              </>
            ) : (
              <Icons.lineHeart size={25} />
            )}
          </button>

          <button
            className="flex items-center px-4 py-2 text-primary font-bold cursor-pointer"
            onClick={() => handleMenuClick("history")}
          >
            {isOpen ? (
              <>
                <Icons.clock size={25} className="mr-2" /> Booking History
              </>
            ) : (
              <Icons.lineclock size={25} />
            )}
          </button>

          <button
            className="flex items-center px-4 py-2 text-primary font-bold cursor-pointer"
            onClick={() => handleMenuClick("settings")}
          >
            {isOpen ? (
              <>
                <Icons.fillsetting size={30} className="mr-2" /> Settings
              </>
            ) : (
              <Icons.linesetting size={30} />
            )}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default Dashboard ;


const DashboardContent=()=>{
  return(
    <>
     Dashboard
    </>
  )

} 
