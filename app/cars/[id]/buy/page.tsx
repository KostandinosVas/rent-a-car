'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'

// Move cars array outside of the component
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

export default function RentCarForm({ params }: { params: { id: string } }) {
    const router = useRouter()
    const car = cars.find(c => c.id === parseInt(params.id))
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // Add phone to the formData state
        startDate: '',
        endDate: '',
    })
    const [showPopup, setShowPopup] = useState(false)
    const [rentalDays, setRentalDays] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        if (formData.startDate && formData.endDate && car) {
            const start = new Date(formData.startDate)
            const end = new Date(formData.endDate)
            const diffTime = Math.abs(end.getTime() - start.getTime())
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
            setRentalDays(diffDays)

            const dailyRate = parseInt(car.price.replace('$', ''))
            setTotalCost(diffDays * dailyRate)
        }
    }, [formData.startDate, formData.endDate, car])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log('Form submitted:', formData)

        // Store rental info in localStorage
        const rentalInfo = {
            carTitle: car?.title,
            startDate: formData.startDate,
            endDate: formData.endDate,
            totalCost: totalCost,
            rentalDays: rentalDays
        }
        localStorage.setItem('rentalInfo', JSON.stringify(rentalInfo))

        // Show popup
        setShowPopup(true)
        // Redirect to home page after 2 seconds
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }

    if (!car) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gray-900 py-12 flex items-center justify-center relative">
            <div className="container mx-auto max-w-4xl"> {/* Increased max-width */}
                <h1 className="text-3xl font-bold mb-4 text-center text-white">Rent {car.title}</h1>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="flex flex-col md:flex-row md:space-x-8"> {/* Added flex container */}
                        <div className="md:w-1/2 mb-4 md:mb-0"> {/* Left column */}
                            <h2 className="text-xl font-semibold mb-2">Car Details</h2>
                            <img src={car.image} alt={car.title} className="w-full h-48 object-cover mb-4 rounded" />
                            <p className="mb-2">{car.description}</p>
                            <p className="text-lg font-bold text-green-600">Price: {car.price} /day</p>
                        </div>
                        <div className="md:w-1/2"> {/* Right column */}
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Grid for form fields */}
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name" type="text" placeholder="Your Name" name="name"
                                            value={formData.name} onChange={handleChange} required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email" type="email" placeholder="Your Email" name="email"
                                            value={formData.email} onChange={handleChange} required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="phone" type="tel" placeholder="Your Phone Number" name="phone"
                                            value={formData.phone} onChange={handleChange} required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">Start Date</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="startDate" type="date" name="startDate"
                                            value={formData.startDate} onChange={handleChange} required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">End Date</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="endDate" type="date" name="endDate"
                                            value={formData.endDate} onChange={handleChange} required
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Rent Now
                                    </button>
                                </div>
                            </form>
                            {rentalDays > 0 && (
                                <div className="mt-4 p-4 bg-gray-100 rounded">
                                    <h3 className="text-lg font-semibold mb-2">Rental Summary</h3>
                                    <p>Duration: {rentalDays} day{rentalDays !== 1 ? 's' : ''}</p>
                                    <p className="font-bold">Total Cost: ${totalCost}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold mb-4">Rent Completed!</h2>
                        <p>Your rental for {car.title} has been confirmed.</p>
                        <p className="mt-2">Redirecting to your details...</p>
                    </div>
                </div>
            )}
        </div>
    )
}