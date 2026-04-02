import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../../components/Logo/Logo";

const Footer = () => {
  return (
  <footer className=" text-white mt-16">
      
      <div className="px-4 py-12">
        
        {/* Card Container */}
        <div className="bg-black rounded-3xl px-6 py-12 text-center shadow-lg">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Logo />
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
            From personal packages to business shipments — we deliver on time, every time.
          </p>

          {/* Divider */}
          <div className="border-t border-dashed border-primary my-6 opacity-40"></div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
            {["Services", "Coverage", "About Us", "Pricing", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-primary transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-primary my-6 opacity-40"></div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            
            <div className="bg-base-100 text-secondary p-2 rounded-full hover:scale-110 transition">
              <FaLinkedinIn />
            </div>

            <div className="bg-base-100 text-secondary p-2 rounded-full hover:scale-110 transition">
              <FaXTwitter />
            </div>

            <div className="bg-base-100 text-secondary p-2 rounded-full hover:scale-110 transition">
              <FaFacebookF />
            </div>

            <div className="bg-red-500 text-white p-2 rounded-full hover:scale-110 transition">
              <FaYoutube />
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
