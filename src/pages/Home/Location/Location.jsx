import React from 'react';

import boxImg from "../../../assets/as/location-merchant.png";
const Location = () => {
    return (
       <div className="py-12 md:py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="
          bg-secondary 
          rounded-3xl 
          px-6 sm:px-10 md:px-14 
          py-10 md:py-12
          flex flex-col md:flex-row 
          items-center 
          justify-between 
          gap-8 md:gap-10
        ">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center md:text-left">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
              Merchant and Customer Satisfaction <br className="hidden md:block" />
              is Our First Priority
            </h2>

            <p className="text-gray-300 text-sm sm:text-base mb-6">
              We offer the lowest delivery charge with the highest value along with 
              100% safety of your product. Pathao courier delivers your parcels in 
              every corner of Bangladesh right on time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">

              <button className="btn btn-primary rounded-full px-6 w-full sm:w-auto">
                Become a Merchant
              </button>

              <button className="btn btn-outline border-primary text-primary rounded-full px-6 w-full sm:w-auto hover:bg-primary hover:text-secondary transition">
                Earn with ZapShift Courier
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={boxImg}
              alt="box"
              className="w-48 sm:w-64 md:w-80 lg:w-96 object-contain"
            />
          </div>

        </div>

      </div>
    </div>
  );
};


export default Location;