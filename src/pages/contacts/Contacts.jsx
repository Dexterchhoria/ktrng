import React from "react";
import bgImg from "../../assets/bgImg2.jpeg";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import c1 from "../../assets/contacts/c1.jpeg";
import { FaXTwitter } from "react-icons/fa6";
import niharika from "../../assets/contacts/niharika.jpg";
import utsav from "../../assets/contacts/utsav.png";
import anmol from "../../assets/contacts/anmol.jpg";
import chh from "../../assets/contacts/chh.jpg";
import yv from "../../assets/contacts/yv.jpg";
import sneha from "../../assets/contacts/sneha.jpg";
import { AiOutlineDown } from "react-icons/ai";

const teams = [
  {
    title: "Coordinator",
    members: [
      {
        name: "Niharika Pant",
        role: "Coordinator",
        pH: "+91 8287911341",
        img: niharika,
        linkedin: "https://www.linkedin.com/in/niharika-pant-55b1bb274",
      },
      {
        name: "Utsav Shingala",
        role: "Coordinator",
        pH: "+91 8980201569",
        img: utsav,
        linkedin: "https://www.linkedin.com/in/utsav-shingala-7924121ab",
      },
    ],
  },
  {
    title: "Technical Team",
    members: [
      {
        name: "Aakarsh Verma",
        role: "Technical Head",
        pH: "+ 91 9305964911",
        img: c1,
        linkedin: "https://www.linkedin.com/in/aakarsh-verma",
        x: "https://x.com/AakarshVer83770",
        github: "https://github.com/aakarsh-verma",
      },
      {
        name: "Siddharth Chhoria",
        role: "Technical Head",

        img: chh,
        linkedin:
          "https://www.linkedin.com/in/siddharthchhoria/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Yash Verma",
        role: "Technical Head",
        img: yv,
        linkedin: "https://www.linkedin.com/in/yash-verma-32535a310",
      },
    ],
  },
  {
    title: "Hospitality Team",
    members: [
      {
        name: "Anmol Shrivastava",
        role: "Hospitality Head",
        img: anmol,
        linkedin: "https://www.linkedin.com/in/Anmol-Shrivastava80/",
        instagram: "https://instagram.com/anmol.shrivastava.89",
      },
    ],
  },
  {
    title: "Sponsorship Team",
    members: [
      {
        name: "Akshat",
        role: "Sponsorship Head",
        img: "",
        linkedin: "https://www.linkedin.com/in/akshat-s-271434182",
      },
      {
        name: "Sneha Pal",
        role: "Sponsorship Head",
        img: sneha,
        linkedin: "https://www.linkedin.com/in/sneha-pal-37a518257",
      },
      {
        name: "Pratyush Tiwari",
        role: "Sponsorship Head",
        img: "",
        linkedin: "https://www.linkedin.com/in/ipratyushtiwari",
      },
    ],
  },
  {
    title: "Editorial Team",
    members: [
      {
        name: "Alekhya",
        role: "Editorial Head",
        img: "",
        linkedin: "https://www.linkedin.com/in/alekhya-gudibandla-3571b5256",
      },
    ],
  },
  {
    title: "FMC Team",
    members: [
      {
        name: "Runav Agrawal",
        role: "FMC Head",
        img: "",
        linkedin: "https://www.linkedin.com/in/runav-agrawal-648b29280",
      },
    ],
  },
  {
    title: "Event Team",
    members: [
      {
        name: "Kapil Pradhan",
        role: "Event Head",
        img: "",
        linkedin: "https://www.linkedin.com/in/kapil-pradhan-310503301",
        pH: "6367475408",
      },
    ],
  },
  {
    title: "Drama Team",
    members: [
      {
        name: "Devansh Awasthi",
        role: "Drama Head",
        img: "",
        linkedin: "https://www.linkedin.com/in/devansh-awasthi-a828102b6",
        pH: "+91 9369063480",
      },
    ],
  },
  {
    title: "Literary Team",
    members: [
      {
        name: "Vaibhav",
        role: "Literary Head",
        img: "",
        linkedin: "https://www.linkedin.com/in/vaibhavrgipt",
      },
      {
        name: "Anshita Singh",
        role: "Literary Head",
        img: "",
        linkedin: "https://www.linkedin.com/in/anshita-singh-089522283",
      },
    ],
  },
  {
    title: "Social Media Team",
    members: [
      {
        name: "Aditya Verma",
        role: "Social Media Head",
        img: "",
        linkedin: "https://www.linkedin.com/in/aditya-verma-67babb287",
      },
    ],
  },
  {
    title: "Outreach Team",
    members: [
      {
        name: "Ayushi Dwivedi",
        role: "Outreach Head",
        img: "",
        linkedin: "https://www.linkedin.com/in/ayushi-dwivedi-0a3058286",
        pH: "+91 9451465424",
      },
    ],
  },
];

