'use client';
import React, { useEffect, useState } from 'react';
import ExpertiseBackground from '@/public/images/empty-abstract-cement-concrete-tunnel-interior3d-rendering-scaled.jpg';
import styles from '../Expertise/Expertise.module.css';

function Expertise() {
    const [buildvars,setBuildVars] = useState({
        buildvariable: ['Last','Rule','Succeed','Satisfy'],
        buildcount: 0,
        buildchoice: 'Satify',
        buildchoicecount: 0
    });
    useEffect(() => {
        const interval = setInterval(() => {
            setBuildVars((prevState) => {
                return {
                    ...prevState,
                    buildchoice: prevState.buildvariable[prevState.buildchoicecount],
                    buildchoicecount: prevState.buildchoicecount === 3 ? 0 : prevState.buildchoicecount + 1
                }
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div style={{ backgroundImage: "url(" + ExpertiseBackground.src + ")", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='h-[150vh] w-full text-white px-5 flex flex-col justify-evenly items-start font-bold md:flex md:flex-col md:h-screen'>
            <h1 className='mt-14 md:w-4/5 md:mx-auto'>
                EXPERTISE AND COMMITMENT
            </h1>
            <h1 className='flex flex-col md:flex-row text-4xl leading-tight md:w-4/5 border md:mx-auto md:text-8xl'>
                Built To <span className={styles.animatespring}> 
                    {buildvars.buildchoice}
                    </span>
            </h1>
            <span className='border-2 border-red-800 w-2/3 md:mx-auto'></span>
            <p className='text-lg font-normal leading-loose md:w-4/5 md:mx-auto'>
                With decades of experience, the team at Mefford Contracting is ready to assist with any and all of your building needs. For Michigan, Indiana, Ohio, Kentucky, and beyond  we offer commercial and industrial construction, and design-build services, with a clear focus on safety, quality, and your satisfaction.
            </p>
        </div>
    )
}

export default Expertise;