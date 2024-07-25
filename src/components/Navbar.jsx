import React from 'react'
import Logo from '../assets/react.svg'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavMenu = [
    {
        id: 1,
        title: "Services",
        link: "#",
    },
    {
        id: 2,
        title: "Works",
        link: "#"
    },
    {
        id: 3,
        title: "Blog",
        link: "#",
    },
]

const Navbar = () => {
  return (
   <>
    <div className='py-5 bg-gray text-white'>
        <div className='container flex justify-between items-center'>
        <div>
            <img src={Logo} alt="sorry" className='w-16' />
        </div>
        <div>
            <ul className='hidden md:flex justify-center gap-10'>
                {
                    NavMenu.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href={item.link} className='hover:text-primary textxl font-semibold text-white/70 duration-300'>{item.title}</a>
                            </li>
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