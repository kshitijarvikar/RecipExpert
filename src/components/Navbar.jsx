import React, { useState, useEffect } from 'react'
import Logo from '../images/logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai' 
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    Aos.init({duration: 700, once: true})
  }, [])

  return (
    <>
      <div className='bg-black opacity-80 w-full fixed z-10' data-aos="fade-down">
        <nav className="flex justify-between items-center py-2 md:py-3 px-5 md:px-6 w-full">
          <a href='/' className='flex justify-center items-center text-white cursor-pointer text-lg'>
            <img src={Logo} alt="logo" className='h-8 w-8 lg:h-14 lg:w-14 hidden md:block'/>
            Recip<span>Expert</span>
          </a>

          <ul className="hidden md:flex text-white gap-6 text-lg">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Explore</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>

          <button className='block md:hidden text-white text-2xl' onClick={() => setOpen(cur => !cur)}> {/* setOpen(!open) */}
            {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
          </button>
        </nav>
        <div className={`${open ? "flex" : "hidden"} bg-black py-10 px-4 flex-col text-white gap-6 md:hidden absolute top-11 right-0 w-[30%] opacity-80 items-center`}>
          <Link to="/">Home</Link>
          <Link to="/recipes">Explore</Link>
          <Link to="/favorites">Favorites</Link>
        </div>        
        
      </div>

    </>
  )
}

export default Navbar
