import React from 'react';
import { FaTruck, FaMoneyBillWave, FaWarehouse, FaBuilding } from "react-icons/fa";

const Works = () => {
    return (
         <div className="bg-base-200 py-16">
      
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-10">
          How it Works
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-base-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <FaTruck className="text-2xl text-secondary mb-4" />
            <h3 className="font-semibold text-secondary mb-2">
              Booking Pick & Drop
            </h3>
            <p className="text-sm text-gray-500">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-base-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <FaMoneyBillWave className="text-2xl text-secondary mb-4" />
            <h3 className="font-semibold text-secondary mb-2">
              Cash On Delivery
            </h3>
            <p className="text-sm text-gray-500">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-base-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <FaWarehouse className="text-2xl text-secondary mb-4" />
            <h3 className="font-semibold text-secondary mb-2">
              Delivery Hub
            </h3>
            <p className="text-sm text-gray-500">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-base-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <FaBuilding className="text-2xl text-secondary mb-4" />
            <h3 className="font-semibold text-secondary mb-2">
              Booking SME & Corporate
            </h3>
            <p className="text-sm text-gray-500">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Works;