'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.jpg';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { usePathname } from 'next/navigation';
import BottomLinks from './BottomLinks';

function BottomBar() {
    const pathname = usePathname();
    return (
        <>
            {pathname === '/contact-us' && 
            <div className='flex flex-col md:flex-row md:justify-between bg-common-red mt-14 p-5 w-screen text-white font-bold md:p-8'>
                <h3 className='items-start text-lg font-bold tracking-[-0.285px] leading-tight mb-10 md:mb-auto'>
                    Call us TOLL-FREE and let’s discuss your opportunity!
                </h3>
                <a href='tel:123-456-7890' className='flex flex-row-reverse md:mr-4 items-start text-lg font-bold tracking-[-0.285px] leading-tight'>123-456-7890</a>
            </div>}
            <div className="md:h-[60vh] h-screen bg-[#303030] text-white flex flex-col justify-evenly z-10">
                <div className='h-[70%] border-b w-11/12 mx-auto flex flex-col md:flex-row justify-evenly'>
                    <div className='md:content-center'>
                        <a href='/'>
                            <Image src={logo} className='mx-auto' alt="logo" width={100} height={100} />
                        </a>
                    </div>
                    <BottomLinks />
                    <div className='flex w-fit flex-col flex-row justify-evenly'>
                        <div className='flex flex-row bg-[#58595b] p-5 rounded-full hover:bg-[#922f25] justify-center'>
                            <PhoneIphoneRoundedIcon />
                            <p>123-456-7890</p>
                        </div>
                        <div className='flex flex-row bg-[#58595b] p-5 rounded-full hover:bg-[#922f25] justify-center px-10 mt-5 md:mt-0'>
                            <a href='mailto:vikramofficial2006@gmail.com' className='flex flex-row'>
                            <EmailRoundedIcon />
                            <h4>vikramofficial2006@gmail.com</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 mx-auto text-sm flex flex-col my-auto justify-center'>
                    <span>© Copyright 2012 - 2024 | Mefford Contracting<br className='md:hidden' /> | All Rights Reserved 
                        {/* | Powered by */}
                        </span>
                </div>
            </div>
        </>
    )
};
export default BottomBar;