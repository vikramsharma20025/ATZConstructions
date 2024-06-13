'use client';
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import path from "path";

function BottomLinks() {
    const pathname = usePathname();

    return (
        <div className='flex flex-row md:justify-between p-5 justify-evenly'>
            <div className='flex flex-col  md:justify-around mr-10'>
                {pathname==="/our-projects"?<a href='/our-projects' className="border-b-2 border-[#922f25] md:w-52">Projects</a>:<a href='/our-projects' className="hover:border-b-2 hover:border-[#922f25] md:w-52">Projects</a>}
                {pathname==="/our-services"?<a href='/our-services' className="border-b-2 border-[#922f25] md:w-52">Services</a>:<a href='/our-services' className="hover:border-b-2 hover:border-[#922f25] md:w-52">Services</a>}
                {pathname==="/commitment-to-safety"?<a href='/commitment-to-safety' className="border-b-2 border-[#922f25] w-32 md:w-52">Commitment to Safety</a>:<a href='/commitment-to-safety' className="hover:border-b-2 hover:border-[#922f25] md:w-52">Commitment to Safety</a>}
            </div>
            <div className='flex flex-col justify-around'>
                {pathname==="/team"?<a href='/team' className="border-b-2 border-[#922f25] md:w-52">Team</a>:<a href='/team' className="hover:border-b-2 hover:border-[#922f25] md:w-52">Team</a>}
                {pathname==="/projects"?<a href='#' className="border-b-2 border-[#922f25] md:w-52">Careers</a>:<a href='#' className="hover:border-b-2 hover:border-[#922f25] md:w-52">Careers</a>}
                {pathname==="/projects"?<a href='#' className="border-b-2 border-[#922f25] md:w-52">Contact Us</a>:<a href='#' className="hover:border-b-2 hover:border-[#922f25] md:w-52">Contact Us</a>}
            </div>
        </div>
    )
}

export default BottomLinks;