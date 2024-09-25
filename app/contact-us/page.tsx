'use client';
import { Button } from 'antd';
import React, { useState } from 'react';
import Contact_us from '@/components/ContactUsForm/ContactUs';
import CommitedToSafety from '@/components/CommitedToSafety/CommitedToSafety';

export default function ContactUs() {
    return (
        <div className='bg-white flex flex-col'>
            <div className='w-4/5 h-fit mx-auto flex flex-col justify-evenly items-center py-14'>
                <h1 className='capitalize text-4xl w-fit font-extrabold text-center leading-normal mb-7 mt-3'>
                    contact us
                </h1>
                <span className='w-5/12 md:w-1/12 border border-[#922f25] mb-20'>
                </span>
                <p className='font-normal text-base text-center content-center w-11/12 leading-8'>
                    Decades of experience have equipped us with the knowledge to handle any project, and the skills to complete them exceptionally! From retail, healthcare, and education… to multi-family housing, office fit-ups, agriculture, and manufacturing – whatever your industry, our team of experts work passionately to fulfil your needs and exceed your expectations. Contact us today to get started!
                </p>
            </div>
            <Contact_us />
            
            <CommitedToSafety />
        </div>
    );
}
