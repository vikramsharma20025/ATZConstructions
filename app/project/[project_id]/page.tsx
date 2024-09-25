'use client';
import React, { use, useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from "next/navigation";
import { url } from "inspector";
import Drawer_Project from "@/components/Drawer_Project/Drawer_Project";

interface More {
    location: string;
    size: string;
    budget: string;
    images: string[];
}

interface Project {
    id: number;
    name: string;
    category: string[];
    img: string;
    more: More;
}

export default function OurProject({params}:{params:{project_id:string}}) {
    const [project, setProject] = useState<Project>({id:0,name:"",category:[],img:"",more:{location:"",size:"",budget:"",images:[]}});
    useEffect(() => {
        fetch("/api/project/" + params.project_id)
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 404) {
                    console.log("Project not found");
                    setProject({id:0,name:"Project not found",category:[],img:"",more:{location:"",size:"",budget:"",images:[""]}});
                    return;
                }
                setProject(data);
            });
    }, []);
    return (
        <div className="flex flex-col items-center justify-center font-sans">
            <div className="bg-cover bg-center bg-no-repeat w-fit md:w-full py-36 text-white" style={{backgroundImage:"url('"+project.img+"')"}}>
                <h1 className="text-5xl font-medium md:text-7xl font-extrabold ml-10">{project.name}</h1>
                <div className="mt-10 ml-10 font-semibold">{project.category.join("-")}</div>
            </div>
            <div className="w-4/5 flex flex-col md:flex md:flex-row justify-center md:justify-evenly items-center md:items-stretch md:h-screen md:w-11/12  bg-auto">
                <img src={project.img} alt={project.name} className="md:ml-0 mt-14 md:h-5/6 md:m-auto md:w-4/6 object-cover " />
                <div className="flex flex-col justify-center md:justify-start w-full md:w-1/4 md:h-4/5 md:my-auto ">
                    <h1 className="text-3xl font-bold my-5">Project Details</h1>
                    <p className="mb-7 mt-4 text-base font-normal tracking-wide">Location: {project.more.location}</p>
                    <hr className="border border-black" />
                    <p className="mb-7 mt-4 text-base font-normal">Size: {project.more.size}</p>
                    <hr className="border border-black" />
                    <p className="mb-7 mt-4 text-base font-normal">Budget: Over {project.more.budget}</p>
                    <hr className="border border-black" />
                </div>
            </div>
            {/* <div onClick={()=> setIsimageviewervisible(true)} className="py-16 flex flex-col hover:cursor-pointer md:flex-row flex-wrap mx-auto justify-center w-100%">
                {project.more.images.map((img, index) => {
                    return (
                        <img key={index} src={img} alt={project.name} className="full mt-2 object-cover mx-1" />
                    );
                })}
            </div> */}
            <div>
                <Drawer_Project params={{images:project.more.images,project_name:project.name}} />
            </div>
        </div>
    );
}
