import Link from 'next/link'
import Image from 'next/image'

const cars = [
    {
        id: 1,
        image: "/images/car36.jpg",
        title: "Model STR-17",
        description: "A track-bred beast with a naturally aspirated V12, delivering raw power and an unforgettable soundtrack.",
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
        description: "Classic British engineering meets modern supercar performance. Elegant, precise, and thrilling.",
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
        description: "Sculpted for aerodynamic perfection. The Byqan blends futuristic design with blistering straight-line speed.",
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
        description: "A refined grand tourer with a commanding presence — built for those who demand luxury without compromise.",
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

export default function AllCars() {
    return (
        <div className='bg-gradient-to-tl from-blue-900 to-gray-900'>
            <div className=" container mx-auto px-4 py-8 pt-[20vh]">
                <h1 className="text-3xl font-bold mb-6 text-white">All Cars</h1>
                <div className="flex flex-col gap-6">
                    {cars.map((car) => (
                        <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-full sm:w-56 md:w-72 h-48 sm:h-auto">
                                <Image
                                    src={car.image}
                                    width={400}
                                    height={300}
                                    alt={car.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-center gap-2">
                                <h2 className="text-xl font-semibold">{car.title}</h2>
                                <p className="text-gray-600 text-sm">{car.description}</p>
                                <p className="text-blue-500 font-semibold">Price: {car.price} /day</p>
                                <Link href={`/cars/${car.id}`} className="mt-2">
                                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}