'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

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
export default function RentalDetails({ params }: { params: { id: string } }) {
    const router = useRouter()
    const car = cars.find(c => c.id === parseInt(params.id))
    if (!car) {
        return <div>Car not found</div>
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 flex items-center justify-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-2xl w-full">
                <h1 className="text-3xl font-bold mb-6 text-center">{car.title}</h1>
                <img src={car.image} alt={car.title} className="w-full h-64 object-cover mb-6 rounded" />
                <div className="grid grid-cols-2 gap-4">
                    <p><strong>Price:</strong> {car.price}</p>
                    <p><strong>Horsepower:</strong> {car.horsepower}</p>
                    <p><strong>Acceleration:</strong> {car.Acceleration}</p>
                    <p><strong>Top Speed:</strong> {car.topSpeed}</p>
                    <p><strong>Engine Type:</strong> {car.engineType}</p>
                    <p><strong>Transmission:</strong> {car.transmission}</p>
                    <p><strong>Fuel Consumption:</strong> {car.fuelConsumption}</p>
                    <p><strong>Emissions:</strong> {car.emissions}</p>
                    <p><strong>Doors:</strong> {car.doors}</p>
                    <p><strong>Seats:</strong> {car.seats}</p>
                    <p><strong>Body Style:</strong> {car.bodyStyle}</p>
                    <p><strong>Drive Type:</strong> {car.driveType}</p>
                    <p><strong>Fuel Type:</strong> {car.fuelType}</p>
                </div>
                <p className="mt-6"><strong>Description:</strong> {car.description}</p>
                <button
                    onClick={() => router.push('/cars')}
                    className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Back to Cars
                </button>
            </div>
        </div>
    )
}