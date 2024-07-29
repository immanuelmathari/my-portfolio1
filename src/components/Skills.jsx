import React from 'react'
import { CiPen } from 'react-icons/ci';
import { FaArrowRight, FaBoxOpen } from "react-icons/fa";
import { MdComputer } from 'react-icons/md';
import Logo from '../assets/one.svg'
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
        title: "FullStack Projects",
        description: "3 Projects",
        icon: <FaBoxOpen className='text-4xl'/>,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Laravel Projects",
        description: "5 Projects",
        icon: <CiPen className='text-4xl' />,
        delay: 0.4,
    },
    {
        id: 3,
        title: "Flutter Projects",
        description: "5 Projects",
        icon: <MdComputer className='text-4xl' />,
        delay: 0.6,
    },
    
    {
        id: 4,
        title: "React Projects",
        description: "8 Projects",
        icon: <MdComputer className='text-4xl' />,
        delay: 0.6,
    },
    {
        id: 5,
        title: "TypeScript Projects",
        description: "3 Projects",
        icon: <MdComputer className='text-4xl' />,
        delay: 0.6,
    },
    {
        id: 6,
        title: "Data Structure Algorithms",
        description: "137 Algorithms",
        icon: <MdComputer className='text-4xl' />,
        delay: 0.6,
    },
]

const Skills = () => {
  return (
    <div className='bg-gray' id='skills'>
        {/* card section */}
        <div className='container py-10 text-white space-y-14'>
        <motion.h1 variants={fadeUp(0.3)} initial="hidden" whileInView="show" className='text-6xl font-bold relative z-20'>My Skillset</motion.h1>
        <motion.div variants={fadeUp(0.6)} initial='hidden' whileInView="show" className='h-[4px] w-[30px] bg-primary mt-4'></motion.div>
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
                            <p>{skill.description}</p>
                                </div>
                            </motion.div>
                    )
                })
            }
        </div>
        {/* Company Logo sextion = brands ive worked with */}
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.7, delay: 0.5}} className='flex gap-5 flex-wrap items-center justify-center'>
            <img src={Logo} alt='company logo' className='bg-white/15 p-4' />

        </motion.div>
        <a href='#projects'>

        <motion.button  variants={fadeUp(0.8)} initial="hidden" whileInView="show" className='text-primary rounded-md border-2 border-black mt-4 text-xl font-bold p-1 flex items-center gap-4 group bg-darkGray hover:bg-primary hover:border-3 hover:text-black transition-all hover:translate-x-4 duration-300'>Explore My coding journey
                    <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' />
                </motion.button>
        </a>
        </div>

    </div>
  )
}

export default Skills