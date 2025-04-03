'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Banner from "./components/Banner/Banner";
import { images, vectorarray, tourarray } from "./api/Api";
import Image from "next/image";
import TourCard from "./components/Card/TourCard";

export default function Home() {
  const itemRefs = useRef([]);
  const [inViewStates, setInViewStates] = useState([]);
  useEffect(() => {
    setInViewStates(
      itemRefs.current.map((ref) => {
        if (!ref) return false;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInViewStates((prev) => {
                const newState = [...prev];
                newState[itemRefs.current.indexOf(ref)] = true;
                return newState;
              });
              observer.disconnect();
            }
          },
          { rootMargin: "-50px" }
        );
        observer.observe(ref);
        return false;
      })
    );
  }, []);
  return (
    <>
      <Banner />
      <section className="brands py-5">
        <div className="container mx-auto px-3 sm:px-0">
          <h2
            className="font-medium text-center py-3"
            style={{ fontSize: "clamp(15px, 8vw, 1.5rem)" }}
          >
            Trusted by beloved partner and customer
          </h2>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {vectorarray?.map((brand, index) => {
              return (
                  <figure style={{width: "clamp(7rem, 15vw, 30rem)"}} key={index}>
                    <Image
                      src={brand.img}
                      alt="brand"
                      className="h-auto w-full object-cover"
                    />
                  </figure>
              );
            })}
          </div>
        </div>
      </section>
    <section className="hometour-sec py-5">
      <div className="container mx-auto px-3 sm:px-0">
        <div className="hometour-sec min-h-screen">
        <h2
          className="font-medium text-center pb-3"
          style={{ fontSize: "clamp(20px, 8vw, 2.8rem)" }}
        >
          Tours Handpicked for you
        </h2>
<div className="flex items-center justify-center gap-2 min-h-full ">
  {tourarray?.map((items, index)=>{
    return(
      <TourCard items={items} index={index} />
    )
  })}

</div>
        </div>
      </div>
    </section>
    <section>
        <div className="wrapper-H3 py-10 md:pt-20 px-5">
          <div className="container">
            <div className="flex flex-col">
              <h1 className="text-center">Tours Handpicked for you</h1>
              <div className="flex flex-wrap justify-center mt-16">
                {homeTourPickup.map((items, index) => {
                  return (
                    <motion.div
                      ref={(el) => (itemRefs.current[index] = el)}
                      key={items.id}
                      className="w-[45%] lg:w-[24%] relative m-1 border h-[250px] md:h-[300px] lg:h-[440px]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: inViewStates[index] ? 1 : 0,
                        y: inViewStates[index] ? (index % 2 === 0 ? -60 : -10) : 20,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 -z-10">
                        <Image src={items.image} className="w-full h-full object-cover" alt={items.title} />
                      </div>
                      <div className="relative inset-0 -z-10 flex flex-col justify-end h-full px-3 pb-3">
                        <h3 className="text-white">{items.title}</h3>
                        <div className="flex flex-wrap gap-1 md:gap-2 text-[#B8B8B8] text-[13px] md:text-[16px] w-full">
                          <span>{items.duration}</span>
                          <span>From Rs{items.price}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="explore py-5">
        <div className="container sm:mx-auto">
          <div className="explore-content">
            <h3
              className="text-center  leading-[1.1]"
              style={{ fontSize: "clamp(15px , 5vw, 3rem)" }}
            >
              Exploring the Wonders of Global Travel: A Journey Through Cultures
              and Landscapes
            </h3>
            <div className="flex items-center gap-2 justify-center py-3 md:py-5 px-3">
              <figure>
                <img src={images.tourist} alt="" className="w-full h-auto" />
              </figure>
              <figure>
                <img src={images.tourist1} alt="" className="w-full h-auto" />
              </figure>
            </div>
            <div className="flex justify-center">
              <p className=" py-3 md:py-5 px-3 text-center lg:w-[85%] w-full ">
                Exploring new destinations can be one of life's greatest joys.
                From the bustling streets of Tokyo to the serene beaches of
                Bali, travel opens up a world of experiences. Whether you're
                savoring local cuisines, immersing yourself in different
                cultures, or simply enjoying breathtaking landscapes, each
                journey adds a unique chapter to your story. So pack your bags,
                grab your passport, and let the adventure begin!
              </p>
            </div>
            <div className="flex flex-row-reverse items-center gap-2 justify-center py-3 md:py-5 px-3 ">
              <figure>
                <img src={images.tourist2} alt="" className="w-full h-auto" />
              </figure>
              <figure>
                <img src={images.tourist3} alt="" className="w-full h-auto" />
              </figure>
            </div>
            <div className="flex justify-center">
              <p className=" py-3 md:py-5 px-3  text-center lg:w-[89%] w-full ">
                Exploring new destinations can be one of life's greatest joys.
                From the bustling streets of Tokyo to the serene beaches of
                Bali, travel opens up a world of experiences. Whether you're
                savoring local cuisines, immersing yourself in different
                cultures, or simply enjoying breathtaking landscapes, each
                journey adds a unique chapter to your story. So pack your bags,
                grab your passport, and let the adventure begin!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="plantrip">
        <div className="container mx-auto">
          <div className="plantrip-content min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center gap-10">
            <h4
              className="font-bold text-white text-center"
              style={{ fontSize: "clamp(15px , 8vw, 2rem)" }}
            >
              Let us design your trip of a lifetime
            </h4>
            <button className="text-white">Plan My Trip</button>
          </div>
        </div>
      </section>
    </>
  );
}
