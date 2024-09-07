// Components/WhatWeDo.tsx
import React from "react";
import { FaRuler, FaSun, FaVideo, FaStar, FaPalette, FaExpand } from "react-icons/fa";

const WhatWeDo: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 text-center">
      <h2 className="text-blue-500 text-sm mb-2">What we do?</h2>
      <h1 className="text-4xl font-bold mb-8">
        We process the information from the cameras, then we send it to the <span className="text-blue-500">AI</span>
      </h1>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        <Feature
          icon={<FaRuler className="text-4xl text-blue-500 mb-4" />}
          title="Distance counter"
          description="Count how the distance is for your measurement"
        />
        <Feature
          icon={<FaSun className="text-4xl text-blue-500 mb-4" />}
          title="Clear data"
          description="Clear data even when you’re under sun!"
        />
        <Feature
          icon={<FaVideo className="text-4xl text-blue-500 mb-4" />}
          title="Recording"
          description="Recording and tracking all time"
        />
        <Feature
          icon={<FaStar className="text-4xl text-blue-500 mb-4" />}
          title="High quality"
          description="High quality vision and visibility for all"
        />
        <Feature
          icon={<FaPalette className="text-4xl text-blue-500 mb-4" />}
          title="Two mil colors"
          description="With 2 million colors see everything brighter"
        />
        <Feature
          icon={<FaExpand className="text-4xl text-blue-500 mb-4" />}
          title="Large view"
          description="Change your view aspect ratio and sizes"
        />
      </div>

      {/* Footer text */}
      <div className="text-gray-600 max-w-3xl mx-auto text-center">
        <p>
          We process the information from the cameras, we send it to the AI and we say by voice what indicators we are 
          interested in. It shows the nearest cafe, shows the way as in the game, shows where the dangers are, prices 
          for parking, etc.
        </p>
      </div>

      {/* Arrow Icon */}
      <div className="mt-8">
        <button className="text-blue-500 text-4xl">↓</button>
      </div>
    </section>
  );
};

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center">
    {icon}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default WhatWeDo;
