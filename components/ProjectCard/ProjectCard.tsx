'use client';
import { useEffect } from "react";
import { useState } from "react";

interface Project {
    id: number;
    name: string;
    category: string[];
    img: string;
}

interface Params {
    project: Project;
    pageno: string;
    showcategory: string;
}

export default function ProjectCard({params}:{params:Params}) {
    const [content, setContent] = useState<JSX.Element>();
    useEffect(() => {
        const contentpart = <div className={params.project.id%2==0?"animate-fadein transform hover:scale-110 flex flex-col mx-auto md:flex-row w-4/5 h-[55vh] md:h-full justify-center items-center bg-[#f9f9f9] my-10 text-center":"animate-fadein transform hover:scale-110 flex flex-col mx-auto md:flex-row-reverse w-4/5 h-[55vh] md:h-full justify-center items-center bg-[#f9f9f9] my-10 text-center"}>
            <img className='w-full md:w-1/2' src={params.project.img} alt={params.project.name} />
            <div className='flex flex-col w-full justify-evenly h-full mx-auto'>
                <h1 className='w-full mx-auto text-2xl font-bold leading-7 decoration-solid'>
                    {params.project.name}
                </h1>
                <p className='w-full mx-auto mb-5 box-border'>
                    {params.project.category.join(", ")}
                </p>
            </div>
            
        </div>;
        if(params.showcategory!="All" && !params.project.category.includes(params.showcategory)){
            setContent(<></>);
        }else if(params.pageno=="1" && params.project.id<=12 && params.project.category.includes(params.showcategory)){
            setContent(contentpart);
        }else if(params.showcategory == "All"){
            if(params.pageno == "1" && params.project.id<=12){
                setContent(contentpart);
            }else if(params.pageno == "2" && params.project.id>12 && params.project.id<=24){
                setContent(contentpart);
            }
        }else if(params.pageno == "2" && params.project.id>12 && params.project.id<=24 && params.project.category.includes(params.showcategory)){
            setContent(contentpart);
        }

    }, [params]);
    // create a component that will display the project card with the project image, name and category of the project if the category of the project matches the showcategory state of the parent component and if the showcategory state is "All" then display all the projects and if showcategory or pageno is changed then the component should re-render and display the projects accordingly
    return (
        <>
            {content}
        </>
    );
}
