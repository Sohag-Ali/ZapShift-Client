import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {

    const { userName, review: message, ratings, user_photoURL } = review;
    return (
          <div
      className="
        bg-base-200 
        rounded-2xl 
        p-5 sm:p-6 
        h-full
        flex flex-col justify-between
        transition duration-300
        hover:shadow-lg
      "
    >
      {/* Top Section */}
      <div>
        {/* Quote */}
        <FaQuoteLeft className="text-2xl sm:text-3xl text-gray-300 mb-3" />

        {/* Message */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
          {message}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${
                i < Math.round(ratings)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-2">
            {ratings.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-3"></div>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-2">
        <img
          src={user_photoURL}
          alt={userName}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-secondary text-sm sm:text-base">
            {userName}
          </h4>
          <p className="text-xs text-gray-500">Customer</p>
        </div>
      </div>
    </div>
  );
};


export default ReviewCard;