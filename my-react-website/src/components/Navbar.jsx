import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/qstation_logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div  className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <img className='w-[300px]' src={Logo} alt="/" />
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Education</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'  : 'fixed left-[-100%]'}>
      <img className='w-[200px] p-4' src={Logo} alt="/" />
        <ul className='p-4 uppercase'>
        <li className='border-b border-gray-600 p-4'>Home</li>
        <li className='border-b border-gray-600 p-4'>Company</li>
        <li className='border-b border-gray-600 p-4'>Education</li>
        <li className='border-b border-gray-600 p-4'>About</li>
        <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
