'use client';
import React from 'react';
import data from '@/utils/services.json';

export default function Home() {
    const services = data.data;
    return (
        <div className="flex flex-col items-center justify-evenly p-5">
            {services.map((service,index) => (
                service.id%2==0?
                    <div key={service.id} className="flex flex-col-reverse md:flex-row-reverse my-10 w-11/12 h-[90vh] md:h-full justify-center items-center bg-[#f9f9f9]">
                        <div className='flex flex-col justify-evenly h-full'>
                            <h1 className='w-[90%] mx-auto text-4xl font-bold'>
                                {service.heading}
                            </h1>
                            <span className='border border-red-800 w-28 ml-7 my-10'></span>
                            <p className='w-[90%] mx-auto text-base'>
                                {service.para}
                            </p>
                        </div>
                        <img className='w-full md:w-1/2' src={service.img} alt={service.heading} />
                    </div>
                :
                    <div key={service.id} className="flex flex-col md:flex-row w-11/12 h-[90vh] md:h-full justify-center items-center bg-[#f9f9f9] my-10">
                        <div className='flex flex-col justify-evenly h-full'>
                            <h1 className='w-[90%] mx-auto text-4xl font-bold'>
                                {service.heading}
                            </h1>
                            <span className='border border-red-800 w-28 ml-7 my-10'></span>
                            <p className='w-[90%] mx-auto'>
                                {service.para}
                            </p>
                        </div>
                        <img className='w-full md:w-1/2' src={service.img} alt={service.heading} />
                    </div>
                
            ))}
        </div>
    );
}