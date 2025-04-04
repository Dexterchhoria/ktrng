import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation

import "swiper/css";
import "swiper/css/pagination"; // Removed navigation CSS

import event1 from "../../assets/pastEvents/pastE1.png";
import event2 from "../../assets/pastEvents/pastE2.png";
import event3 from "../../assets/pastEvents/pastE3.png";
import event4 from "../../assets/pastEvents/pastE4.png";

const images = [event1, event2, event3, event4];

const Carousel = () => {
  return (
    <div className="relative max-w-screen-lg mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]} // Removed Navigation module
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        // navigation={true} ← Removed
        // pagination={{ clickable: true, dynamicBullets: true }} ← Optional
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-80 md:h-96 lg:h-112">
              <img
                src={image}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
