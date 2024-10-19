'use client';
import "../../app/globals.css";
import Image from "next/image";
import CarSet from "../../public/images/cars-scar.svg"
import { CgArrangeBack, CgAlignRight, CgArrangeFront, CgAlignTop, CgEditFlipH, CgEditBlackPoint, CgLayoutGrid } from "react-icons/cg";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);



const Hero = () => {

  const titleRef = useRef(null);
    const sloganRef = useRef(null);
    const infoRef = useRef(null);
  
    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { x: 1400, opacity: 0, scale: .5 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scale: 1,
                ease: "power3.out",
            }
        );

        gsap.fromTo(
            sloganRef.current,
            { x: -1200, opacity: 0, scale: .5 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                scale: 1,
               ease: "power3.out",
            }
        );

        gsap.fromTo(
          infoRef.current,
          { x: 1200, opacity: 0, scale: .5 },
          {
              x: 0,
              opacity: 1,
              duration: 1,
              delay: 0.3,
              scale: 1,
              stagger: 0.5,
              ease: "elastic.out(.3, 0.3)",
          }
      );
    }, []);



  return (
    <section className="hero  bg-[url('/images/car51.png')] relative overflow-hidden">
      <Image src={CarSet} alt="car" width={200} height={300} className="absolute top-[10%] left-[70%] right-0 bottom-0 z-[200]" />


      <CgArrangeBack className="text-4xl text-slate-200 mb-4 absolute top-[35%] left-[50%] right-0 bottom-0 z-[200]" />
      <CgAlignRight className="text-4xl text-slate-200 mb-4 absolute top-[35%] left-[55%] right-0 bottom-0 z-[200]" />
      <CgArrangeFront className="text-4xl text-slate-200 mb-4 absolute top-[35%] left-[60%] right-0 bottom-0 z-[200]" />
      <CgAlignTop className="text-4xl text-slate-200 mb-4 absolute top-[35%] left-[65%] right-0 bottom-0 z-[200]" />
      <CgEditFlipH className="text-4xl text-slate-200 mb-4 absolute top-[35%] left-[80%] right-0 bottom-0 z-[200]" />
      {/* <CgEditBlackPoint className="text-4xl text-slate-200 mb-4 absolute top-[60%] left-[20%] right-0 bottom-0 z-[200]" /> */}
      <CgLayoutGrid className="text-4xl text-slate-200 mb-4 absolute top-[35%] left-[85%] right-0 bottom-0 z-[200]" />

      <div className="overlay lg:ml-[100px] px-3">

        <div className="hero-content z-50">
          <div>
            <h1 className="" ref={titleRef}>Drive Your Dream. Supercars for Rent.</h1>
            <p className="max-w-[400px] text-start" ref={sloganRef}>
              Together with AI you can display on the interface only those
              parameters that are interesting to the user, in addition to the
              default ones.
            </p>
            <div className="buttons">
              <a href="#technologies" className="btn primary  hover:bg-blue-600 transition-colors">
                Choose Your Beast
              </a>
              <a href="#pricing" className="btn secondary">
                Book Now
              </a>
            </div>

          </div>
          <div className="relative">
            <p className=" max-w-[400px] text-start">Best prices, premium car selection, exclusive access, insurance coverage, flexible pickup/dropoff locations.</p>
            <div className="flex flex-row gap-2 absolute top-[50%] left-[120%] translate-x-[-50%] translate-y-[-50%] ">
              <div className="animate-pulse bg-gray-300 w-12 h-12 rounded-full hidden xl:block"></div>
              <div className="flex flex-col gap-2">
                <div className="animate-pulse bg-gray-300 w-28 h-5 rounded-full hidden xl:block"></div>
                <div className="animate-pulse bg-gray-300 w-36 h-5 rounded-full hidden xl:block"></div>
              </div>
            </div>
          </div>

        </div>
        <div className="car-info " ref={infoRef}>

          <div className="stop-distance relative hidden">
            <span>1.5m Stop</span>
            <span><CgEditBlackPoint className="text-2xl text-slate-200 absolute top-[50%] -left-[10%] translate-x-[-50%] translate-y-[-50%]" /></span>
          </div>
          <div className="details relative">
            <span>Dead-end</span>
            <span>Workers on the road</span>
            <span><CgEditBlackPoint className="text-2xl text-slate-200 absolute top-[50%] -left-[10%] translate-x-[-50%] translate-y-[-50%]" /></span>
          </div>
          <div className="front-car relative">
            <span>1.2m Front Car</span>
            <span><CgEditBlackPoint className="text-2xl text-slate-200 absolute top-[50%] -left-[10%] translate-x-[-50%] translate-y-[-50%] " /></span>
          </div>
          <div className="speed-info relative">
            <span>60mph - 948 Sprn Av, NY</span>
            <span><CgEditBlackPoint className="text-2xl text-slate-200 absolute top-[50%] -left-[10%] translate-x-[-50%] translate-y-[-50%] " /></span>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
