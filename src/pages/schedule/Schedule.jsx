import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImg from "../../assets/bgImg2.jpeg";
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

const eventImages = {
  "Solo Dance (Round 1)": solodance,
  "Solo Singing (Round 1)": solosinging,
  "Rap (Round 1)": rap,
  "Rap (Finale)": rap,
  "Instrumental (Solo + Group)": instrumental,
  Beatboxing: beatbox,
  "Duet Dance": duetdance,
  "Group Dance": groupdance,
  "Classical Dance": classicaldance,
  "Mime Act": mimeact,
  "Nukkad Natak": nukkad,
  "Street Dance": streetdance,
  "Battle of Bands": battleofbands,
  "Stage Act": stageact,
  "Story Telling": storytelling,
  "ICP (Indian Choreo Project)": icp,
  "ICQ (Indian Choreo Quiz)": icq,
  "JAM (Just A Minute)": jam,
};

const scheduleData = {
  "Day 1": [
    {
      event: "Solo Dance (Round 1)",
      time: "9:00 AM – 12:00 PM",
      venue: "Vivekanand Sabhagar",
    },
    {
      event: "Beatboxing",
      time: "10:00 AM – 11:30 AM",
      venue: "RG Plaza",
    },
    {
      event: "Nukkad Natak",
      time: "12:00 PM – 3:00 PM",
      venue: "RG Plaza",
    },
    {
      event: "Solo Singing (Round 1)",
      time: "12:30 PM – 3:00 PM",
      venue: "Vivekanand Sabhagar",
    },
    {
      event: "Story Telling",
      time: "2:30 PM – 4:00 PM",
      venue: "Academic Block",
    },
    {
      event: "JAM (Just A Minute)",
      time: "4:30 PM – 6:30 PM",
      venue: "Academic Block",
    },
    {
      event: "Rap (Round 1)",
      time: "5:00 PM – 7:00 PM",
      venue: "Vivekanand Sabhagar",
    },
  ],
  "Day 2": [
    {
      event: "Rap (Finale)",
      time: "3:30 PM – 5:00 PM",
      venue: "Stage 3",
    },
    {
      event: "Instrumental (Solo + Group)",
      time: "12:00 PM – 3:00 PM",
      venue: "Rangshala",
    },
    {
      event: "Beatboxing",
      time: "5:00 PM – 6:00 PM",
      venue: "Rangshala",
    },
    {
      event: "Duet Dance",
      time: "10:00 AM – 12:00 PM",
      venue: "Vivekanand Sabhagar",
    },
    {
      event: "Group Dance",
      time: "12:30 PM – 3:00 PM",
      venue: "Vivekanand Sabhagar",
    },
  ],
  "Day 3": [
    {
      event: "Classical Dance",
      time: "10:00 AM – 11:30 AM",
      venue: "Vivekanand Sabhagar",
    },
    {
      event: "Mime Act",
      time: "12:00 PM – 1:30 PM",
      venue: "Vivekanand Sabhagar",
    },
    {
      event: "Nukkad Natak",
      time: "2:00 PM – 4:00 PM",
      venue: "Rangmanch (Open Air Theatre)",
    },
    {
      event: "Street Dance",
      time: "5:00 PM – 7:00 PM",
      venue: "Main Stage",
    },
    {
      event: "Battle of Bands",
      time: "10:00 AM – 12:30 PM",
      venue: "Main Stage",
    },
    {
      event: "Stage Act",
      time: "1:00 PM – 2:30 PM",
      venue: "Vivekanand Sabhagar",
    },

    {
      event: "ICP (Indian Choreo Project)",
      time: "4:30 PM – 6:00 PM",
      venue: "Main Stage",
    },
    {
      event: "ICQ (Indian Choreo Quiz)",
      time: "6:30 PM – 7:30 PM",
      venue: "Main Stage",
    },
  ],
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Day 1");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white">
      <div
        className="h-[60vh] md:h-[100vh] flex flex-col items-center justify-center text-white text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10">
          <h1 className="text-4xl text pt-12 md:pt-0 md:text-7xl font-bold drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] px-4">
            Schedule
          </h1>
        </div>

        <div className="absolute hidden md:flex bottom-10  flex-col items-center animate-bounce ">
          <p className="text-lg text md:text-xl text-white">Scroll down</p>
          <AiOutlineDown className="text-3xl text-white mt-2" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      {/* Day Selector */}
      <div className="bg-black text-white pt-32 flex flex-wrap justify-center gap-4 px-4 py-6">
        {Object.keys(scheduleData).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-full font-semibold border text-sm sm:text-base ${
              selectedDay === day
                ? "bg-yellow-400 text-black"
                : "bg-transparent border-white hover:bg-white hover:text-black"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="max-w-[1000px] mx-auto px-4 py-10 text-white">
        <h2 className="text-3xl font-bold mb-10 text-center">
          {selectedDay} Schedule
        </h2>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400 hidden md:block"></div>

          {scheduleData[selectedDay].map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="mb-12 relative w-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Desktop View */}
                <div className="hidden md:flex justify-between items-center">
                  {isLeft ? (
                    <>
                      <div className="w-[40%] flex flex-col items-end pr-4 text-right">
                        <p className="text-sm md:text-base font-bold text-yellow-400 ">
                          {item.time}
                        </p>
                        <p className="text-xs md:text-base text-gray-400 mb-1">
                          {item.venue}
                        </p>
                        {eventImages[item.event] && (
                          <img
                            src={eventImages[item.event]}
                            alt={item.event}
                            className="max-w-[280px] rounded-lg border border-white"
                          />
                        )}
                      </div>
                      <div className="w-[20%] relative flex flex-col items-center text-center">
                        <div className="w-5 h-5 bg-yellow-400 rounded-full shadow-lg z-10"></div>
                        <p className="absolute top-1/2 -translate-y-1/2 left-full ml-2 text-base md:text-xl font-semibold whitespace-nowrap z-20">
                          {item.event}
                        </p>
                      </div>

                      <div className="w-[40%]"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-[40%]"></div>
                      <div className="w-[20%] relative flex flex-col items-center text-center">
                        <div className="w-5 h-5 bg-yellow-400 rounded-full shadow-lg z-10"></div>
                        <p className="absolute top-1/2 -translate-y-1/2 right-full mr-2 text-base md:text-xl font-semibold whitespace-nowrap z-20">
                          {item.event}
                        </p>
                      </div>
                      <div className="w-[40%] flex flex-col items-start pl-4 text-left">
                        <p className="text-sm md:text-base font-bold text-yellow-400 ">
                          {item.time}
                        </p>
                        <p className="text-xs md:text-base text-gray-400 mb-1">
                          {item.venue}
                        </p>
                        {eventImages[item.event] && (
                          <img
                            src={eventImages[item.event]}
                            alt={item.event}
                            className="max-w-[280px] rounded-lg border border-white"
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile View */}

                <div className="flex md:hidden items-start mb-10">
                  {/* Dot only */}
                  <div className="w-5 h-5 bg-yellow-400 rounded-full shadow-lg mr-4 mt-1"></div>

                  {/* Right Content */}
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">{item.event}</p>
                    <p className="text-sm text-yellow-400 font-bold">
                      {item.time}
                    </p>
                    <p className="text-xs text-gray-400">{item.venue}</p>
                    {eventImages[item.event] && (
                      <img
                        src={eventImages[item.event]}
                        alt={item.event}
                        className="w-full max-w-[300px] rounded-lg border border-white"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
