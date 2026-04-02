import React from 'react';
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
       <div className="flex items-end gap-1">
      {/* Logo Icon */}
      <img
        src={logo}
        alt="ZapShift Logo"
        className="h-10 w-auto object-contain"
      />

      {/* Text */}
      <h3 className="text-2xl font-bold leading-none text-gray-800 dark:text-white -ms-2.5">
        ZapShift
      </h3>
    </div>
    );
};

export default Logo;