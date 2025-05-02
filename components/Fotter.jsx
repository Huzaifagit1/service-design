import React from 'react'
import Group from './assets/Group.svg'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md';

const Fotter = () => {
    return (
        <div className='bg-[#19202f]  grid grid-cols-1 lg:grid-cols-2 ite sm:items-center sm:justify-center gap-x-41 w-full md:p-14 mt-4'>
            <div className='space-y-4 flex flex-col '>
                <p className='text-2xl sm:font-bold sm:text-3xl lg:text-4xl lg:font-extrabold gird'>Get your website ready today</p>
                <p className=' text-sm text-gray-400 lg:text-lg sm:w-100 lg:w-full'>Get a stunning, fast website that attracts customers and makes your business look great online. We handle the tech, hassle-free.</p>
                <button className='back px-4 py-2 flex rounded gap-3 w-40'>
                Get Started    <MdArrowOutward size={20} />
                </button>
            </div>
            <div className='flex sm:justify-center'>
                <Image src={Group} alt="" />
            </div>
        </div>
    )
}

export default Fotter
