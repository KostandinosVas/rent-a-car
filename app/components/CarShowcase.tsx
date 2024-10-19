import Image from "next/image"
import Link from "next/link"


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



const CarShowcase = () => {
    return (
        <div className="car-showcase flex justify-center flex-col items-center m-8 ">
            {cars.map((car) => (
                <div key={car.id} className={`card flex flex-col justify-between xl:${car.id % 2 === 0 ? "flex-row-reverse" : "flex-row"} xl:p-[4rem] shadow-md xl:max-w-[70%] my-8`}>
                    <div className="image flex-1  z-50 ">
                        <Image
                            src={car.image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            alt="Picture of the author"
                            className="rounded-md" />
                    </div>
                    <div className="infos flex-1 flex flex-col justify-center items-start ml-[10%] gap-4">
                        <h3 className="xl:text-3xl text-xl mt-2">{car.title}</h3>
                        <p className="xl:max-w-[70%]">{car.description}</p>
                        <p className="text-green-600">Price : {car.price} /day</p>
                        <p className="text-slate-500 ">Pick color : </p>
                        <div className="pick-color flex justify-between items-center gap-6">
                            <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"> </span>
                            <span  className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></span>
                            <span   className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></span>
                            {/* <div><button className="bg-blue-500 ml-7 text-white px-12 py-2 rounded-lg">Buy</button></div> */}
                            <Link href={`/cars/${car.id}`} className="">
                                <button className="bg-gray-800 text-white mb-2 px-6 py-2 rounded-md">View Details</button>
                            </Link>
                        </div>

                    </div>
                </div>
            ))}

            <Link href="/allCars" className="mt-8">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    Show More Cars
                </button>
            </Link>
        </div>
    )
}

export default CarShowcase