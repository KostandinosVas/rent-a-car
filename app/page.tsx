import Image from "next/image";
import Hero from "./components/Hero";
import CarView from "./components/CarView";
import TypesOfCar from "./components/TypeOfCar";
import WhatWeDo from "./components/WhatWeDo";
import CarShowcase from "./components/CarShowcase";
import Breathroom from "./components/Breathroom";
import RentalInfoBox from "./components/RentalInfo";
import Cars3D from '@/app/components/3dcars'

export default function Home() {
  return (
    <main className="border border-black overflow-x-hidden">
      <Hero  />
      <Breathroom title="Feel the Thrill. Drive the Dream." slogan="Rent a SUPER Car" />
      <CarView />
      <Cars3D />
      <CarShowcase />
      <TypesOfCar />
      <WhatWeDo />
      <RentalInfoBox />
    </main>
  );
}
