import React from 'react'

interface BreathroomProps {
    title: string
    slogan: string
}


const Breathroom = ({title, slogan}: BreathroomProps) => {
  return (
    <div className='w-full h-[50vh] flex flex-col justify-center items-center'>
        <h3 className='text-6xl'>{title}</h3>
        <p className='text-3xl'>{slogan}</p>
    </div>
  )
}

export default Breathroom