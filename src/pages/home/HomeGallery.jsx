import React from "react";
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

const HomeGallery = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16 text-center">
      <p className="text-center text text-xl italic font-bold text-gray-300 mb-8">
        GALLERY
      </p>

      <div className="grid grid-cols-4 gap-4 mx-auto max-w-6xl">
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
            src={gallery6}
            alt="Gallery 4"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="col-span-2 h-[250px] group overflow-hidden rounded-lg">
          <img
            src={galleryMain}
            alt="Main Gallery"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="col-span-1 h-[250px] group overflow-hidden rounded-lg">
          <img
            src={gallery3}
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

      <div className="flex justify-center mt-8 gap-6">
        <button className="border-2 text text-base border-white px-6 py-2 md:text-lg font-semibold hover:bg-white hover:text-black transition">
          VIEW MORE
        </button>
        <button className="border-2 text text-base border-white px-6 py-2 md:text-lg font-semibold hover:bg-white hover:text-black transition">
          BROCHURE
        </button>
      </div>
    </section>
  );
};

export default HomeGallery;
