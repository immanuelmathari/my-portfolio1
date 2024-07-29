import React from 'react'
import Logo from '../assets/roundmanu.jpg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion } from "framer-motion"


const NavMenu = [
    {
        id: 1,
        title: "About Me",
        link: "#about",
        delay: 0.3,
    },
    {
        id: 2,
        title: "My SKillset",
        link: "#skills",
        delay: 0.4,
    },
    {
        id: 3,
        title: "My Projects",
        link: "#projects",
        delay: 0.5,
    },
    
    {
        id: 4,
        title: "Mail Me",
        link: "mailto:immanuelmathari@gmail.com",
        delay: 0.5,
    },
    
    {
        id: 5,
        title: "Call Me",
        link: "tel:+254797952810",
        delay: 0.5,
    },

]

const container = (delay) => ({
    hidden: {
        opacity: 0,
        x: -100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
});

const Navbar = () => {
  return (
   <>
    <div className='py-5 bg-gray text-white'>
        <div className='container flex justify-between items-center'>
        <div>
            <motion.img initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} src={Logo} alt="sorry" className='w-16' />
        </div>
        <div>
            <ul className='hidden md:flex justify-center gap-10'>
                {
                    NavMenu.map((item) => {
                        return (
                            <motion.li variants={container(item.delay)} initial="hidden" whileInView="show" key={item.id}>
                                <a href={item.link} className='hover:text-primary textxl font-semibold text-white/70 duration-300'>{item.title}</a>
                            </motion.li>
                        )
                    }) 
                }
            </ul>
            <div className='md:hidden'>
                <GiHamburgerMenu className='text-3xl' />
            </div>
        </div>
        </div>
    </div>
   </>
  )
}

export default Navbar