import React from 'react';
import serviceImg from  '../../../assets/as/service.png';


const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    highlight: true,
  },
  {
    title: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const Service = () => {
    return (
        <div className="bg-secondary py-16 rounded-3xl">

      <div className="px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 text-center transition duration-300 ${
                service.highlight
                  ? "bg-primary text-secondary"
                  : "bg-base-100 text-secondary"
              } hover:scale-105 hover:shadow-lg`}
            >
              {/* Icon Circle */}
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-base-200">
                  <img src={serviceImg} alt="" className="w-8" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Service;