import { notFound } from 'next/navigation'
import Image from 'next/image'



const cars = [
  {
    id: 1,
    image: "/images/car36.jpg",
    title: "Model STR-17",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat earum sit amet nesciunt blanditiis exercitationem dolor vitae deserunt hic nam.",
    price: "50.000$"
  },
  {
    id: 2,
    image: "/images/car22.jpg",
    title: "Model GtW Cooper",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat earum sit amet nesciunt blanditiis exercitationem dolor vitae deserunt hic nam.",
    price: "30.000$"
  },
  {
    id: 3,
    image: "/images/car04.jpg",
    title: "Model Byqan",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat earum sit amet nesciunt blanditiis exercitationem dolor vitae deserunt hic nam.",
    price: "90.000$"
  },
  {
    id: 4,
    image: "/images/car06.jpg",
    title: "Model Sela",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat earum sit amet nesciunt blanditiis exercitationem dolor vitae deserunt hic nam.",
    price: "90.000$"
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
          <p className="text-3xl font-bold text-green-400 mb-6">Price: {car.price}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-xl transition duration-300">Buy Now</button>
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