// Components/WhatWeDo.tsx
import React from "react";
import { FaRuler, FaSun, FaVideo, FaStar, FaPalette, FaExpand } from "react-icons/fa";
import { TbLocationPlus } from "react-icons/tb";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { IoIosPricetags } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { AiOutlineSafetyCertificate } from "react-icons/ai";


const WhatWeDo: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 text-center">
      {/* <h2 className="text-blue-500 text-sm mb-2">What we do?</h2> */}
      <h1 className="text-4xl font-bold mb-8">
        Premium Cars, Premium Service
      </h1>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        <Feature
          icon={<IoIosPricetags className="text-4xl text-blue-500 mb-4" />}
          title="Best Prices in the Game"
          description="We offer the most competitive rates on the market, with no hidden fees. Drive the car of your dreams without breaking the bank."
        />
        <Feature
          icon={<MdOutlineWorkspacePremium className="text-4xl text-blue-500 mb-4" />}
          title="Exclusive Access to Supercars"
          description="Our collection features rare, high-performance machines that you won’t find sitting at your everyday rental agency. Lamborghini, Ferrari, McLaren—we’ve got the best of the best, just waiting for you."
        />
        <Feature
          icon={<TbLocationPlus className="text-4xl text-blue-500 mb-4" />}
          title="Flexible Pickup & Drop-off Locations"
          description="Need the car delivered to your hotel, the airport, or your own driveway? We’ve got you covered. With our flexible pickup and drop-off options, your rental experience will be as smooth as the ride itself."
        />
        <Feature
          icon={<AiOutlineSafetyCertificate className="text-4xl text-blue-500 mb-4" />}
          title="Comprehensive Insurance Coverage"
          description="Drive with peace of mind. Our rentals come with full insurance coverage, including damage waivers and liability, so you can enjoy the ride, worry-free."
        />
        <Feature
          icon={<BiSupport className="text-4xl text-blue-500 mb-4" />}
          title="White-Glove Concierge Service "
          description="Our dedicated team is here to cater to your every need. Whether you need route recommendations, VIP access to exclusive events, or personal concierge services, we’re just a call away—24/7."
        />
        <Feature
          icon={<CiGift className="text-4xl text-blue-500 mb-4" />}
          title="Custom Experiences"
          description="Want to surprise someone with the ultimate gift? Planning a luxury road trip or a supercar tour? Let us create a fully personalized experience tailored just for you."
        />
      </div>

      {/* Footer text */}
      <div className="text-gray-600 max-w-3xl mx-auto text-center">
        <p>
          At Zinx, we don’t just rent cars—we deliver experiences. From the moment you book to the second you return, you’ll enjoy world-class service and unmatched access to the most iconic supercars on the planet.
        </p>
      </div>

      {/* Arrow Icon */}

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
