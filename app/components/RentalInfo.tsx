'use client'

import { useState, useEffect } from 'react'

interface RentalInfo {
    carTitle: string;
    startDate: string;
    endDate: string;
    totalCost: number;
    rentalDays: number;
}

export default function RentalInfoBox() {
    const [rentalInfo, setRentalInfo] = useState<RentalInfo | null>(null)

    useEffect(() => {
        const storedInfo = localStorage.getItem('rentalInfo')
        if (storedInfo) {
            setRentalInfo(JSON.parse(storedInfo))
        }
    }, [])

    if (!rentalInfo) return null

    return (
        <div className="fixed top-[13%] -right-2 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Your Recent Rental</h3>
            <p><strong>Car:</strong> {rentalInfo.carTitle}</p>
            <p><strong>From:</strong> {rentalInfo.startDate}</p>
            <p><strong>To:</strong> {rentalInfo.endDate}</p>
            <p><strong>Duration:</strong> {rentalInfo.rentalDays} day(s)</p>
            <p><strong>Total Cost:</strong> ${rentalInfo.totalCost}</p>
        </div>
    )
}