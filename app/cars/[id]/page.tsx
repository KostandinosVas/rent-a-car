import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'



const cars = [
  {
    id: 1,
    image: "/images/car36.jpg",
    title: "Model STR-17",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat earum sit amet nesciunt blanditiis exercitationem dolor vitae deserunt hic nam.",
    price: "500$",
    horsepower: "770 HP",
    Acceleration: "0-60 mph : 2.8 seconds",
    topSpeed: "217 mph (350 km/h)",
    engineType: "6.5L V12 Naturally Aspirated",
    transmission: "7-Speed Sequential Manual",
    fuelConsumption: "10.5 L/100 km (18.5 mpg-imp; 15.4 mpg-US)",
    emissions: "242 g/km (NEDC)",
    doors: "2",
    seats: "2",
    bodyStyle: "Coupe",
    driveType: "Rear-Wheel Drive",
    fuelType: "Petrol",
  },
  {
    id: 2,
    image: "/images/car22.jpg",
    title: "Model GtW Cooper",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat earum sit amet nesciunt blanditiis exercitationem dolor vitae deserunt hic nam.",
    price: "300$",
    horsepower: "770 HP",
    Acceleration: "0-60 mph : 2.8 seconds",
    topSpeed: "217 mph (350 km/h)",
    engineType: "6.5L V12 Naturally Aspirated",
    transmission: "7-Speed Sequential Manual",
    fuelConsumption: "10.5 L/100 km (18.5 mpg-imp; 15.4 mpg-US)",
    emissions: "242 g/km (NEDC)",
    doors: "2",
    seats: "2",
    bodyStyle: "Coupe",
    driveType: "Rear-Wheel Drive",
    fuelType: "Petrol",
  },
  {
    id: 3,
    image: "/images/car04.jpg",
    title: "Model Byqan",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat earum sit amet nesciunt blanditiis exercitationem dolor vitae deserunt hic nam.",
    price: "900$",
    horsepower: "770 HP",
    Acceleration: "0-60 mph : 2.8 seconds",
    topSpeed: "217 mph (350 km/h)",
    engineType: "6.5L V12 Naturally Aspirated",
    transmission: "7-Speed Sequential Manual",
    fuelConsumption: "10.5 L/100 km (18.5 mpg-imp; 15.4 mpg-US)",
    emissions: "242 g/km (NEDC)",
    doors: "2",
    seats: "2",
    bodyStyle: "Coupe",
    driveType: "Rear-Wheel Drive",
    fuelType: "Petrol",
  },
  {
    id: 4,
    image: "/images/car06.jpg",
    title: "Model Sela",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat earum sit amet nesciunt blanditiis exercitationem dolor vitae deserunt hic nam.",
    price: "900$",
    horsepower: "770 HP",
    Acceleration: "0-60 mph : 2.8 seconds",
    topSpeed: "217 mph (350 km/h)",
    engineType: "6.5L V12 Naturally Aspirated",
    transmission: "7-Speed Sequential Manual",
    fuelConsumption: "10.5 L/100 km (18.5 mpg-imp; 15.4 mpg-US)",
    emissions: "242 g/km (NEDC)",
    doors: "2",
    seats: "2",
    bodyStyle: "Coupe",
    driveType: "Rear-Wheel Drive",
    fuelType: "Petrol",
  },
]

export default function CarPage({ params }: { params: { id: string } }) {
  const car = cars.find(c => c.id === parseInt(params.id))

  if (!car) {
    notFound()
  }

  const otherCars = cars.filter(c => c.id !== car.id).slice(0, 3)

  return (
    <div className="min-h-screen">
      <div className="relative flex items-center justify-center" style={{ height: '70vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${car.image})` }}
        ></div>
        <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg text-white text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">{car.title}</h1>
          <p className="text-xl mb-4">{car.description}</p>
          <Link href={`/cars/${car.id}/buy`} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-xl transition duration-300 inline-block">
            Rent Now
          </Link>
        </div>
      </div>

      <div className="bg-white py-12 ">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 text-left">Car Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Specifications</h3>
              <ul className="space-y-2">
                <li><strong>Horsepower:</strong> {car.horsepower}</li>
                <li><strong>Acceleration:</strong> {car.Acceleration}</li>
                <li><strong>Top Speed:</strong> {car.topSpeed}</li>
                <li><strong>Engine Type:</strong> {car.engineType}</li>
                <li><strong>Transmission:</strong> {car.transmission}</li>
                <li><strong>Fuel Consumption:</strong> {car.fuelConsumption}</li>
                <li><strong>Emissions:</strong> {car.emissions}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><strong>Doors:</strong> {car.doors}</li>
                <li><strong>Seats:</strong> {car.seats}</li>
                <li><strong>Body Style:</strong> {car.bodyStyle}</li>
                <li><strong>Drive Type:</strong> {car.driveType}</li>
                <li><strong>Fuel Type:</strong> {car.fuelType}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherCars.map(otherCar => (
              <div key={otherCar.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={otherCar.image} alt={otherCar.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{otherCar.title}</h3>
                  <p className="text-gray-600 mb-4">{otherCar.description.substring(0, 100)}...</p>
                  <p className="text-lg font-bold text-green-600 mb-4">{otherCar.price}</p>
                  <a href={`/cars/${otherCar.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block hover:bg-blue-600 transition duration-300">View Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}