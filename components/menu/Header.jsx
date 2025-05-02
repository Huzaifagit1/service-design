import React from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import Image from 'next/image'

const Header = () => {
    const pages = ['Home', 'Packages', 'Case Study', 'Support', 'Contact', 'Get Started']
    return (
        <div className='bg-[#19202f] rounded-lg h-15 flex justify-between items-center p-4 w-[90%] mx-auto mt-10'>
            <div><Image src={logo} alt="" /></div>
            <div>
                <button className='sm:hidden'>
                    <Image src={menu} alt="" />
                </button>

                <div className='max-sm:hidden'>
                    {pages.map((item, index) =>
                        (item === "Contact" || item === "Get Started") ? (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded ${item === "Contact" ? "text-blue-600 hover:text-white" : "back "
                                    }`}
                            >
                                {item}
                            </button>
                        ) : (
                            <a
                                key={index}
                                href={`/${item.toLowerCase().replace(" ", "-")}`}
                                className="hover:text-blue-600 lg:px-3 sm:px-1.5 text-shadow-2xs"
                            >
                                {item}
                            </a>
                        )
                    )}
                </div>

            </div>
        </div>
    )
}

export default Header
