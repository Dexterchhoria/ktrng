import React from "react";
import bgImg from "../../assets/bgImg2.jpeg";
import { AiOutlineDown } from "react-icons/ai";
import e1 from "../../assets/events/e1.png";
import e2 from "../../assets/events/e2.png";
import e3 from "../../assets/events/e3.png";
import e4 from "../../assets/events/e4.png";

const events = [
  { img: e1, link: "https://unstop.com/event1", glow: "#ffd43b" },
  { img: e2, link: "https://unstop.com/event2", glow: "#da77fe" },
  { img: e3, link: "https://unstop.com/event3", glow: "#4dabf7" },
  {
    img: e4,
    link: "https://unstop.com/event4",
    glow: "#ff8787",
  },
];

const Events = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div
        className="h-[60vh] md:h-[100vh] flex flex-col items-center justify-center text-white text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10">
          <h1 className="text-4xl text pt-12 md:pt-0 md:text-6xl font-bold drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] px-4">
            Events and Competitions
          </h1>
        </div>

        <div className="absolute hidden md:flex bottom-10  flex-col items-center animate-bounce ">
          <p className="text-lg text md:text-xl text-white">Scroll down</p>
          <AiOutlineDown className="text-3xl text-white mt-2" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Events Section */}
      <section className="bg-black text-white py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl text font-semibold mb-10">
          Upcoming Events
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transition-transform duration-300"
              onClick={() => handleClick(event.link)}
            >
              {/* 3D Floating Card */}
              <div
                className="relative w-full h-auto rounded-3xl overflow-hidden shadow-base transition-all duration-300 transform-gpu group-hover:-translate-y-3 group-hover:scale-105"
                style={{
                  boxShadow: `0px 0px 20px ${event.glow}`,
                }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-[10px] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: event.glow }}
                ></div>

                {/* Image with Desaturation Effect */}
                <img
                  src={event.img}
                  alt={`Event ${index + 1}`}
                  className="w-full rounded-3xl shadow-xl transition-all duration-300 filter grayscale-[80%] group-hover:grayscale-[5%] group-hover:saturate-110"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Competetions Section*/}
      <section className="bg-black text-white py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl text font-semibold mb-10">
          Upcoming Competitions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transition-transform duration-300"
              onClick={() => handleClick(event.link)}
            >
              <div
                className="relative w-full h-auto rounded-3xl overflow-hidden shadow-base transition-all duration-300 transform-gpu group-hover:-translate-y-3 group-hover:scale-105"
                style={{
                  boxShadow: `0px 0px 20px ${event.glow}`,
                }}
              >
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-[10px] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: event.glow }}
                ></div>

                <img
                  src={event.img}
                  alt={`Event ${index + 1}`}
                  className="w-full rounded-3xl shadow-xl transition-all duration-300 filter grayscale-[50%] group-hover:grayscale-[5%] group-hover:saturate-110"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
