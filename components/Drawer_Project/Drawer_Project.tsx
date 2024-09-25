'use client';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState, useCallback } from 'react';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import PauseIcon from '@mui/icons-material/Pause';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';


interface Drawer_ProjectProps {
    params: {
        images: string[];
        project_name: string;
    },
}

function Drawer_Project({
    params: { 
        images,
        project_name
    },
}: Drawer_ProjectProps) {
    const [emblaRef,emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay({ playOnInit: false, delay: 3000 }), Fade()])
    const [isfullscreen, setIsfullscreen] = useState<boolean>(false);
    const [sliding, setSliding] = useState<boolean>(false);
    const [isvisible, setIsimageviewervisible] = useState<boolean>(false);
    const switchvisibility = () => {
        setIsimageviewervisible(!isvisible);
    };
    const toggleAutoplay = useCallback(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return
        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi])
    const onButtonAutoplayClick = useCallback(
        (callback: () => void) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return
        const resetOrStop =
            autoplay.options.stopOnInteraction === false
            ? autoplay.reset
            : autoplay.stop
        resetOrStop()
        callback()
        },
        [emblaApi]
    )
    useEffect(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return
        setSliding(autoplay.isPlaying())
        emblaApi
        .on('autoplay:play', () => setSliding(true))
        .on('autoplay:stop', () => setSliding(false))
        .on('reInit', () => setSliding(autoplay.isPlaying()))
    }, [emblaApi])
    const fullscreentoggle = () => {
        if(document.fullscreenElement) {
            document.exitFullscreen();
            setIsfullscreen(false);
        } else {
            document.body.requestFullscreen();
            setIsfullscreen(true);
        }
    }
    return (
        <>
            <div onClick={()=> setIsimageviewervisible(true)} className="py-16 flex flex-col hover:cursor-pointer md:flex-row flex-wrap mx-auto justify-center w-100%">
                {images.map((img, index) => {
                    return (
                        <img key={index} src={img} alt={project_name} className="full mt-2 object-cover mx-1" />
                    );
                })}
            </div>
            <div className={isvisible?"w-screen h-screen absolute top-0 left-0 border fixed":"hidden"}>
                <div className="z-20 fixed flex flex-col-reverse md:flex-row md:justify-between md:items-center w-full h-full backdrop-blur-sm">
                    <div className='flex flex-row justify-center h-12 bg-white border'>
                        <div onClick={()=> switchvisibility()}>
                            <CloseIcon htmlColor='gray' fontSize='large' />
                        </div>
                        <div>
                            {!isfullscreen&&<CheckBoxOutlineBlankIcon htmlColor='gray' fontSize='large' onClick={fullscreentoggle} />}
                            {isfullscreen&&<HighlightAltIcon htmlColor='gray' fontSize='large' onClick={fullscreentoggle} />}
                        </div>
                        <div>
                            {sliding&&<PauseIcon htmlColor='gray' fontSize='large' onClick={toggleAutoplay} />}
                            {!sliding&&<PlayArrowIcon htmlColor='gray' fontSize='large' onClick={toggleAutoplay} />}
                        </div>
                        <div className='md:hidden flex flex-row'>
                            <div onClick={()=> emblaApi?.scrollPrev()}>
                                <ChevronLeftIcon htmlColor='gray' fontSize='large' />
                            </div>
                            <div onClick={()=>emblaApi?.scrollNext()}>
                                <ChevronRightIcon htmlColor='gray' fontSize='large' />
                            </div>
                        </div>
                    </div>
                    <div className='border  w-4/5 overflow-hidden my-auto mx-auto' ref={emblaRef}>
                        <div className='flex border'>
                            {images.map((img, index) => {
                                return (
                                    <div key={index} className='visible h-full w-full flex grow-0 shrink-0'>
                                        <img src={img} alt="Project Image" className="md:w-full md:h-full" />
                                    </div>
                                );
                            }
                            )}
                        </div>
                    </div>
                    <div className='hidden md:ml-20 md:visible md:flex md:flex-col w-2/5 md:w-2/5 md:h-full md:overflow-auto border'>
                        {images.map((img, index) => {
                            return (
                                <div key={index} onClick={()=> emblaApi?.scrollTo(index)} className="md:w-full min-h-fit md:h-auto border p-1 ">
                                    <img src={img} alt="Project Image" height={100} width={100}  className="md:scroll-smooth md:w-full min-h-fit h-auto w-auto" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
        )
}

export default Drawer_Project;