import Image from "next/image";
import Hero from "./components/Hero";
import CarView from "./components/CarView";
import TypesOfCar from "./components/TypeOfCar";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
   <main>
    <Hero />
    <CarView />
    <TypesOfCar />
    <WhatWeDo />
   </main>
  );
}
