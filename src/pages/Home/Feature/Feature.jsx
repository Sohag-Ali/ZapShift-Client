import React from 'react';
import tracking from "../../../assets/as/live-tracking.png";
import delivery from "../../../assets/as/safe-delivery.png";


const features = [
  {
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    img: tracking,
  },
  {
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: delivery,
  },
  {
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: delivery,
  },
];

const Feature = () => {
    return (
        <div className="py-12 md:py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4 md:space-y-6">

        {features.map((item, index) => (
          <div
            key={index}
            className="
              bg-base-200 
              rounded-2xl 
              p-5 sm:p-6 md:p-8
              flex flex-col md:flex-row 
              items-center 
              gap-5 md:gap-10
              hover:shadow-md transition duration-300
            "
          >

            {/* Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-28 sm:w-36 md:w-48 lg:w-52 
                  object-contain
                "
              />
            </div>

            {/* Divider (only desktop) */}
            <div className="hidden md:block h-24 border-l border-dashed border-gray-300"></div>

            {/* Content */}
            <div className="w-full md:w-2/3 text-center md:text-left">

              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Feature;