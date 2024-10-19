// Components/TypesOfCar.tsx
import React from "react";
import Image from "next/image";
import CarSet from "../../public/images/car22.jpg"


const TypesOfCar: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 bg-[url('/images/car36.jpg')] bg-cover bg-no-repeat bg-center">


      {/* Content on top of background */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        {/* Upper section with dots and labels */}
        <div className="hidden md:flex justify-center space-x-16 mb-12 ">
          {["Order", "Setup", "Analyse", "Test", "Finished"].map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-4 h-4 bg-gray-500 rounded-full mb-2 "></div>
              <span className="text-gray-300 text-sm">{step}</span>
            </div>
          ))}
        </div>

        {/* Car text description */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Projection technology with AI is available for all models of cars
          </h1>
          <p className="text-lg">
            Projection technology with AI is available for all models of cars. You only need to put a camera and on the windshield to fix the projector.
          </p>
        </div>

        {/* Button to try demo */}
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Try Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypesOfCar;
