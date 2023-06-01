import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[88%] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Would you like to have more information about courses and trainings?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='mx-3 p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email: ' />
                        <button className='bg-[#00E682] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>Notify me</button>
                    </div>
                    <p className='mx-3'>We care about the protection of your data. Read our <span className='text-[#00E682]'> Privacy policy. </span></p>
                </div>

            </div>
        </div>
    )
}

export default Newsletter
