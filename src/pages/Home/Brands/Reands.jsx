import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amzon from "../../../assets/brands/amazon.png";
import amzonVactor from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starPeople from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandsLogos = [
  amzon,
  amzonVactor,
  casio,
  moonstar,
  randstad,
  star,
  starPeople,
];

const Reands = () => {
  return (
 


 <div className=" py-10 md:py-14 border-t border-dashed border-gray-300">

      {/* Heading */}
      <h2 className="text-center text-secondary font-semibold text-sm md:text-base mb-6 md:mb-10 px-4">
        We've helped thousands of sales teams
      </h2>

      {/* Slider */}
         <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      {brandsLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img
            src={logo}
            alt={`Brand ${index + 1}`}
            className="w-32 h-auto mx-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    </div>
  );
};

export default Reands;
