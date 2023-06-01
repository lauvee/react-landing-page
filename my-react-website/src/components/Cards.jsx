import React from 'react'
import Beginner from '../assets/beg.png'
import Ps from '../assets/psai.png'
import Js from '../assets/jsnr.png'
import IndividualCard from './IndividualCard'

const Cards = () => {
    return (
        
        <div className='w-full py-[8rem] px-4 bg-white'>
            <div className='max-w-[88%] mx-auto grid md:grid-cols-3 gap-8'>

            <IndividualCard  img={Beginner} courseName={'Beginners Front End'} coursePrice={'50 USD'} coursePriceOld={'85 USD'} instructorName={'Ing. Wolverine'} courseDuration={'7 weeks'}/>

            <IndividualCard  img={Ps} courseName={'Graphic Design Basics'} coursePrice={'40 USD'} coursePriceOld={'60 USD'} instructorName={'Ing. Mike Wazowski'} courseDuration={'8 weeks'}/>

            <IndividualCard  img={Js} courseName={'JavaScript Intermediate'} coursePrice={'60 USD'} coursePriceOld={'75 USD'} instructorName={'Ing. Peter Parker'} courseDuration={'10 weeks'}/>

        </div>

        <div className='flex'>
                <button className='text-[#00E682] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-black hover:scale-105 duration-300'>More Courses ➜</button>
            </div>
            
        </div>
        
    )
}

export default Cards
