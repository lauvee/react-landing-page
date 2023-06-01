import React from 'react'
import Raja from '../assets/raja.jpg'

const Presentation = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[88%] mx-auto grid md:grid-cols-2 gap-5'>
                <img className='w-[500px] mx-auto my-4 rounded-md' src={Raja} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00E682] font-bold text-xl'>Our Solutions</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Face the future with confidence.</h1>
                    <p >Whether you’re an individual looking to learn Javascript to advance your career or an enterprise team looking to cut cycle times, speed up onboarding, or give your teams the skills to realize your strategies, we remove the challenges and roadblocks slowing you down. We’re advancing the world’s tech workforce, and that starts with making your work more efficient and effective—and giving you more to celebrate.</p>
                    <button className='text-[#00E682] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black md:mx-0 hover:scale-105 duration-300'>Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Presentation
