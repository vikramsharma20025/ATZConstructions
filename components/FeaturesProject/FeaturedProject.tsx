'use client';
import React,{ useEffect, useState,useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface More {
    location: string;
    size: string;
    budget: string;
    images: string[];
}
interface Project{
    id: number;
    name: string;
    desc: string;
    category: string[];
    img: string;
    more: More;
}

function FeaturedProject() {
    const [emblaRef,emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 3000 }), Fade()])
    const [sliding, setSliding] = useState<boolean>(true);
    const toggleAutoplay = useCallback(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return
        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi])

    useEffect(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return
        setSliding(autoplay.isPlaying())
        emblaApi
        .on('autoplay:play', () => setSliding(true))
        .on('autoplay:stop', () => setSliding(false))
        .on('reInit', () => setSliding(autoplay.isPlaying()))
    }, [emblaApi])

    useEffect(() => {
        fetch("/api/project/1")
            .then((res) => res.json())
            .then((data) => {
                setProject(data);
            });

        // console.log("project", project);
    }
    , []);
    const [project, setProject] = useState<Project>({id:0,name:"",desc:"",category:[],img:"",more:{location:"",size:"",budget:"",images:[]}});
    return (
        <div className='flex flex-col-reverse w-10/12 mx-auto mt-16 hidden'>
            <div>
                <h1 className='uppercase font-semibold text-xs leading-4 -tracking-tighter mt-24 mb-8'>featured project</h1>
                <h1 className='font-bold text-4xl'>{project.name}</h1>
                <div></div>
                <p>{project.desc}</p>
            </div>
            <div className='border mx-auto'>
                <div className='border overflow-hidden my-auto flex items-center mx-auto' ref={emblaRef}>
                    <div className='flex w-full border mt-0'>
                        {project.more.images.map((img, index) => {
                            return (
                                <div key={index} className='visible h-full w-full flex grow-0 shrink-0'>
                                    <div className='w-full h-full my-auto bg-transparent z-10 absolute flex flex-row items-center justify-between border'>
                                        <div className='bg-gray-800 opacity-75 w-fit h-fit' onClick={() => {
                                            emblaApi?.scrollPrev()
                                            emblaApi?.plugins()?.autoplay?.play()
                                        }}><ChevronLeftIcon sx={{color:"white"}} fontSize='large' /></div>
                                        {/* <div>
                                            {sliding&&<PauseIcon htmlColor='white' fontSize='large' onClick={toggleAutoplay} />}
                                            {!sliding&&<PlayArrowIcon htmlColor='white' fontSize='large' onClick={toggleAutoplay} />}
                                        </div> */}
                                        {/* <div className='bg-gray-800 opacity-75 w-fit h-fit'><PlayArrow sx={{color:"white"}} /></div> */}
                                        <div className='bg-gray-800 opacity-75 w-fit h-fit' onClick={() => {
                                            emblaApi?.scrollNext()
                                            emblaApi?.plugins()?.autoplay?.play()
                                            }}><ChevronRightIcon sx={{color:"white"}} fontSize='large' /></div>
                                    </div>
                                    <img src={img} alt="Project Image" className=" w-full" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProject;