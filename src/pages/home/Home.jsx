import React from "react";
import bgImg from "../../assets/bgImg.jpg";
import aboutImg from "../../assets/boy.jpeg";
import Carousel from "./Carousel";
import HomeGallery from "./HomeGallery";
import JoinCommunity from "./JoinCommunity";
import Faqs from "./Faqs";
import "../../app.css"
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-screen flex flex-col items-center justify-center text-white text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative inline-block text-center">
          <span className="absolute -top-6  drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text left-8 text-lg md:text-2xl font-semibold">
            10th Edition
          </span>

          <h1 className="text-5xl text md:text-8xl font-bold  drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] px-4 relative z-10">
            KALTARANG'25
          </h1>

          <span className="absolute text -bottom-10 text-osake  drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]  right-6 text-xl md:text-3xl font-semibold">
            A Voxel Verse
          </span>
        </div>
        <div className="mt-20 ">
          <h3
            className="text-xl text md:text-2xl font-bold  animate-pulse 
                 drop-shadow-[0_0_25px_rgba(255,255,255,0.95)] 
                 md:drop-shadow-[0_0_35px_rgba(255,255,255,1)] px-4 relative z-10"
          >
            18th April - 20th April
          </h3>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      <section className="bg-black text-white py-16 px-6 lg:px-16 flex flex-col lg:flex-row items-center relative">
        <div className="lg:w-1/2 flex justify-center relative">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
          <h2 className="text-4xl font-bold text  drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text-center mb-4">
            About KALTARANG'25
          </h2>
          <p className="text-gray-300 text">
            Kaltarang is RGIPT's annual cultural fest, renowned for being a
            dynamic and immersive celebration of art, culture, and talent. Since
            its inception, Kaltarang has grown into a prestigious platform where
            creativity meets competition. The 10th edition, Kaltarang'25,
            promises to be the grandest yet, bringing together students from
            across the country to experience a world where fantasy and tradition
            intertwine. With a diverse array of competitions, performances, and
            workshops, Kaltarang celebrates the spirit of youth and innovation.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
      </section>

      <section className="bg-black text-white py-16 px-6 md:px-16">
        <h2 className="text-4xl text font-bold  drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text-center mb-8">
          DISCOVER MORE
        </h2>
        <p className="text-center text-xl text italic text-gray-300 mb-8">
          Past Events
        </p>
        <Carousel />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
      </section>
      <HomeGallery />
      <JoinCommunity />
      <Faqs />
    </>
  );
};

export default Home;
