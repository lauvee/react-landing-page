import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00E682] md:text-4xl sm:text-3xl text-3xl font-bold p-2'>The fastest way to employment in the IT sector</p>
        <h1 className='mx-1 md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 py-4'>We offer the best IT Courses</h1>
        <div className='flex justify-center items-center'>
            <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['Your ticket to the world of IT business', 'Educate yourself for the job of your future', 'Become competitive in the market with our IT training']} typeSpeed={40} backSpeed={30} loop/>
        </div>
        <button className='bg-[#00E682] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
