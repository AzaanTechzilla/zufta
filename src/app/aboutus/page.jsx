"use client";
import React from "react";
import Banner from "../components/Banner/Banner";
import CountUp from "react-countup";
import { Icons, images } from "../api/Api";
import Card from "../components/Card/Card";
import TipsandGuide from "../components/Tips/TipsandGuide";
const About = () => {
  return (
    <>
      <Banner />
      <section className="aboutzufta py-5 bg-[#F8F8F8]">
        <div className="container mx-auto">
          <div className="aboutzufta-content">
            <div className="flex flex-col items-center justify-center gap-2">
              <h2
                className="text-bold text-center"
                style={{ fontSize: "clamp(0.9rem, 7vw, 2rem)" }}
              >
                About Zufta Travel & Tours
              </h2>
              <p className="w-full md:w-[90%] text-center">
                Ex optio sequi et quos praesentium in nostrum labore nam rerum
                iusto aut magni nesciunt? Quo quidem neque iste expedita est
                dolor similique ut quasi maxime ut deserunt autem At praesentium
                voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis
                aut provident aliquam. Aut aspernatur consequuntur eum quaerat
                distinctio ut inventore aliquid et quasi alias ut rerum suscipit
                et nihil deleniti. Ex optio sequi et quos praesentium in nostrum
                labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste
                expedita est dolor similique ut quasi maxime ut deserunt autem
                At praesentium voluptatem aut libero nisi. Et eligendi sint ab
                cumque veritatis aut provident aliquam. Aut aspernatur
                consequuntur eum quaerat distinctio ut inventore aliquid et
                quasi alias ut rerum suscipit et nihil deleniti.
              </p>
            </div>
            <div className="bg-[#F0F0E5] p-4 aboutzufta-content-2 flex items-center justify-center gap-5 mt-5 w-full">
              <div className="basis-1/2 ">
                <div className="flex items-center justify-evenly gap-2 ">
                  <div className="flex flex-col items-center ">
                    <span
                      className="text-primary"
                      style={{ fontSize: "clamp(1rem, 8vw, 3rem)" }}
                    >
                      <CountUp start={0} end={160} />
                    </span>
                    <span className="text-gray-500 text-xs">Happy Clients</span>
                  </div>
                  <div className="flex flex-col items-center ">
                    <span
                      className="text-primary"
                      style={{ fontSize: "clamp(1rem, 8vw, 3rem)" }}
                    >
                      +<CountUp start={0} end={45} />k
                    </span>
                    <span className="text-gray-500 text-xs">Destinations</span>
                  </div>
                </div>
                <div className="flex items-center justify-evenly gap-2 my-5">
                  <div className="flex flex-col items-center ">
                    <span
                      className="text-primary"
                      style={{ fontSize: "clamp(1rem, 8vw, 3rem)" }}
                    >
                      +<CountUp start={0} end={49} />k
                    </span>
                    <span className="text-gray-500 text-xs">Global Search</span>
                  </div>
                  <div className="flex flex-col items-center ">
                    <span
                      className="text-primary"
                      style={{ fontSize: "clamp(1rem, 8vw, 3rem)" }}
                    >
                      +<CountUp start={0} end={26} />k
                    </span>
                    <span className="text-gray-500 text-xs">Destinations</span>
                  </div>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="flex items-center justify-center gap-3">
                  <figure className="">
                    <img
                      src={images.payment}
                      alt="payment"
                      className="w-full h-auto"
                    />
                  </figure>
                  <div className="flex flex-col gap-3">
                    <figure className="">
                      <img
                        src={images.payment2}
                        alt="payment"
                        className="w-full h-auto"
                      />
                    </figure>
                    <figure className="">
                      <img
                        src={images.payment3}
                        alt="payment"
                        className="w-full h-auto"
                      />
                    </figure>
                  </div>
                  <div className="flex flex-col gap-3">
                    <figure className="">
                      <img
                        src={images.payment4}
                        alt="payment"
                        className="w-full h-auto"
                      />
                    </figure>
                    <figure className="">
                      <img
                        src={images.payment5}
                        alt="payment"
                        className="w-full h-auto"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   <TipsandGuide />
    </>
  );
};

export default About;
