import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

import customer from "../../../assets/as/customer-top.png";

const Review = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div className="">
      <div className="text-center max-w-2xl mx-auto px-4 mb-10 md:mb-14">
        {/* Top Image */}
        <img
          src={customer}
          alt="quote"
          className="mx-auto w-30 sm:w-34 md:w-36 mb-4 md:mb-6"
        />

        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-3">
          What our customers are sayings
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      
        <Swiper
        loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"3"}
          coverflowEffect={{
            rotate: 25,
            stretch: '50%',
            depth: 240,
            modifier: 1,
            scale: 0.65,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      
    </div>
  );
};

export default Review;
