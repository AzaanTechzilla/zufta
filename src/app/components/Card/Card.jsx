import React from "react";
import { Icons } from "@/app/api/Api";
const Card = ({img}) => {
  return (
    <>
      <div
        className="blogcard sm:[basis-[100%]] md:basis-[45%] lg:basis-[30%]  mx-3 sm:mx-0 min-h-[80vh] flex items-end"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="blogcard-content flex flex-col items-center justify-center text-white gap-3">
          <p className="px-2 font-manrope">Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</p>
          <div className="flex items-center justify-between w-full px-2 py-2">
            <div className="flex text-sm items-center gap-1 font-manrope ">
              <figure>
                <Icons.calender color="#8E8E8E" />
              </figure>
              18 Sep 2024
            </div>
            <div className="flex text-sm items-center gap-1 font-manrope">
              <figure>
                <Icons.clock color="#8E8E8E"/>
              </figure>
              6 mins
            </div>
            <button className="bg-transparent border-[1.5px] border-white p-2 rounded-full font-manrope">Keep Reading</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
