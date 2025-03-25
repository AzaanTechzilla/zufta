import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Icons, images, footerpaymentsec } from "../../../api/Api";
const Footer = () => {
  const icons = [
    {
      icons: <Icons.insta />,
    },
    {
      icons: <Icons.facebook />,
    },
    {
      icons: <Icons.twitter />,
    },
    {
      icons: <Icons.youtube />,
    },
  ];
  return (
    <>
      <footer className="py-10">
        <div className="container sm:mx-auto px-3 sm:px-0 ">
          <div className="footer-content flex items-start lg:justify-center gap-3 sm:gap-3 lg:gap-5 flex-wrap py-2">
            <div className="basis-[100%] sm:basis-[49%]  lg:basis-[32%] flex-wrap flex flex-col items-start justify-start gap-4">
              <figure>
                <img
                  src={images.logo}
                  alt="Logo"
                  width="100%"
                  height="100%"
                />
              </figure>
              <ul className="flex flex-col items-start gap-2">
                <li className="flex items-center flex-wrap  gap-1 text-[#575756] font-manrope">
                  <Icons.location size={20} color="#575756" />
                  4517 Washington Ave. Manchester, Kentucky 39495
                </li>
                <li className="flex items-center flex-wrap gap-1 text-[#575756] font-manrope">
                  <Icons.clock size={17} color="#575756" />
                  Hours: 8:00 - 17:00, Mon - Sat
                </li>
                <li className="flex items-center flex-wrap gap-1 text-[#575756] font-manrope">
                  <Icons.mail size={17} color="#575756" />
                  support@travila.com
                </li>
              </ul>
            </div>
            <div className="basis-[100%] sm:basis-[49%]  lg:basis-[25%] lg:pl-3 flex flex-col items-start justify-start gap-5">
              <h4 className=" text-xl font-bold font-manrope">Company</h4>
              <div className="flex flex-col items-center justify-center w-full gap-5">
                <div className="w-full flex items-center justify-between ">
                  <Link href="/aboutus" className="text-[#575756] font-manrope">
                    About Us
                  </Link>
                  <Link href="" className="text-[#575756] font-manrope">
                    Contact us
                  </Link>
                </div>
                <div className="w-full flex  items-center justify-between ">
                  <Link href="" className="text-[#575756] font-manrope">
                    By Air
                  </Link>
                  <Link href="" className="text-[#575756] font-manrope">
                    Plan My Trip
                  </Link>
                </div>
                <div className="w-full flex  items-center justify-between ">
                  <Link href="" className="text-[#575756] font-manrope">
                    Latest News
                  </Link>
                  <Link href="" className="text-[#575756] font-manrope">
                    Travel plane
                  </Link>
                </div>
              </div>
            </div>
            <div className="basis-[100%] sm:basis-[49%] sm:mt-2 md:mt-0 lg:basis-[36.5%] lg:pl-20 flex flex-col items-start justify-start">
              <h4 className="font-bold  text-xl  font-manrope">
                Subscribe For Newsletter
              </h4>
              <div className="flex flex-col items-start gap-5 w-full">
                <div className="relative w-full max-w-md mt-5">
                  <input
                    type="text"
                    placeholder="Enter Email Here"
                    className="w-full p-3 font-manrope  border border-gray-300 rounded-full focus:outline-none focus:ring-2 "
                  />
                  <button className="absolute top-1/2 right-0 font-manrope -translate-y-1/2 bg-[#1A2B48] text-white px-5 py-3 rounded-full ">
                    Subscribe
                  </button>
                </div>
                <p className="font-manrope">
                  No ads. No trails. No commitments
                </p>
                <div className="flex flex-row gap-3 sm:flex-col flex-wrap sm:gap-2">
                  <p className="flex items-center text-[#1A2B48] lg:text-xl md:text-lg text-md  font-manrope font-bold gap-2">
                    <Icons.phone size={20} color="#1A2B48" />
                    Need help? Call us
                  </p>
                  <p className="lg:text-2xl md:text-xl text-lg  font-bold font-manrope text-[#1A2B48]  ">
                    1-800-222-8888
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-sec-content flex items-center flex-wrap justify-start lg:justify-center gap-3 sm:gap-5 lg:gap-10 py-3  ">
            <div className="basis-[47%] sm:basis-[48%] lg:basis-[31%] flex flex-col gap-4 items-start">
              <h5 className="font-bold text-lg font-manrope">Follow us</h5>
              <div className="flex items-center gap-1">
                {icons?.map((icon, index) => (
                  <div
                    className="bg-gray-200 rounded-full p-2 cursor-pointer"
                    key={index}
                  >
                    {icon.icons}
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-[47%] sm:basis-[49%] lg:basis-[30%] flex flex-col gap-2">
              <h5 className="font-bold text-lg font-manrope MB-5">
                We are registered
              </h5>
              <p
                className="font-manrope"
                style={{ fontSize: "clamp(0.5rem, 8vw, 0.9rem)" }}
              >
                Exploring new destinations can be one of life's greatest joys.
              </p>
            </div>
            <div className="basis-[47%] sm:basis-[50%] lg:basis-[30%] flex flex-col gap-5 ">
              <h5 className="font-bold text-lg font-manrope MB-5">Payments</h5>
              <div className="flex gap-2">
                {footerpaymentsec?.map((items, index) => (
                  <figure key={index}>
                    <img
                      src={items.img}
                      alt="payments"
                      width="100%"
                      height="100%"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-third-content flex items-center justify-between flex-wrap border-t-[1.2px] py-5 mt-5 border-gray-200">
            <p
              className="basis-[100%] md:basis-[40%] text-center sm:text-start font-manrope text-[#737373]"
              style={{ fontSize: "clamp(0.5rem, 8vw, 0.9rem)" }}
            >
              © 2024 Travila Inc. All rights reserved.
            </p>
            <div className=" basis-[100%] md:basis-[60%] flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2 mt-3 sm:mt-0 sm:gap-5">
              <div className="flex items-center justify-center gap-5">
              <Link
                href=""
                className="text-gray-400 font-manrope"
                style={{ fontSize: "clamp(0.5rem, 8vw, 0.9rem)" }}
              >
                Terms
              </Link>
              <Link
                href=""
                className="text-gray-400 font-manrope"
                style={{ fontSize: "clamp(0.5rem, 8vw, 0.9rem)" }}
              >
                Privacy policy
              </Link>
              </div>
              <div className="flex items-center justify-center gap-5">
              <Link
                href=""
                className="text-gray-400  font-manrope"
                style={{ fontSize: "clamp(0.5rem, 8vw, 0.9rem)" }}
              >
                Legal notice
              </Link>
              <Link
                href=""
                className="text-gray-400 font-manrope"
                style={{ fontSize: "clamp(0.5rem, 8vw, 0.9rem)" }}
              >
                Accessibility
              </Link>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
