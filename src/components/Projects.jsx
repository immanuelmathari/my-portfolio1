import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Person from '../assets/6.png';
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
            title: "Project 1",
            img: Person,
            delay: 0.2,
        },
        {
            id: 2,
            title: "Project 2",
            img: Person,
            delay: 0.4,
        },
        {
            id: 3,
            title: "Project 3",
            img: Person,
            delay: 0.6,
        },
        {
            id: 4,
            title: "Project 4",
            img: Person,
            delay: 0.8,
        }
    ]
  return (
    <div className='bg-darkGray text-white py-10'>

    <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6'>
            <section className='space-y-7 lg:max-w-[380px]'>
                <motion.p variants={fadeUp(0.2)} initial="hidden" whileInView="show" className='text-sm opacity-50 tracking-widest font-serif translate-y-3'>Projects</motion.p>
                <motion.h1  variants={fadeUp(0.4)} initial="hidden" whileInView="show" className='text-2xl lg:text-3xl'>All creating works, seleted projects.</motion.h1>
                <motion.p  variants={fadeUp(0.6)} initial="hidden" whileInView="show" className='text-sm leading-6 opacity-70'>Lorem ipsum dolor si amet consectetur apidisicing elit mdolor sit amet consectetur adipiicing elit molestiae.</motion.p>
                <motion.button  variants={fadeUp(0.8)} initial="hidden" whileInView="show" className='text-primary rounded-md border-2 border-black text-xl font-bold p-1 flex items-center gap-4 group bg-darkGray hover:bg-primary hover:border-3 hover:text-black transition-all hover:translate-x-4 duration-300'>Explore My coding journey
                    <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' />
                </motion.button>
            </section>
            {
                projects.map((project) => {
                    return (
                        <motion.div  variants={fadeUp(project.delay)} initial="hidden" whileInView="show" key={project.id} className='space-y-4 p-4 justify-center'>
                            <img src={project.img} alt="" className='w-full hover:scale-110 hover:shadow-lg duration-300 cursor-pointer' />
                            <p className='text-3xl font-semibold'>{project.title}</p>
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