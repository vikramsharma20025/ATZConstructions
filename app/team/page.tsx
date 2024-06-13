'use client';
import React, { useState } from 'react';
import { Button } from 'antd';
import data from '@/utils/teamsdata/teams.json';

export default function Team() {
    const personals = data.data;
    return (
        <div className='bg-[#f9f9f9]'>
            <div className='w-4/5 h-[50vh] mx-auto flex flex-col justify-evenly items-center mt-16'>
                <span className='text-sm -mb-5'>
                    GET TO KNOW US
                </span>
                <h1 className='text-4xl w-fit font-extrabold text-center leading-normal my-0'>
                    Honesty, Integrity & Experience
                </h1>
                <span className='w-3/12 border border-[#922f25] -my-5'>
                </span>
                <Button className='bg-[#922F25] rounded-full h-10 w-full md:w-96 px-8 hover:bg-black text-white font-bold'>
                    Reach Out
                </Button>
            </div>
            <div className='md:grid md:grid-cols-4 w-full md:px-14 md:mt-[-30px] md:pb-16 mx-auto'>
                {personals.map((personal,index) => (
                    <div key={personal.id} className='w-4/5 md:max-w-fit mx-auto my-5 h-fit text-center rounded-b-xl bg-white'>
                        <img className='w-full' src={personal.img} alt={personal.name} />
                        <div className='flex flex-col justify-evenly h-full'>
                            <h1 className='w-[90%] mx-auto font-bold'>
                                {personal.name}
                            </h1>
                            <p className='w-[90%] mx-auto text-base my-8'>
                                {personal.designation}
                            </p>
                            <a href={'mailto:'+personal.email} className='w-[90%] mx-auto text-base mb-8'>{personal.email}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
