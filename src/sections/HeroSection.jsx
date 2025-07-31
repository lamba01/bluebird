import React from "react";
import heroimg from "../assets/hero.png";

function HeroSection() {
  return (
    <section className="relative flex items-center min-h-[60vh] sm:min-h-[90vh] overflow-hidden sm:mx-5 mt-12">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover sm:bg-contain bg-left sm:bg-right bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroimg})` }}
      />

      {/* Left blur overlay (over the image) */}
      <div className="absolute left-0 top-0 h-full w-full sm:w-1/2 backdrop-blur-md sm:backdrop-blur-sm bg-white/7 sm:bg-white/50 z-10" />
      {/* Optional dark overlay for better text visibility on small screens */}
      <div className="absolute inset-0 bg-black/20 sm:bg-transparent z-10" />

      {/* Text content */}
      <div className="relative z-20 px-8 md:px-16 w-3/4 md:w-1/2 space-y-4">
        <span className="text-blue-600 font-semibold capitalize">
          IT consultancy Services
        </span>
        <h1 className="text-2xl sm:text-4xl text-gray-950 font-bold ">
          Smarter IT Solutions for Modern Businesses
        </h1>
        <p className="text-gray-800">
          We help startups, SMEs, and enterprises optimize their tech, from
          cloud migrations to full-scale IT support.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition-colors">
          Book a free consultation
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
