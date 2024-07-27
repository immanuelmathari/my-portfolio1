import React from 'react'
import { CiPen } from 'react-icons/ci';
import { FaBoxOpen } from "react-icons/fa";
import { MdComputer } from 'react-icons/md';
import Logo from '../assets/react.svg'
import { motion } from 'framer-motion';

const fadeUp = (delay) => ({
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: delay,
        }
    }
})

const skills = [
    {
        id: 1,
        title: "Product Designer",
        icon: <FaBoxOpen className='text-4xl'/>,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Branding Designer",
        icon: <CiPen className='text-4xl' />,
        delay: 0.4,
    },
    {
        id: 3,
        title: "Web desiger",
        icon: <MdComputer className='text-4xl' />,
        delay: 0.6,
    },
]

const Skills = () => {
  return (
    <div className='bg-gray'>
        {/* card section */}
        <div className='container py-10 text-white space-y-14'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center'>
            {
                skills.map((skill) => {
                    return (
                        // max width makes our cards quite bigger. looks good
                        <motion.div variants={fadeUp(skill.delay)} initial="hidden" whileInView="show" key={skill.id} className='flex items-center bg-white/15 gap-6 px-7 py-12 max-w-[300px] hover:shadow-lg hover:bg-primary hover:text-black hover:cursor-pointer hover:scale-105 duration-300'>
                            {skill.icon}
                            <div className='space-y-3'>
                            <h1 className='text-2xl font-bold'>
                                {skill.title}
                            </h1>
                            <p>5 projects</p>
                                </div>
                            </motion.div>
                    )
                })
            }
        </div>
        {/* Company Logo sextion = brands ive worked with */}
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.7, delay: 0.5}} className='flex gap-5 flex-wrap items-center justify-center'>
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />

        </motion.div>
        </div>

    </div>
  )
}

export default Skills