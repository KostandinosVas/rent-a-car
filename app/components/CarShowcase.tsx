import Image from "next/image"
import Link from "next/link"


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



const CarShowcase = () => {
    return (
        <div className="car-showcase flex justify-center flex-col items-center m-8">
            {cars.map((car) => (
                <div key={car.id} className={`card flex justify-between ${car.id % 2 === 0 ? "flex-row-reverse" : "flex-row"} p-[4rem] shadow-md max-w-[70%] my-6`}>
                    <div className="image flex-1   ">
                        <Image
                            src={car.image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            alt="Picture of the author"
                            className="rounded-md" />
                    </div>
                    <div className="infos flex-1 flex flex-col justify-center items-start ml-[10%] gap-2">
                        <h3 className="text-3xl ">{car.title}</h3>
                        <p className="max-w-[70%]">{car.description}</p>
                        <p className="text-green-600">Price : {car.price}</p>
                        <p className="text-slate-500 ">Pick color : </p>
                        <div className="pick-color flex justify-between items-center gap-4">
                            <button className="w-6 h-6 bg-red-500 rounded-full"></button>
                            <button className="w-6 h-6 bg-blue-500 rounded-full"></button>
                            <button className="w-6 h-6 bg-green-500 rounded-full"></button>
                            <div><button className="bg-blue-500 ml-7 text-white px-12 py-2 rounded-lg">Buy</button></div>
                        </div>
                        <Link href={`/cars/${car.id}`} className="mt-4">
                            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg">View Details</button>
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default CarShowcase