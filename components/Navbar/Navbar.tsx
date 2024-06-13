'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

function NavigationTop() {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(true);
    return (
        <>
            <nav className="flex flex-row justify-evenly w-full items-center mt-0 h-fit">
                <div className='w-1/3 md:content-start'>
                    <a href="/">
                        <Image src={logo} className='h-20 mx-auto' alt="logo" width={100} height={100} />
                    </a>
                </div>
                <div className="mx-auto md:hidden w-auto h-full content-center">
                    <div>
                        {collapsed ? <div onClick={()=>setCollapsed(!collapsed)}><MenuIcon fontSize='large' /></div> : <div onClick={()=>setCollapsed(!collapsed)}><CloseIcon fontSize='large' /></div>}
                    </div>
                </div>
                <div className="md:flex md:flex-row hidden md:block md:w-2/3 md:justify-between md:mt-0 md:content-center md:items-center md:text-black md:h-full md:pr-20 font-medium">
                    <a className=' h-full content-center' href="/our-projects/1">Projects</a>
                    <a className=' h-full content-center' href="/our-services">Services</a>
                    <a className=' h-full content-center' href="/commitment-to-safety">Commitment to Safety</a>
                    <a className=' h-full content-center' href="/team">Team</a>
                    <a className=' h-full content-center' href="#">Careers</a>
                    <Button onClick={()=>router.push('/contact-us')} className='bg-[#922F25] rounded-full h-2/3 px-8 hover:bg-black text-white font-bold'>
                        Contact Us
                    </Button>
                </div>
            </nav>
            <div className='md:hidden z-10 w-screen'>
                {collapsed ? null : <div className="flex flex-col justify-evenly mt-0 w-screen w-2/3 h-[80vh] justify-center items-start">
                    <a className='hover:bg-gray-50 h-full w-full items-center content-center pl-5' href="/our-projects/1">Projects</a>
                    <a className='hover:bg-gray-50 h-full w-full items-center content-center pl-5' href="/our-services">Services</a>
                    <a className='hover:bg-gray-50 h-full w-full items-center content-center pl-5' href="/commitment-to-safety">Commitment to Safety</a>
                    <a className='hover:bg-gray-50 h-full w-full items-center content-center pl-5' href="/team">Team</a>
                    <a className='hover:bg-gray-50 h-full w-full items-center content-center pl-5' href="#">Careers</a>
                    <a className='hover:bg-gray-50 h-full w-full items-center content-center pl-5' href="/contact-us">Contact Us</a>
                    </div>}
            </div>
        </>
    )
}



export default NavigationTop;