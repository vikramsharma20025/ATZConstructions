import React from 'react';
import services1 from "@/public/images/Services1.jpg";
import services2 from "@/public/images/Services2.jpg";
import services3 from "@/public/images/services3.jpg";
import Image from 'next/image';
import Link from 'next/link';

function Services() {
    return (
        <div className='flex flex-col md:flex-row h-[185vh] md:h-auto w-full p-8 bg-gray-300'>
            <div className='w-full -mt-14 md:mt-0 z-10 bg-white p-8'>
                <Image src={services1} className='h-80 w-full object-contain mx-auto' alt="logo" width={400} height={309} />
                <h1 className='flex justify-center items-center font-bold text-xl mt-2'>
                    PROJECTS
                </h1>
                <Link href='/our-projects/1'>
                    <div className='w-full h-10 w-4/5 mx-auto mt-2 rounded-full font-bold hover:bg-black bg-red-800 text-white flex justify-center cursor-pointer items-center'>
                        LEARN MORE
                    </div>
                </Link>
            </div>
            <div className='w-full z-10 bg-white p-8'>
                <Image src={services2} className='h-80 w-full object-contain mx-auto' alt="logo" width={100} height={100} />
                <h1 className='flex justify-center items-center font-bold text-xl mt-2'>
                    SERVICES
                </h1>
                <Link href='/our-services'>
                    <div className='w-full h-10 w-4/5 mx-auto mt-2 rounded-full font-bold hover:bg-black bg-red-800 text-white flex justify-center cursor-pointer items-center'>
                        LEARN MORE
                    </div>
                </Link>
            </div>
            <div className='w-full z-10 bg-white p-8'>
                <Image src={services3} className='h-80 w-full object-contain mx-auto' alt="logo" width={100} height={100} />
                <h1 className='flex justify-center items-center font-bold text-xl mt-2'>
                    SAFETY
                </h1>
                <Link href='/commitment-to-safety'>
                    <div className='w-full h-10 w-4/5 mx-auto mt-2 rounded-full font-bold hover:bg-black bg-red-800 text-white flex justify-center cursor-pointer items-center'>
                        LEARN MORE
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Services;