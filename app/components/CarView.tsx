
import Image from "next/image";
import CarSet from "../../public/images/car22.jpg"

const CarView: React.FC = () => {
  return (
    <section className="relative h-screen bg-[url('/images/car12.jpg')] bg-cover bg-no-repeat bg-center">

      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-between p-12 text-white">
        {/* Left Section */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-6">
            AI to reduce accidents, save time, make interesting traveling around the city.
          </h1>
          <p className="text-lg mb-8">
            Potential we can output and interpret conveniently information from all car apps, and with AI to reduce accidents, save time, make interesting traveling around the city.
          </p>

          {/* Tags */}
          <div className="flex space-x-4 mb-8">
            <span className="bg-white bg-opacity-20 text-sm px-4 py-2 rounded-full">Save time</span>
            <span className="bg-white bg-opacity-20 text-sm px-4 py-2 rounded-full">Reduce accidents</span>
            <span className="bg-white bg-opacity-20 text-sm px-4 py-2 rounded-full">Great traveling</span>
          </div>

          {/* Contact Button */}
          <a
            href="mailto:info@vrnavs.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded inline-block transition duration-300"
          >
            info@vrnavs.com
          </a>
        </div>

        {/* Right Section - Car Information */}
        <div className="flex flex-col space-y-4 text-right">
          <div>
            <span className="text-lg font-semibold">1.2km Turn Right</span>
          </div>
          <div>
            <span className="text-lg">Crosswalk</span>
            <br />
            <span className="text-lg">2 Parking Lot</span>
          </div>
          <div>
            <span className="text-lg">25m Crosswalk</span>
          </div>
          <div>
            <span className="text-lg">29Km/h</span>
            <br />
            <span className="text-lg">D2 Economy</span>
          </div>
          <div>
            <span className="text-lg">2km - 1502 Dumbo Av, NY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarView;