const Contacts = () => {
  return (
    <div>
      <div
        className="h-[60vh] md:h-[100vh] flex flex-col items-center justify-center text-white text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10">
          <h1 className="text-4xl text pt-12 md:pt-0 md:text-6xl lg:text-8xl font-bold drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] px-4">
            Contacts
          </h1>
        </div>

        <div className="absolute hidden md:flex bottom-10  flex-col items-center animate-bounce ">
          <p className="text-lg text md:text-xl text-white">Scroll down</p>
          <AiOutlineDown className="text-3xl text-white mt-2" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Teams Section */}
      <section className="bg-black text-white py-16 max-w-[1200px] mx-auto px-6 md:px-8">
        {teams.map((team, teamIndex) => (
          <div key={teamIndex} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
              {team.title}
            </h2>
            <div className="">
              <div className="flex-wrap w-full  flex justify-center gap-8 md:gap-10 ">
                {team.members.map((member, index) => {
                  const name = member.name || member.Name;
                  const role = member.role || member.Role;
                  const img = member.img || member.Img;
                  const phone = member.pH || member.phone || null;
                  const links = {
                    linkedin: member.linkedin || member.LinkedIn,
                    twitter: member.twitter,
                    x: member.x,
                    instagram: member.instagram,
                    github: member.github,
                  };

                  return (
                    <div
                      key={index}
                      className="relative w-70 h-85 group overflow-hidden rounded-xl shadow-lg bg-gray-800 flex items-center justify-center"
                    >
                      {img ? (
                        <>
                          <img
                            src={img}
                            alt={name}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:blur-md md:group-hover:blur-md"
                          />

                          {/* Desktop Hover Overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 text-white flex-col items-center justify-center hover:opacity-90 group-hover:flex transition-opacity duration-500 hidden md:flex">
                            {name && (
                              <h3 className="text-xl font-semibold">{name}</h3>
                            )}
                            {phone && (
                              <a
                                href={`tel:${phone}`}
                                className="mt-2 text-sm text-blue-300 font-medium px-3 py-1 bg-white/10 backdrop-blur-md rounded-md border border-blue-400/20 hover:bg-blue-400/20 hover:text-white transition-all duration-300"
                              >
                                📞 {phone}
                              </a>
                            )}
                            <div className="flex gap-4 mt-4">
                              {links.linkedin && (
                                <a
                                  href={links.linkedin}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaLinkedin className="text-blue-400 text-2xl hover:scale-110 transition-transform" />
                                </a>
                              )}
                              {(links.twitter || links.x) && (
                                <a
                                  href={links.x || links.twitter}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaXTwitter className="text-white text-2xl hover:scale-110 transition-transform" />
                                </a>
                              )}
                              {links.instagram && (
                                <a
                                  href={links.instagram}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaInstagram className="text-pink-400 text-2xl hover:scale-110 transition-transform" />
                                </a>
                              )}
                              {links.github && (
                                <a
                                  href={links.github}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaGithub className="text-gray-400 text-2xl hover:scale-110 transition-transform" />
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Mobile Always Visible Info Bar */}
                          <div className="absolute bottom-0 rounded-t-3xl border border-[#9775fa] left-0 right-0 bg-[#7048e8]/40 backdrop-blur-md px-4 py-3 flex flex-col items-center justify-center md:hidden">
                            {name && (
                              <h3 className="text-lg font-semibold text-center">
                                {name}
                              </h3>
                            )}
                            {role && (
                              <p className="text-sm text-white font-semibold mt-0.5">
                                {role}
                              </p>
                            )}
                            {phone && (
                              <a
                                href={`tel:${phone}`}
                                className="mt-1 text-sm text-white font-medium px-3 py-1 bg-white/10 rounded-md border border-blue-400/20 hover:bg-blue-400/20 hover:text-white transition-all duration-300"
                              >
                                📞 {phone}
                              </a>
                            )}
                          </div>

                          {/* Desktop Role Pill (bottom) */}
                          <div className="absolute bottom-3 left-0 right-0 text-center hidden md:block">
                            <p className="bg-[#7048e8]/40 backdrop-blur-md border border-[#d0bfff]/60 text-white text-base font-semibold px-4 py-1.5 rounded-lg shadow-inner hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group-hover:scale-105 tracking-wide">
                              {role}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center w-full h-full p-4 text-center">
                          {name && (
                            <h3 className="text-lg text-gray-100 mb-2">
                              {name}
                            </h3>
                          )}
                          {role && (
                            <p className="text-2xl font-semibold text-gray-100 mb-2">
                              {role}
                            </p>
                          )}
                          {phone && (
                            <a
                              href={`tel:${phone}`}
                              className="mt-2 text-sm text-blue-300 font-medium px-3 py-1 bg-white/10 backdrop-blur-md rounded-md border border-blue-400/20 hover:bg-blue-400/20 hover:text-white transition-all duration-300"
                            >
                              📞 {phone}
                            </a>
                          )}
                          {/* social links same here */}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Contacts;
