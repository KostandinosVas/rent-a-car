import React from 'react'
import { FaBolt, FaShieldAlt, FaSatelliteDish, FaTachometerAlt, FaMicrochip, FaCarCrash } from 'react-icons/fa'

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-gray-800 rounded-xl p-6 flex flex-col gap-3 hover:bg-gray-700 transition-colors duration-300">
    <div>{icon}</div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
)

const Technology = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-32 px-6 text-center">
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">Under the hood</p>
        <h1 className="text-5xl font-extrabold mb-4">Engineering the Future of Speed</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Every car in our fleet represents the pinnacle of automotive technology. Here's what makes them extraordinary.
        </p>
      </div>

      {/* Feature grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Core Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<FaBolt className="text-4xl text-blue-400" />}
            title="Hybrid & Electric Powertrains"
            description="Our newest additions pair combustion engines with high-voltage electric motors, delivering instant torque and lower emissions without sacrificing top-end performance."
          />
          <FeatureCard
            icon={<FaTachometerAlt className="text-4xl text-blue-400" />}
            title="Active Aerodynamics"
            description="Adaptive rear wings, active diffusers and front splitters automatically adjust at speed to maximise downforce in corners and reduce drag on straights."
          />
          <FeatureCard
            icon={<FaMicrochip className="text-4xl text-blue-400" />}
            title="Drive Mode Control Units"
            description="Dedicated ECUs allow drivers to switch between road, sport, race and wet modes in milliseconds, re-mapping throttle response, suspension stiffness and traction control."
          />
          <FeatureCard
            icon={<FaShieldAlt className="text-4xl text-blue-400" />}
            title="Carbon Fibre Monocoques"
            description="Structural passenger cells made entirely from aerospace-grade carbon fibre provide maximum rigidity at minimal weight, directly improving both safety and handling."
          />
          <FeatureCard
            icon={<FaSatelliteDish className="text-4xl text-blue-400" />}
            title="Connected Telemetry"
            description="Live vehicle telemetry is streamed via 5G to our service team so any anomaly can be flagged and resolved before your rental is impacted — no surprises on the road."
          />
          <FeatureCard
            icon={<FaCarCrash className="text-4xl text-blue-400" />}
            title="Advanced Driver Assistance"
            description="Every car ships standard with lane-keep assist, adaptive cruise control, automatic emergency braking and blind-spot monitoring so you stay in control at any speed."
          />
        </div>
      </div>

      {/* Stats banner */}
      <div className="bg-blue-600 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {[
            { value: '770+', label: 'Horsepower' },
            { value: '2.8s', label: '0–60 mph' },
            { value: '217 mph', label: 'Top Speed' },
            { value: '100%', label: 'Inspected Before Each Rental' },
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
        <h2 className="text-3xl font-bold mb-4">Ready to experience it yourself?</h2>
        <p className="text-gray-400 mb-8">Browse our full fleet and book your supercar today.</p>
        <a href="/allCars" className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white px-10 py-4 rounded-lg text-lg font-semibold">
          View All Cars
        </a>
      </div>
    </div>
  )
}

export default Technology