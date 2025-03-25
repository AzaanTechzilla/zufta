import Banner from "./components/Banner/Banner";
import { images } from "./api/Api";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="third-sec bg-[#F0F0E5] ">
        <div className="container mx-auto py-10">
          <div className="third-sec-content flex md:flex-row flex-col flex-wrap justify-center items-center">
            <div className=" basis-[100%] md:basis-1/2 px-3">
              <figure
                className=" h-auto mb-4"
                style={{ width: "clamp(70px , 13vw, 200px)" }}
              >
                <img src={images.comma} alt="" className="w-full h-auto" />
              </figure>
              <p
                className="text-[#525252] mb-10"
                style={{ fontSize: "clamp(0.5rem, 8vw, 0.9rem)" }}
              >
                {" "}
                Exploring new destinations can be one of life's greatest joys.
                From the bustling streets of Tokyo to the serene beaches of
                Bali, travel opens up a world of experiences. Whether you're
                savoring local cuisines, immersing yourself in different
                cultures, or simply enjoying breathtaking landscapes, each
                journey adds a unique chapter to your story. So pack your bags,
                grab your passport, and let the adventure begin!
              </p>
              <p>- A local from Azad Kashmir.</p>
            </div>
            <div className="basis-[100%] md:basis-1/2">
              <figure className="w-full h-auto">
                <img
                  src={images.homethirdsec}
                  alt=""
                  className="w-full h-auto"
                />
              </figure>
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
        
              <h4 className="font-bold text-white text-center" style={{fontSize: "clamp(15px , 8vw, 2rem)"}}>Let us design your trip of a lifetime</h4>
              <button className="text-white">Plan My Trip</button>
           
          </div>
        </div>
      </section>
    </>
  );
}
