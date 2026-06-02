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
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const storedInfo = localStorage.getItem('rentalInfo')
        if (storedInfo) {
            setRentalInfo(JSON.parse(storedInfo))
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY <= 90)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!rentalInfo) return null

    return (
        <div
            className={`fixed top-[10%] right-0 w-[min(260px,80vw)] bg-white p-3 rounded-l-lg shadow-lg text-sm z-40 transition-all duration-300 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
            }`}
        >
            <h3 className="text-lg font-semibold mb-2">Your Recent Rental</h3>
            <p><strong>Car:</strong> {rentalInfo.carTitle}</p>
            <p><strong>From:</strong> {rentalInfo.startDate}</p>
            <p><strong>To:</strong> {rentalInfo.endDate}</p>
            <p><strong>Duration:</strong> {rentalInfo.rentalDays} day(s)</p>
            <p><strong>Total Cost:</strong> ${rentalInfo.totalCost}</p>
        </div>
    )
}