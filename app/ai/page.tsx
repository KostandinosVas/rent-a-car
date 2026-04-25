import React from 'react'
import { FaLeaf, FaRobot, FaRoute, FaChartLine, FaRecycle, FaCloud } from 'react-icons/fa'

type CardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const Card = ({ icon, title, description }: CardProps) => (
  <div className="bg-gray-800 rounded-xl p-6 flex flex-col gap-3 hover:bg-gray-700 transition-colors duration-300">
    <div>{icon}</div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
)

const AiReduce = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-32 px-6 text-center">
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">Smarter, greener driving</p>
        <h1 className="text-5xl font-extrabold mb-4">AI to Reduce Our Footprint</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          High performance and environmental responsibility aren't opposites. Here's how we use artificial intelligence to minimise the impact of every rental.
        </p>
      </div>

      {/* How it works */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">How Our AI Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={<FaRoute className="text-4xl text-blue-400" />}
            title="Smart Route Optimisation"
            description="Our AI analyses real-time traffic, road gradients and weather to suggest the most fuel-efficient route for every journey, cutting unnecessary emissions without adding minutes to your trip."
          />
          <Card
            icon={<FaRobot className="text-4xl text-blue-400" />}
            title="Predictive Maintenance"
            description="Machine learning models continuously monitor engine health, tyre pressure and fluid levels. Catching issues early keeps cars running at peak efficiency and extends their service life."
          />
          <Card
            icon={<FaChartLine className="text-4xl text-blue-400" />}
            title="Driving Behaviour Analytics"
            description="After each rental, anonymised driving data is fed back into our models to identify patterns — hard braking, excessive idling, over-revving — that increase fuel consumption unnecessarily."
          />
          <Card
            icon={<FaLeaf className="text-4xl text-blue-400" />}
            title="Carbon Offset Matching"
            description="For every rental completed, our platform automatically calculates the CO₂ produced and matches it to a verified offset programme, so every drive is net-zero on paper and improving over time."
          />
          <Card
            icon={<FaRecycle className="text-4xl text-blue-400" />}
            title="Fleet Lifecycle Management"
            description="AI helps us decide the optimal time to retire a vehicle and how to responsibly recycle components, reducing waste and ensuring decommissioned cars don't end up in landfill."
          />
          <Card
            icon={<FaCloud className="text-4xl text-blue-400" />}
            title="Emission Reporting Dashboard"
            description="Business customers get access to a real-time dashboard showing their fleet's total emissions, broken down per trip and driver — making sustainability reporting effortless."
          />
        </div>
      </div>

      {/* Impact numbers */}
      <div className="bg-blue-600 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {[
            { value: '18%', label: 'Average Emission Reduction' },
            { value: '12%', label: 'Fuel Saved Per Trip' },
            { value: '100%', label: 'Rentals Carbon Offset' },
            { value: '2030', label: 'Target: Net-Zero Fleet' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold">{value}</p>
              <p className="text-blue-100 mt-1 text-sm uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Drive fast. Tread lightly.</h2>
        <p className="text-gray-400 mb-8">Every car in our fleet is enrolled in our AI reduction programme from day one.</p>
        <a href="/allCars" className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white px-10 py-4 rounded-lg text-lg font-semibold">
          Browse the Fleet
        </a>
      </div>
    </div>
  )
}

export default AiReduce
