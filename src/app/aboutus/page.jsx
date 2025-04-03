"use client";
import React from "react";
import Banner from "../components/Banner/Banner";
import CountUp from "react-countup";
import { Icons, images } from "../api/Api";
import Card from "../components/Card/Card";
import TipsandGuide from "../components/Tips/TipsandGuide";
import { useRef, useState } from "react";
const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
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
              <p className="w-full md:w-[90%] text-center px-3 sm:px-0">
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
            <div className="flex items-center justify-center gap-5 flex-wrap py-3">
              <div className="basis-[48%] h-[80vh]">
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    className="rounded-lg"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  >
                    <source src="/assets/images/fake.mp4" type="video/mp4" />
                  </video>
                  <button
                    onClick={togglePlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              </div>
              <div
                className={`basis-[48%] flex items-start justify-between flex-col bg-[#FFFFFFCC]  bg-cover bg-center bg-no-repeat w-full  p-[4%] h-[80vh] rounded-lg`}
                style={{
                  backgroundImage: `url(${images.explore})`,
                }}
              >
                <div>
                  <span>Let’s Travel</span>
                  <h3
                    className="text-primary font-medium"
                    style={{ fontSize: "clamp(17px , 8vw, 2rem)" }}
                  >
                    Explore, Book, Soar: Your Journey Awaits!
                  </h3>
                </div>
                <button className="cursor-pointer">Plan My Trip</button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 flex-wrap py-3">
              <div
                className="basis-[48%] p-[5%]  bg-cover bg-center bg-no-repeat w-full"
                style={{
                  backgroundImage: `url(${images.premium})`,
                }}
              >
                <h4
                  className="text-primary"
                  style={{ fontSize: "clamp(17px , 8vw , 1.5rem)" }}
                >
                  Explore Premium Group Tours
                </h4>
              </div>
              <div
                className={`basis-[48%] p-[5%] bg-cover bg-center bg-no-repeat w-full`}
                style={{
                  backgroundImage: `url(${images.private})`,
                }}
              >
                <h4
                  className="text-primary"
                  style={{ fontSize: "clamp(17px , 8vw , 1.5rem)" }}
                >
                  Explore Private Group Tours
                </h4>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 my-10">
              <div className="basis-[30%]">
                <div className="flex flex-col items-center justify-start gap-5">
                  <div className="flex items-start gap-2">
                    <figure className="bg-white p-3 rounded-lg">
                      <Icons.security />
                    </figure>
                    <div className="flex flex-col gap-1">
                      <h5
                        className="text-primary"
                        style={{ fontSize: "clamp(0.9rem, 8vw, 1.3rem)" }}
                      >
                        Security Assurance
                      </h5>
                      <p className="text-gray-500 text-md ">
                        Demonstrates commitment to user data security through
                        encryption and secure payment practices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <figure className="bg-white p-3 rounded-lg">
                      <Icons.security />
                    </figure>
                    <div className="flex flex-col gap-1">
                      <h5
                        className="text-primary"
                        style={{ fontSize: "clamp(0.9rem, 8vw, 1.3rem)" }}
                      >
                        Customer Support
                      </h5>
                      <p className="text-gray-500 text-md ">
                        Demonstrates commitment to user data security through
                        encryption and secure payment practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-[30%]">
                <figure className="w-full h-full">
                  <img src={images.aboutusimg2} alt="" className="w-full h-full" />
                </figure>
              </div>
              <div className="basis-[30%]">
              <div className="flex flex-col items-center justify-start gap-5">
              <div className="flex items-start gap-2">
                    <figure className="bg-white p-3 rounded-lg">
                      <Icons.security />
                    </figure>
                    <div className="flex flex-col gap-1">
                      <h5
                        className="text-primary"
                        style={{ fontSize: "clamp(0.9rem, 8vw, 1.3rem)" }}
                      >
                        Transparent Policies
                      </h5>
                      <p className="text-gray-500 text-md ">
                        Demonstrates commitment to user data security through
                        encryption and secure payment practices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <figure className="bg-white p-3 rounded-lg">
                      <Icons.security />
                    </figure>
                    <div className="flex flex-col gap-1">
                      <h5
                        className="text-primary"
                        style={{ fontSize: "clamp(0.9rem, 8vw, 1.3rem)" }}
                      >
                       Reputable Affiliations
                      </h5>
                      <p className="text-gray-500 text-md ">
                        Demonstrates commitment to user data security through
                        encryption and secure payment practices
                      </p>
                    </div>
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
