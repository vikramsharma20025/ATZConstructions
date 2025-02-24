'use client';
import React, { useEffect, useState } from 'react';
import ExpertiseBackground from '@/public/images/empty-abstract-cement-concrete-tunnel-interior3d-rendering-scaled.jpg';
import styles from '../Expertise/Expertise.module.css';
import Typewriter from 'typewriter-effect';


function Expertise() {        
    return (
        <div style={{ backgroundImage: "url(" + ExpertiseBackground.src + ")", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='h-[70vh] w-full text-white px-5 flex flex-col justify-evenly items-start font-bold'>
            <h1 className='mt-14 md:w-4/5 md:mx-auto'>
                EXPERTISE AND COMMITMENT
            </h1>
            <h1 className='flex flex-col md:flex-row text-4xl leading-tight md:w-4/5 md:mx-auto md:text-8xl'>
                    Built To&#160;<Typewriter
                    options={{
                        strings: ['Last','Rule','Succeed','Satisfy'],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 100,
                        }}
                        />
            </h1>
            <div className='w-9/12 mx-auto h-1 border border-black'>
                <span className='border-2 border-red-800 flex flex-row h-full w-1/4 md:mr-auto md:w-1/12'></span>
            </div>
            <div className='md:w-4/5 mx-auto'>
                <p className='text-base font-bold leading-loose md:w-2/3 '>
                    With decades of experience, the team at ATZ Constructions is ready to assist with any and all of your building needs. For Michigan, Indiana, Ohio, Kentucky, and beyond  we offer commercial and industrial construction, and design-build services, with a clear focus on safety, quality, and your satisfaction.
                </p>
            </div>
        </div>
    )
}

export default Expertise;

{/* <span className={buildvars.buildchoice.length>4?styles.animatespring7:styles.animatespring4}>{buildvars.buildchoice}</span> */}