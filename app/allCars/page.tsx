import Link from 'next/link'
import Image from 'next/image'

const cars = [
    {
        id: 1,
        image: "/images/car36.jpg",
        title: "Model STR-17",
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
        id: 5,
        image: "/images/car06.jpg",
        title: "Model Sela",
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
        id: 6,
        image: "/images/car06.jpg",
        title: "Model Sela",
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
        id: 7,
        image: "/images/car06.jpg",
        title: "Model Sela",
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
        id: 8,
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
    {
        id: 9,
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
    {
        id: 10,
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
    {
        id: 11,
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
    {
        id: 12,
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

export default function AllCars() {
    return (
        <div className='bg-gradient-to-tl from-blue-900 to-gray-900'>
            <div className=" container mx-auto px-4 py-8 pt-[20vh]">
                <h1 className="text-3xl font-bold mb-6 text-white">All Cars</h1>
                <div className="flex flex-col gap-6">
                    {cars.map((car) => (
                        <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-row">
                            <div className="flex-shrink-0 w-56 sm:w-72">
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