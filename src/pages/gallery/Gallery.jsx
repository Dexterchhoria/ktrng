import React from "react";
import bgImg from "../../assets/bgImg2.jpeg";
import { AiOutlineDown } from "react-icons/ai";
import gallery1 from "../../assets/1.png";
import gallery2 from "../../assets/2.png";
import gallery3 from "../../assets/3.png";
import gallery4 from "../../assets/4.png";
import gallery5 from "../../assets/5.png";
import gallery6 from "../../assets/6.png";
import gallery7 from "../../assets/7.png";
import gallery9 from "../../assets/11.png";
import gallery10 from "../../assets/11.png";
import gallery11 from "../../assets/11.png";
import galleryMain from "../../assets/8.png";
import m1 from "../../assets/gallery/m1.png";
import m2 from "../../assets/gallery/m2.png";
import m3 from "../../assets/gallery/m3.png";
import s1 from "../../assets/gallery/s1.png";
import s2 from "../../assets/gallery/s2.png";
import s3 from "../../assets/gallery/s3.png";
import s4 from "../../assets/gallery/s4.png";
import s5 from "../../assets/gallery/s5.png";
import s6 from "../../assets/gallery/s6.png";
import r11 from "../../assets/gallery/r11.png";
import r12 from "../../assets/gallery/r12.png";
import r13 from "../../assets/gallery/r13.png";
import r21 from "../../assets/gallery/r21.png";
import r22 from "../../assets/gallery/r22.png";
import r23 from "../../assets/gallery/r23.png";
import r31 from "../../assets/gallery/r31.png";
import r32 from "../../assets/gallery/r32.png";
import r33 from "../../assets/gallery/r33.png";
const Gallery = () => {
  return (
    <div>
      <div
        className="h-[100vh] flex flex-col text items-center justify-center text-white text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Title */}
        <div className="relative inline-block text-center">
          <h1 className="text-5xl md:text-8xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] px-4 relative z-10">
            Gallery
          </h1>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
          <p className="text-lg md:text-xl text-white">Scroll down</p>
          <AiOutlineDown className="text-3xl text-white mt-2" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
      </div>
      <section className="bg-black text-white py-16 px-6 md:px-16 text-center">
        <div className="grid grid-cols-4 gap-4 mx-auto max-w-6xl mb-4">
          <div className="col-span-2 h-[150px] group overflow-hidden rounded-lg">
            <img
              src={gallery1}
              alt="Gallery 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[150px] group overflow-hidden rounded-lg">
            <img
              src={gallery2}
              alt="Gallery 2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[150px] group overflow-hidden rounded-lg">
            <img
              src={gallery10}
              alt="Gallery 3"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="col-span-1 h-[250px] group overflow-hidden rounded-lg">
            <img
              src={s1}
              alt="Gallery 4"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-2 h-[250px] group overflow-hidden rounded-lg">
            <img
              src={m2}
              alt="Main Gallery"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[250px] group overflow-hidden rounded-lg">
            <img
              src={s2}
              alt="Gallery 5"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={gallery6}
              alt="Gallery 6"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={gallery7}
              alt="Gallery 7"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={gallery2}
              alt="Gallery 8"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={gallery9}
              alt="Gallery 9"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mx-auto max-w-6xl mb-4">
          <div className="col-span-2 h-[150px] group overflow-hidden rounded-lg">
            <img
              src={r11}
              alt="Gallery 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[150px] group overflow-hidden rounded-lg">
            <img
              src={r12}
              alt="Gallery 2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[150px] group overflow-hidden rounded-lg">
            <img
              src={r13}
              alt="Gallery 3"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="col-span-1 h-[250px] group overflow-hidden rounded-lg">
            <img
              src={s3}
              alt="Gallery 4"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-2 h-[250px] group overflow-hidden rounded-lg">
            <img
              src={m1}
              alt="Main Gallery"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[250px] group overflow-hidden rounded-lg">
            <img
              src={s4}
              alt="Gallery 5"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={r21}
              alt="Gallery 6"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={r22}
              alt="Gallery 7"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={r23}
              alt="Gallery 8"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={gallery6}
              alt="Gallery 9"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mx-auto max-w-6xl mb-4">
          <div className="col-span-2 h-[150px] group overflow-hidden rounded-lg">
            <img
              src={gallery1}
              alt="Gallery 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[150px] group overflow-hidden rounded-lg">
            <img
              src={gallery2}
              alt="Gallery 2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[150px] group overflow-hidden rounded-lg">
            <img
              src={gallery10}
              alt="Gallery 3"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="col-span-1 h-[250px] group overflow-hidden rounded-lg">
            <img
              src={s5}
              alt="Gallery 4"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-2 h-[250px] group overflow-hidden rounded-lg">
            <img
              src={m3}
              alt="Main Gallery"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[250px] group overflow-hidden rounded-lg">
            <img
              src={s6}
              alt="Gallery 5"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={r31}
              alt="Gallery 6"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={r32}
              alt="Gallery 7"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={r33}
              alt="Gallery 8"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
            <img
              src={gallery9}
              alt="Gallery 9"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
