import Image from "next/image";
import Hero from "./components/Hero";
import CarView from "./components/CarView";
import TypesOfCar from "./components/TypeOfCar";
import WhatWeDo from "./components/WhatWeDo";
import CarShowcase from "./components/CarShowcase";
import Breathroom from "./components/Breathroom";
import RentalInfoBox from "./components/RentalInfo";

export default function Home() {
  return (
    <main>
      <Hero />
      <Breathroom title="Feel the Thrill. Drive the Dream." slogan="Rent a SUPER Car" />
      <CarView />
      <CarShowcase />
      <TypesOfCar />
      <WhatWeDo />
      <RentalInfoBox />
    </main>
  );
}
