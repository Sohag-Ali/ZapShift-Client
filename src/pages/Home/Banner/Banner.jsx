import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import runner from "../../../assets/banner/tiny-deliveryman.png";
import deliveryMan from "../../../assets/banner/male courier with a car carrying parcels.png";
import banner2 from "../../../assets/banner/10256550_18149902 1.png";
import banner3 from "../../../assets/banner/26489167_delivery_man 1.png";
import { ArrowUpRight } from "lucide-react";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
      {/* Slide 1 */}

      <div className="bg-gradient-to-r from-white to-primary/20 rounded-3xl px-5 sm:px-8 md:px-16 py-10 md:py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 min-h-[550px] md:min-h-[620px]">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 px-2 sm:px-4 md:px-6 space-y-4 text-center md:text-left">
          {/* SMALL RUNNER IMAGE */}
          <div className="w-40 md:w-48">
            <img src={runner} alt="" />
          </div>

          {/* HEADING */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-secondary leading-snug md:leading-tight">
            We Make Sure Your <br />
            <span className="text-primary">Parcel Arrives</span> On Time <br />–
            No Fuss.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-md mx-auto md:mx-0">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle.
          </p>

          {/* BUTTON */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 md:gap-4 pt-2">
            <button className="btn btn-primary rounded-full px-6 w-full sm:w-auto">
              Track Your Parcel
            </button>

            <div className="flex items-center gap-2">
              <span className="bg-black text-white rounded-full p-2">
                <ArrowUpRight size={14} />
              </span>

              <button className="btn btn-outline rounded-full px-5">
                Be a Rider
              </button>
            </div>
          </div>

          {/* DASH */}
          <div className="flex justify-center md:justify-start gap-2 pt-3">
            <span className="w-6 md:w-8 h-[3px] bg-primary rounded-full"></span>
            <span className="w-6 md:w-8 h-[3px] bg-gray-300 rounded-full"></span>
            <span className="w-6 md:w-8 h-[3px] bg-gray-300 rounded-full"></span>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={deliveryMan}
            alt=""
            className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-[480px] object-contain"
          />
        </div>
      </div>

      {/* Slide 2 */}

      <div className=" bg-gradient-to-r from-white to-primary/20 rounded-3xl px-5 sm:px-8 md:px-16 py-10 md:py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 min-h-[550px] md:min-h-[620px]">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 px-2 sm:px-4 md:px-6 space-y-4 text-center md:text-left">
          {/* SMALL RUNNER IMAGE */}
          <div className="w-40 md:w-48">
            <img src={runner} alt="" />
          </div>

          {/* HEADING */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-secondary leading-snug md:leading-tight">
            Delivery in <span className="text-primary">30</span> <br />
            <span className="text-primary">Minutes</span> at your <br />–
            doorstep
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-md mx-auto md:mx-0">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 md:gap-4 pt-2">
            <button className="btn btn-primary rounded-full px-6 w-full sm:w-auto">
              Track Your Parcel
            </button>
            <div className="flex items-center gap-2">
              <span className="bg-black text-white rounded-full p-2">
                <ArrowUpRight size={14} />
              </span>

              <button className="btn btn-outline rounded-full px-5">
                Be a Rider
              </button>
            </div>
          </div>

          {/* DASH DESIGN */}
          <div className="flex justify-center md:justify-start gap-2 pt-3">
            <span className="w-6 md:w-8 h-[3px] bg-gray-300 rounded-full"></span>
            <span className="w-6 md:w-8 h-[3px] bg-primary rounded-full"></span>
            <span className="w-6 md:w-8 h-[3px] bg-gray-300 rounded-full"></span>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={banner2}
            alt="delivery"
            className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-[480px] object-contain"
          />
        </div>
      </div>

      {/* Slide 3 */}

      <div className=" bg-gradient-to-r from-white to-primary/20 rounded-3xl px-5 sm:px-8 md:px-16 py-10 md:py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 min-h-[550px] md:min-h-[620px]">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 px-2 sm:px-4 md:px-6 space-y-4 text-center md:text-left">
          {/* SMALL RUNNER IMAGE */}
          <div className="w-40 md:w-48">
            <img src={runner} alt="" />
          </div>

          {/* HEADING */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-secondary leading-snug md:leading-tight">
            Fastest <br />
            <span className="text-primary">Delivery</span> & Easy
            <br />–<span className="text-primary"> Pickup</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-md mx-auto md:mx-0">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 md:gap-4 pt-2">
            <button className="btn btn-primary rounded-full px-6 w-full sm:w-auto">
              Track Your Parcel
            </button>
            <div className="flex items-center gap-2">
              <span className="bg-black text-white rounded-full p-2">
                <ArrowUpRight size={14} />
              </span>

              <button className="btn btn-outline rounded-full px-5">
                Be a Rider
              </button>
            </div>
          </div>

          {/* DASH DESIGN */}
          <div className="flex justify-center md:justify-start gap-2 pt-3">
            <span className="w-6 md:w-8 h-[3px] bg-gray-300 rounded-full"></span>
            <span className="w-6 md:w-8 h-[3px] bg-gray-300 rounded-full"></span>
            <span className="w-6 md:w-8 h-[3px] bg-primary rounded-full"></span>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={banner3}
            alt="delivery"
            className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-[480px] object-contain"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
