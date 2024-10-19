'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BreathroomProps {
    title: string;
    slogan: string;
}

const Breathroom = ({ title, slogan }: BreathroomProps) => {
    const titleRef = useRef(null);
    const sloganRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { x: 1400, opacity: 0, scale: 3.5 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        gsap.fromTo(
            sloganRef.current,
            { x: -1200, opacity: 0, scale: 3.5 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                scale: 1,
                scrollTrigger: {
                    trigger: sloganRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, []);

    return (
        <div className=" w-full h-[80vh] flex flex-col justify-center items-center bg-[url('/images/car90.jpg')] bg-cover bg-no-repeat bg-center bg-blend-multiply bg-yellow-200 overflow-hidden">
            <h3 ref={titleRef} className='text-2xl md:text-4xl xl:text-6xl text-white mb-5'>{title}</h3>
            <hr className='w-1/2 h-1 bg-white'></hr>
            <p ref={sloganRef} className='text-3xl text-white mt-5'>{slogan}</p>
        </div>
    );
};

export default Breathroom;