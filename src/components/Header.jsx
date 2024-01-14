import { useEffect } from 'react'
import Banner1 from '../images/banner1.jpeg'
import Banner2 from '../images/banner2.jpeg'
import Banner3 from '../images/banner3.jpeg'
import Banner4 from '../images/banner4.webp'
import Banner5 from '../images/banner5.webp'
import Banner6 from '../images/banner6.jpg'
import Banner7 from '../images/banner7.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"

const Header = ({title, image, type}) => {
    const images = [Banner1, Banner2, Banner3, Banner3, Banner4, Banner5, Banner6, Banner7];
    
    useEffect(() => {
        Aos.init({duration: 700, once: true})
    }, [])

    return (
        <div className='w-full h-[100vh]' data-aos="fade-up">
            <div className="realtive w-full h-full">
                <img src={image ?? images[Math.floor(Math.random() * images.length)]} alt="" className='w-full h-full object-cover'/>
            </div>   
            <div className="absolute w-full h-full flex flex-col items-center justify-center top-0 z-8 bg-gradient-to-t from-black to-transparent pt-40 2xl:pt-20 px-4">
                <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>{title}</h1>
            </div>         
        </div>
    )
}

export default Header
