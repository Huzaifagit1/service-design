'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import facebook from '../assets/FaceBook.svg'
import instagram from '../assets/Instagram.svg'
import x from '../assets/X.svg'
import logo from '../assets/logo.svg'

import Pintrest from '../assets/Pintrest.svg'
const MainFooter = () => {
  const icons = [
    {
      image: facebook,
      path: 'https://www.facebook.com/',
    },
    {
      image: instagram,
      path: 'https://www.instagram.com/',
    },
    {
      image: x,
      path: 'https://www.twitter.com/',
    },
    {
      image: Pintrest,
      path: 'https://www.pinterest.com/',
    },
  ];

  const pages = ['Home', 'Contact', 'Faqs', 'Privacy Policy', 'Terms & Condition'];

  return (
    <div className="grid lg:p-14 lg:grid-cols-3 mt-8 w-[90%] mx-auto">
      {/* Logo and Socials */}
      <div className="border-b pb-10 space-y-14 lg:border-b-0 flex flex-col justify-between p-2 mt-3 lg:mt-0 lg:p-6  sm:space-y-10">
        <Image src={logo} alt="Logo" width={120} height={40} />
        <p className="text-gray-400 text-xl lg:text-2xl">
          Custom websites for service businesses that drive results.
        </p>
        <div className="flex space-x-4 ">
          {icons.map((item, index) => (
            <a key={index} href={item.path} target="_blank" rel="noopener noreferrer">
              <Image src={item.image} alt="Social Icon" width={24} height={24} />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="border-b pb-10 lg:border-b-0 lg:border-l p-4 flex flex-col space-y-3">
        <p className="font-bold text-2xl text-center">Quick Links</p>
        {pages.map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase().replace(/ /g, "-")}`}
            className="hover:text-blue-600 lg:px-3 items-center sm:px-1 text-shadow-2xs flex"
          >
            <IoIosArrowForward className="text-red-400/50 mr-1" />
            {item}
          </Link>
        ))}
      </div>

      {/* Subscription */}
      <div className="lg:border-l pb-10 p-4 flex flex-col items-center justify-between space-y-10">
        <p className="font-bold text-2xl text-center">Stay Updated</p>
        <p className="text-gray-400 text-center">
          Custom websites for service businesses that drive results.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="border-b text-white bg-transparent w-[90%] p-2 outline-none"
        />
      </div>
    </div>
  );
};

export default MainFooter;
