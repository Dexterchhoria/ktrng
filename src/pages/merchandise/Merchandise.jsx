import React from "react";
import bgImg from "../../assets/bgImg2.jpeg";
import merchImg from "../../assets/merch.png";
import { AiOutlineDown } from "react-icons/ai";

const Merchandise = () => {
  return (
    <div>
      <div
        className="h-[60vh] md:h-[100vh] flex flex-col items-center justify-center text-white text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10">
          <h1 className="text-4xl text pt-12 md:pt-0 md:text-6xl lg:text-8xl font-bold drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] px-4">
            Merchandise
          </h1>
        </div>

        <div className="absolute hidden md:flex bottom-10  flex-col items-center animate-bounce ">
          <p className="text-lg text md:text-xl text-white">Scroll down</p>
          <AiOutlineDown className="text-3xl text-white mt-2" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <div className="bg-black py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto bg-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-14 p-8 md:p-12">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={merchImg}
              alt="Merchandise"
              className="w-full h-auto max-w-[500px] rounded-2xl border border-white/20 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Merchandise</h2>
            <ul className="text-lg md:text-xl space-y-3 mb-8">
              <li>✅ 100% Pure Cotton</li>
              <li>✅ 200 GSM</li>
              <li>✅ Bio Washed</li>
              <li>✅ Regular Fit</li>
              <li>✅ Lifetime Print Guaranteed</li>
            </ul>
            <button className="bg-[#d6336c] text-white px-10 max-w-[300px] py-4 rounded-full text-lg font-semibold hover:bg-[#a61e4d] hover:scale-105 transition-all duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
