import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import event1 from "../../assets/bgImg.jpg";
import event2 from "../../assets/kaltarang.jpg";
import event3 from "../../assets/boy.jpeg";
import event4 from "../../assets/bgImg.jpg";

const images = [event1, event2, event3, event4];

const Carousel = () => {
  return (
    <div className="relative max-w-screen-lg mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
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
