import React from "react";
import bgImg from "../../assets/bgImg2.jpeg";
import sponsor1 from "../../assets/Ps1.jpg";
import sponsor2 from "../../assets/ps2.jpg";
import { AiOutlineDown } from "react-icons/ai";

const Sponsors = () => {
  return (
    <div>
      <div
        className="h-[60vh] md:h-[100vh] flex flex-col items-center justify-center text-white text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10">
          <h1 className="text-4xl text pt-12 md:pt-0 md:text-6xl lg:text-8xl font-bold drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] px-4">
            Sponsors
          </h1>
        </div>

        <div className="absolute hidden md:flex bottom-10  flex-col items-center animate-bounce ">
          <p className="text-lg text md:text-xl text-white">Scroll down</p>
          <AiOutlineDown className="text-3xl text-white mt-2" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="bg-black py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <div className="flex-1 flex justify-center">
            <img
              src={sponsor1}
              alt="Sponsor 1"
              className="w-full max-w-[500px] rounded-2xl border border-white/20 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={sponsor2}
              alt="Sponsor 2"
              className="w-full max-w-[500px] rounded-2xl border border-white/20 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
