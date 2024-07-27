import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Person from '../assets/6.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            img: Person,
        },
        {
            id: 2,
            title: "Project 2",
            img: Person,
        },
        {
            id: 3,
            title: "Project 3",
            img: Person,
        },
        {
            id: 4,
            title: "Project 4",
            img: Person,
        }
    ]
  return (
    <div className='bg-darkGray text-white py-10'>

    <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6'>
            <section className='space-y-7 lg:max-w-[380px]'>
                <p className='text-sm opacity-50 tracking-widest font-serif translate-y-3'>Projects</p>
                <h1 className='text-2xl lg:text-3xl'>All creating works, seleted projects.</h1>
                <p className='text-sm leading-6 opacity-70'>Lorem ipsum dolor si amet consectetur apidisicing elit mdolor sit amet consectetur adipiicing elit molestiae.</p>
                <button className='text-primary rounded-md border-2 border-black text-xl font-bold p-1 flex items-center gap-4 group bg-darkGray hover:bg-primary hover:border-3 hover:text-black transition-all hover:translate-x-4 duration-300'>Explore My coding journey
                    <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' />
                </button>
            </section>
            {
                projects.map((project) => {
                    return (
                        <div key={project.id} className='space-y-4 p-4 justify-center'>
                            <img src={project.img} alt="" className='w-full hover:scale-110 hover:shadow-lg duration-300 cursor-pointer' />
                            <p className='text-3xl font-semibold'>{project.title}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </div>
  )
}

export default Projects