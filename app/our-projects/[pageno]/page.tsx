'use client';
import React, { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from "next/navigation";

interface Project {
    id: number;
    name: string;
    category: string[];
    img: string;
}

export default function OurProjects({params}:{params:{pageno:string}}) {
    useEffect(() => {
        if(params.pageno == ""){
            router.push('/our-projects/1');
        }
        async function GetData() {
            console.log(params.pageno,"making request to server");
            const res = await fetch(`/api/our-projects/${params.pageno}`)
            .then((res) => {
                console.log("res",res);
                return res.json()
            })
            .then((data) => {
                console.log("data",data.content);
                let content = JSON.parse(data.content);
                setProjects(content);
                let totallength = data.totallength;
                setNoOfProjects(totallength);
            }
            );
        }
        GetData();
    }, [params]);
    const router = useRouter();
    const [showcategory, setShowCategory] = React.useState("All");
    const [projects,setProjects] = useState<Project[]>();
    const [noofprojects,setNoOfProjects] = useState<number>(0);
    return (
        <div className="flex flex-col items-center justify-center font-sans">
            <div className="w-11/12 h-[60vh] flex flex-col justify-around mx-auto items-center">
                <h2 className="text-5xl font-bold">
                    Projects
                </h2>
                <div className="border w-1/4 my-5 border-[#922f25] -my-20">

                </div>
                <p className="px-3 w-2/3 text-base font-normal text-center leading-8 tracking-wide">
                    The ATZ Constructions team of experienced project managers, contractors and skilled laborers are here to help you realize your dream. We’ll partner with you to build something that lasts.
                </p>
            </div>
            <div className="flex flex-col w-4/5">
                <div className="flex flex-row justify-center items-center my-10 md:my-0 w-full p-3 flex-wrap">
                {/* {showcategory} */}
                    <button onClick={() => setShowCategory("All")} className={showcategory=="All"?"border border-red-800 mx-2 px-3 py-1 w-fit rounded-lg bg-red-800 my-2":"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg my-2"}>
                        All
                    </button>
                    <button onClick={() => setShowCategory("Commercial")} className={showcategory=="Commercial"?"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg bg-red-800 my-2":"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg my-2"}>
                        Commercial
                    </button>
                    <button onClick={() => setShowCategory("Multi-Family")} className={showcategory=="Multi-Family"?"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg bg-red-800 my-2":"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg my-2"}>
                        Multi-Family
                    </button>
                    <button onClick={() => setShowCategory("Industrial")} className={showcategory=="Industrial"?"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg bg-red-800 my-2":"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg my-2"}>
                        Industrial
                    </button>
                    <button onClick={() => setShowCategory("Offices")} className={showcategory=="Offices"?"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg bg-red-800 my-2":"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg my-2"}>
                        Offices
                    </button>
                    <button onClick={() => setShowCategory("Hospitality")} className={showcategory=="Hospitality"?"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg bg-red-800 my-2":"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg my-2"}>
                        Hospitality
                    </button>
                    <button onClick={() => setShowCategory("Restaurant")} className={showcategory=="Restaurant"?"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg bg-red-800 my-2":"border border-red-800 mx-2 px-3 w-fit py-1 rounded-lg my-2"}>
                        Restaurant
                    </button>
                </div>
            </div>
            <div className="w-full">
                {projects?.map((project, index) => (
                    <ProjectCard key={project.id} params={{project: project, pageno: params.pageno, showcategory: showcategory}} />
                ))}
            </div>
            <div className="w-4/5 mx-auto flex flex-row justify-end space-x-3 text-center items-center mb-20">
                {params.pageno >= "2"  && <div className="cursor-pointer" onClick={()=> router.push('/our-projects/1')}><ChevronLeftIcon />   Prev</div>}
                {/* insert noofprojects/12 no of divs to show page no */}
                {Array.from({length: Math.ceil(noofprojects/12)}, (_, i) => i+1).map((pageno) => (
                    <div key={pageno} onClick={()=> router.push(`/our-projects/${pageno}`)} className={params.pageno == pageno.toString() ?"h-10 w-10 bg-red-800 content-center cursor-not-allowed":"h-10 w-10 border border-red-800 content-center cursor-pointer"}>{pageno}</div>
                ))}
                {params.pageno >= "1"&& parseInt(params.pageno)<=(noofprojects/12) && <div className="cursor-pointer" onClick={()=> router.push('/our-projects/2')}>Next   <ChevronRightIcon /></div>}
            </div>
        </div>
    );
}


// <div onClick={()=> router.push('/our-projects/1')} className={params.pageno == "1" ?"h-10 w-10 bg-red-800 content-center cursor-not-allowed":"h-10 w-10 border border-red-800 content-center cursor-pointer"}>1</div>
//                 <div onClick={()=> router.push('/our-projects/2')} className={params.pageno == "2" ?"h-10 w-10 bg-red-800 content-center cursor-not-allowed":"h-10 w-10 border border-red-800 content-center cursor-pointer"}>2</div>
                