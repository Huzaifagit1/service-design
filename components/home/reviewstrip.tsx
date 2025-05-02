'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

import google from '../assets/google.svg';
import clutch from '../assets/clutch.svg';
import sitejabber from '../assets/sitejabber.png';
import trustpilot from '../assets/trustpilo.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const ReviewStrip = () => {
  const platforms = [
    { name: 'Google', rating: '4.5', icon: google },
    { name: 'Clutch', rating: '4.5', icon: clutch },
    { name: 'Sitejabber', rating: '4.5', icon: sitejabber },
    { name: 'Trustpilot', rating: '4.5', icon: trustpilot },
  ];

  return (
    <div className="bg-[#19202f] my-8 md:my-20 w-[90%] mx-auto p-4 md:p-6 rounded-xl text-white ">
      {/* Mobile view: 2x2 grid for platforms */}
      <div className="md:hidden ">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {platforms.map((platform, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image 
                src={platform.icon} 
                alt={platform.name} 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{platform.name}</span>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 text-xs" />
                  <span className="text-xs ml-1">{platform.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gray-600 my-4"></div>
        
        {/* Client count for mobile */}
        <div className="flex items-center gap-3 ">
          <div className="flex -space-x-2">
            <Image src={avatar1} alt="avatar" width={30} height={30} className="rounded-full border-2 border-white" />
            <Image src={avatar2} alt="avatar" width={30} height={30} className="rounded-full border-2 border-white" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Satisfied Clients 952+ in</p>
            <p className="text-xs text-gray-300">Globle</p>
          </div>
        </div>
      </div>
      
      {/* Desktop view: horizontal layout */}
      <div className="hidden md:flex flex-wrap md:flex-nowrap justify-between items-center gap-6">
        <div className="flex flex-wrap gap-6 items-center">
          {platforms.map((platform, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image src={platform.icon} alt={platform.name} width={48} height={48} />
              <span className="font-medium">{platform.name}</span>
              <FaStar className="text-yellow-400" />
              <span>{platform.rating}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Avatar Stack */}
          <div className="flex -space-x-3">
            <Image src={avatar1} alt="avatar" width={40} height={40} className="rounded-full border-2 border-white" />
            <Image src={avatar2} alt="avatar" width={40} height={40} className="rounded-full border-2 border-white" />
            <Image src={avatar3} alt="avatar" width={40} height={40} className="rounded-full border-2 border-white" />
          </div>

          {/* Text */}
          <div className="leading-tight">
            <p className="text-sm font-semibold">Satisfied Clients 952+ in</p>
            <p className="text-xs text-gray-300">Globle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStrip;