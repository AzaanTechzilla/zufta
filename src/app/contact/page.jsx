"use client";
import React, { useState } from "react";
import Banner from "../components/Banner/Banner";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-700  hover:bg-gray-200 transition-all"
          >
            {item.title}
            <span>{openIndex === index ? "" : ""}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white text-gray-600">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const Contact = () => {
  const items = [
    {
      title: "How do I make a reservation on your website",
      content:
        "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.",
    },
    {
      title: "How do I make a reservation on your website",
      content:
        "It applies classNamees to elements for styling instead of writing custom CSS.",
    },
    {
      title: "How do I make a reservation on your website",
      content: "Yes! Tailwind provides responsive classNamees out of the box.",
    },
    {
      title: "How do I make a reservation on your website",
      content: "Yes! Tailwind provides responsive classNamees out of the box.",
    },
    {
      title: "How do I make a reservation on your website",
      content: "Yes! Tailwind provides responsive classNamees out of the box.",
    },
  ];

  return (
    <>
    <Banner />
      <section className="contact">
        <div className="container sm:mx-auto px-3 sm:px-0">
          <div className="contact-detail py-10 px-3 flex flex-col md:flex-row  md:items-center  gap-10">
            {/* Left Side: Contact Form */}
            <div className="basis-[100%] md:basis-[50%]">
              <h2
                className="py-2"
                style={{ fontSize: "clamp(0.9rem , 8vw, 2rem)" }}
              >
                Hello! &#x1F60A; &#x1F64C;{" "}
              </h2>
              <p className="py-2">
                You need to come at least once in your life
              </p>
              <form action="" className=" w-full flex flex-col gap-3">
                <div className=" w-full flex items-center justify-between gap-2">
                  <div className="relative min-w-[50%]">
                    <input className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#1A2B48] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                    <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-[#1A2B48] text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-[#1A2B48] peer-focus:scale-90">
                      First Name *
                    </label>
                  </div>
                  <div className="relative min-w-[50%]">
                    <input className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#1A2B48] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                    <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-[#1A2B48] text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-[#1A2B48] peer-focus:scale-90">
                      Last Name *
                    </label>
                  </div>
                </div>
                <div className=" w-full flex items-center justify-between gap-2">
                  <div className="relative min-w-[50%]">
                    <input className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#1A2B48] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                    <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-[#1A2B48] text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-[#1A2B48] peer-focus:scale-90">
                      Email address *
                    </label>
                  </div>
                  <div className="relative min-w-[50%]">
                    <input className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#1A2B48] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                    <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-[#1A2B48] text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-[#1A2B48] peer-focus:scale-90">
                      Subject *
                    </label>
                  </div>
                </div>
                <textarea
                  placeholder="Tell us more about what you’re planning"
                  rows="5"
                  className="w-full text-[#1A2B48] placeholder:text-[#1A2B48] p-2 border border-[#1A2B48] rounded resize-none focus:border-[#1A2B48]"
                ></textarea>
                <button className="btn rounded-full py-2">
                  Send a request
                </button>
              </form>
            </div>

            {/* Right Side: Accordion */}
            <div className="basis-[100%] md:basis-[50%]">
              <Accordion items={items} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
