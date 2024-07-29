import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Twitter from '../assets/twitter.png';
import Laravel from '../assets/project Management.png';
import RealEstate from '../assets/real estate.png';
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

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "NextJs - A clone of Social Media App twitter(X)",
            link: 'https://next-x-sable.vercel.app/',
            img: Twitter,
            delay: 0.2,
        },
        {
            id: 2,
            title: "Project Management - Laravel React Application",
            link: 'https://projectmanager.fly.dev/',
            img: Laravel,
            delay: 0.4,
        },
        {
            id: 3,
            title: "Real Estate - MERN Stack Application",
            link: 'https://real-estate-mern-stack-a6op.onrender.com/',
            img: RealEstate,
            delay: 0.6,
        },
    ]
  return (
    <div className='bg-darkGray text-white py-10' id='projects'>

    <div className='container'>
    
    <motion.h1 variants={fadeUp(0.3)} initial="hidden" whileInView="show" className='text-6xl font-bold relative z-20'>My Projects</motion.h1>
        <motion.div variants={fadeUp(0.6)} initial='hidden' whileInView="show" className='h-[4px] w-[30px] bg-primary mt-4'></motion.div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6'>
            <section className='space-y-7 lg:max-w-[380px]'>
                <motion.p variants={fadeUp(0.2)} initial="hidden" whileInView="show" className='text-sm opacity-50 tracking-widest font-serif translate-y-3'>Projects</motion.p>
                <motion.h1  variants={fadeUp(0.4)} initial="hidden" whileInView="show" className='text-2xl lg:text-3xl'>All works, are created with a touch of genius.</motion.h1>
                <motion.p  variants={fadeUp(0.6)} initial="hidden" whileInView="show" className='text-sm leading-6 opacity-70'>I believe in giving my best at whatever I touch to do. <br/> Quality, effectiveness and efficiency is the weakness of my hands</motion.p>
                <a href='https://github.com/immanuelmathari/' target='_blank'>
                <motion.button  variants={fadeUp(0.8)} initial="hidden" whileInView="show" className='text-primary mt-4 rounded-md border-2 border-black text-xl font-bold p-1 flex items-center gap-4 group bg-darkGray hover:bg-primary hover:border-3 hover:text-black transition-all hover:translate-x-4 duration-300'>Explore My GitHub Page
                    <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' />
                </motion.button>
                </a>
            </section>
            {
                projects.map((project) => {
                    return (
                        <motion.div  variants={fadeUp(project.delay)} initial="hidden" whileInView="show" key={project.id} className='space-y-4 p-4 justify-center'>
                            <div>
                            <p className='text-3xl sm:text-xl md:text-2xl mb-4 font-semibold'>{project.title}</p>
                            </div>
                            <div >
                            <a href={project.link} target='_blank'>
                            <img src={project.img} alt="" className='w-full hover:scale-110 hover:shadow-lg duration-300 cursor-pointer' />
                            </a>
                            </div>
                        </motion.div>
                    )
                })
            }
        </div>
    </div>
    </div>
  )
}

export default Projects