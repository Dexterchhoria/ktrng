import React from "react";
import bgImg from "../../assets/bgImg2.jpeg";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import c1 from "../../assets/contacts/c1.jpeg";
import { AiOutlineDown } from "react-icons/ai";

// Team Data
const teams = [
  {
    title: "Editorial Team",
    members: [
      {
        Name: "Alekhya",
        Role: "Editorial Head",
        Img: "",
        LinkedIn:
          "https://www.linkedin.com/in/alekhya-gudibandla-3571b5256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pH: "",
      },
    ],
  },
  {
    title: "Technical Team",
    members: [
      {
        name: "Aakarsh Verma",
        role: "Frontend Developer",
        img: c1,
        linkedin: "https://www.linkedin.com/in/aakarsh-verma",
      },
      {
        Name: "Yash Verma",
        Role: "Technical Head",
        img: "",
        LinkedIn:
          "https://www.linkedin.com/in/yash-verma-32535a310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pH: "9511459189",
      },
    ],
  },
  {
    title: "Sponsorship Team",
    members: [
      {
        Name: "Akshat",
        Role: "Sponsorship Head",
        Img: "",
        LinkedIn:
          "https://www.linkedin.com/in/akshat-s-271434182?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pH: "",
      },
      {
        Name: "Pratyush Tiwari",
        Role: "Sponsorship Head",
        Img: "",
        LinkedIn:
          "https://www.linkedin.com/in/ipratyushtiwari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pH: "",
      },
    ],
  },
  {
    title: "Event Team",
    members: [
      {
        name: "Aakarsh Verma",
        role: "Frontend Developer",
        img: c1,
        linkedin: "https://www.linkedin.com/in/aakarsh-verma",
        twitter: "https://twitter.com/aakarsh_verma",
        instagram: "https://instagram.com/aakarsh_verma",
        github: "https://github.com/aakarsh-verma",
      },
    ],
  },
  {
    title: "Literary Team",
    members: [
      {
        Name: "Vaibhav",
        Role: "Literary Head",
        Img: "",
        LinkedIn:
          "https://www.linkedin.com/in/vaibhavrgipt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pH: "9956316310",
      },
      {
        Name: "Anshita Singh",
        Role: "Literary Head",
        Img: "",
        LinkedIn:
          "https://www.linkedin.com/in/anshita-singh-089522283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pH: "8756795382",
      },
    ],
  },
  {
    title: "Social Media Team",
    members: [
      {
        Name: "Aditya Verma",
        Role: "Social Media Head",
        Img: "",
        LinkedIn:
          "https://www.linkedin.com/in/aditya-verma-67babb287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pH: "9007970257",
      },
    ],
  },
  {
    title: "Outreach Team",
    members: [
      {
        Name: "Ayushi Dwivedi",
        Role: "Outreach Head",
        Img: "",
        LinkedIn:
          "https://www.linkedin.com/in/ayushi-dwivedi-0a3058286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pH: "9451465424",
      },
    ],
  },
];

const Contacts = () => {
  return (
    <div>
      <div
        className="h-screen flex text flex-col items-center justify-center text-white text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text  inline-block text-center">
          <h1 className="text-4xl md:text-8xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] px-4 relative z-10">
            Coming Soon...
          </h1>
        </div>
      </div>
    </div>
    // <div>
    //   {/* Hero Section */}
    //   <div
    //     className="h-[60vh] md:h-[100vh] flex flex-col items-center justify-center text-white text-center relative bg-cover bg-center"
    //     style={{ backgroundImage: `url(${bgImg})` }}
    //   >
    //     <div className="absolute inset-0 bg-black/30"></div>

    //     <div className="relative pt-12 md:pt-0 z-10">
    //       <h1 className="text-5xl text md:text-8xl font-bold drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] px-4">
    //         Contacts
    //       </h1>
    //     </div>

    //     <div className="absolute hidden  bottom-10 md:flex flex-col items-center animate-bounce ">
    //       <p className="text-lg text md:text-xl text-white">Scroll down</p>
    //       <AiOutlineDown className="text-3xl text-white mt-2" />
    //     </div>
    //     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
    //   </div>

    //   {/* Teams Section */}
    //   <section className="bg-black text-white py-16 max-w-[1200px] mx-auto px-6 md:px-16">
    //     {teams.map((team, teamIndex) => (
    //       <div key={teamIndex} className="mb-16">
    //         <h2 className="text-3xl text md:text-4xl font-semibold text-center mb-10">
    //           {team.title}
    //         </h2>

    //         {/* Team Members Grid */}
    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
    //           {team.members.map((member, index) => (
    //             <div
    //               key={index}
    //               className="relative w-64 h-80 group overflow-hidden rounded-xl shadow-lg  "
    //             >
    //               {/* Image */}
    //               <img
    //                 src={member.img}
    //                 alt={member.name}
    //                 className="w-full h-full object-cover transition-all duration-500 group-hover:blur-md"
    //               />

    //               {/* Details */}
    //               <div className="absolute inset-0 bg-black/60 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    //                 <h3 className="text-xl font-semibold">{member.name}</h3>
    //                 <p className="text-sm text-gray-300 mb-4">{member.role}</p>
    //                 <div className="flex gap-4">
    //                   <a
    //                     href={member.linkedin}
    //                     target="_blank"
    //                     rel="noreferrer"
    //                   >
    //                     <FaLinkedin className="text-blue-400 text-2xl hover:scale-110 transition-transform" />
    //                   </a>
    //                   <a href={member.twitter} target="_blank" rel="noreferrer">
    //                     <FaTwitter className="text-blue-300 text-2xl hover:scale-110 transition-transform" />
    //                   </a>
    //                   <a
    //                     href={member.instagram}
    //                     target="_blank"
    //                     rel="noreferrer"
    //                   >
    //                     <FaInstagram className="text-pink-400 text-2xl hover:scale-110 transition-transform" />
    //                   </a>
    //                   <a href={member.github} target="_blank" rel="noreferrer">
    //                     <FaGithub className="text-gray-400 text-2xl hover:scale-110 transition-transform" />
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </section>
    // </div>
  );
};

export default Contacts;
