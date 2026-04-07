import React from 'react';
import { Link } from 'react-router';

const Forbidden = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-gray-100">
      <div className="text-center p-8 rounded-2xl shadow-lg bg-white max-w-md">

        {/* Icon */}
        <div className="text-red-500 text-6xl mb-4">🚫</div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          403 Forbidden
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          You don’t have permission to access this page.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Go Home
        </Link>
        <Link
          to="/dashboard"
          className="inline-block px-6 py-2 ml-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Go Dashboard
        </Link>
      </div>
    </div>
  );
};


export default Forbidden;