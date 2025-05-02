'use client';
import React from 'react';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import hero from '../assets/Hero.svg'
const HeroSection = () => {
  return (
    <div className="grid lg:grid-cols-2 px-12 mt-20 mb-10 md:my-30 w-[90%] mx-auto">
      {/* Text Content */}
      <div className="space-y-10 py-10 lg:space-y-5 md:flex-col md:py-10">
      <div className="container mx-auto px-4 py-8">
  <h1 className="text-white">
    <div className="flex flex-wrap items-center">
      <div className="mr-2 mb-1 sm:mb-0">
        <span className="font-semibold text-2xl sm:text-3xl lg:text-4xl md:font-bold">Professional</span>
        <span className="block h-[2px] w-58  bg-gradient-to-r from-[#0388FE] via-[#6E49EE] to-[#D60FCC] rounded-full mt-1"></span>
      </div>
      <div className="mb-1 sm:mb-0">
        <span className="font-semibold text-2xl sm:text-3xl lg:text-4xl md:font-bold">Websites,</span>
      </div>
    </div>
    
    <div className="flex flex-wrap items-center mt-2 sm:mt-3">
      <div className="mr-2 mb-1 sm:mb-0">
        <span className="font-semibold text-2xl sm:text-3xl lg:text-4xl md:font-bold">Made</span>
      </div>
      <div>
        <span className="font-semibold text-2xl sm:text-3xl lg:text-4xl md:font-bold">Simple</span>
        <span className="block h-[2px] w-full max-w-[8rem] bg-gradient-to-r from-[#0388FE] via-[#6E49EE] to-[#D60FCC] rounded-full mt-1"></span>
      </div>
    </div>
  </h1>
</div>

        <p className="text-gray-400 lg:w-[90%]">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
          Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
        </p>
        <p className="font-semibold text-xl">Landing pages start from £500.</p>
        <button className="back p-3 rounded flex items-center gap-1">
          Get My Website Started
          <MdArrowOutward size={25} />
        </button>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center items-center">
        <Image
          src={hero}
          alt="Hero Illustration"
          width={500}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
