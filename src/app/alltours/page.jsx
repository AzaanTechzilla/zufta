"use client";
import React from "react";
import Banner from "../components/Banner/Banner";
import { tourTypearray, images } from "@/app/api/Api";
import TipsandGuide from "../components/Tips/TipsandGuide";
import AllToursComponent from "../components/AllTours/AllTours";
const AllTours = () => {
  return (
    <>
      <Banner />
      <section className="tourtype py-5">
        <div className="container mx-auto px-3">
          <AllToursComponent tourTypearray={tourTypearray} images={images} tourname="Private Tours" />
          <AllToursComponent tourTypearray={tourTypearray} images={images} tourname="Corporate Tours" />
          <AllToursComponent tourTypearray={tourTypearray} images={images} tourname="By Air Tours" />
        </div>
      </section>
      <TipsandGuide />
    </>
  );
};

export default AllTours;
