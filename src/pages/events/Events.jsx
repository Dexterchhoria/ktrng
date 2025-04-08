import React from "react";
import bgImg from "../../assets/bgImg2.jpeg";
import { AiOutlineDown } from "react-icons/ai";
import battleofbands from "../../assets/events/battleofbands(o).png";
import classicaldance from "../../assets/events/classicaldance(r).png";
import streetdance from "../../assets/events/streetdance(b).png";
import beatbox from "../../assets/events/beatbox(o).png";
import duetdance from "../../assets/events/duetdance(b).png";
import groupdance from "../../assets/events/groupdance(g).png";
import instrumental from "../../assets/events/instrumental(r).png";
import mimeact from "../../assets/events/mimeact(b).png";
import nukkad from "../../assets/events/nukkad(o).png";
import rap from "../../assets/events/rap(r).png";
import solodance from "../../assets/events/solodance(p).png";
import solosinging from "../../assets/events/solosinging(g).png";
import storytelling from "../../assets/events/storytelling(p).png";
import icp from "../../assets/events/icp(p).png";
import icq from "../../assets/events/icq(r).png";
import jam from "../../assets/events/JAM(b).png";
import stageact from "../../assets/events/stageact(g).png";
import debate from "../../assets/events/debate(o).png";
import fashion from "../../assets/events/fashion(o).png";
import hindiPoetry from "../../assets/events/hindiPoetry(p).png";
import poetryslam from "../../assets/events/poetryslam(g).png";
import mrandms from "../../assets/events/mrandmskaltarang(r).png";
const events = [
  {
    img: debate,
    link: "https://unstop.com/o/ILqmZ6V?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#ffa94d",
  },
  {
    img: storytelling,
    link: "https://unstop.com/o/jGic8w2?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#f783ac",
  },
  {
    img: mimeact,
    link: "https://unstop.com/o/aJm74Up?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#4dabf7",
  },
  {
    img: fashion,
    link: "https://unstop.com/o/mdEXtfu?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#ffa94d",
  },
  {
    img: solosinging,
    link: "https://unstop.com/o/lpv2uk8?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#69db7c",
  },
  {
    img: rap,
    link: "https://unstop.com/o/t2oaXmi?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#ff8787",
  },
  {
    img: nukkad,
    link: "https://unstop.com/o/q0BEkcg?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#ffa94d",
  },

  {
    img: hindiPoetry,
    link: "https://unstop.com/o/XDviPEj?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#f783ac",
  },
  {
    img: classicaldance,
    link: "https://unstop.com/o/VLb3Ike?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#ff8787",
  },

  {
    img: duetdance,
    link: "https://unstop.com/o/x0neMVW?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#4dabf7",
  },
  {
    img: groupdance,
    link: "https://unstop.com/o/I9tzU3X?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#69db7c",
  },
  {
    img: instrumental,
    link: "https://unstop.com/o/r4TRcZH?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#ff8787",
  },

  {
    img: beatbox,
    link: "https://unstop.com/o/xtdVkiU?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#ffa94d",
  },
  {
    img: poetryslam,
    link: "https://unstop.com/o/z03Zcn7?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#69db7c",
  },
  {
    img: solodance,
    link: "https://unstop.com/o/XWixFVA?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#f783ac",
  },
  {
    img: mrandms,
    link: "https://unstop.com/o/83O9ESP?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#ff8787",
  },
  {
    img: streetdance,
    link: "https://unstop.com/o/jbR4K6S?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#4dabf7",
  },
  {
    img: battleofbands,
    link: "https://unstop.com/o/cZyTpsU?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#ffa94d",
  },
  {
    img: stageact,
    link: "https://unstop.com/o/VgTjdhI?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#69db7c",
  },
  {
    img: icq,
    link: "https://unstop.com/o/0NH8Jv5?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#ff8787",
  },
  {
    img: icp,
    link: "https://unstop.com/o/XfYzi1H?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#f783ac",
  },
  {
    img: jam,
    link: "https://unstop.com/o/BIhyvDu?lb=A6l51Bb&utm_medium=Share&utm_source=shortUrl",
    glow: "#4dabf7",
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
      <section className="bg-black text-white py-16 px-10  md:px-16 text-center">
        {/* <h2 className="text-3xl md:text-4xl text font-semibold mb-10">
          Upcoming Events
        </h2> */}

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
      {/* <section className="bg-black text-white py-16 px-6 md:px-16 text-center">
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
      </section> */}
    </div>
  );
};

export default Events;
