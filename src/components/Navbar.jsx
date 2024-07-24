import React from 'react'
import Logo from '../assets/react.svg'

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
            <ul className='flex justify-center gap-5'>
                {
                    NavMenu.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        )
                    }) 
                }
            </ul>
        </div>
        </div>
    </div>
   </>
  )
}

export default Navbar