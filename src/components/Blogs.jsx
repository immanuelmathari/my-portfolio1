import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const blogs = [
    {
        id: 1,
        title: 'lorem ipsum',
        date: 'July 27, 2024',
    },
    {
        id: 2,
        title: 'lorem ipsum',
        date: 'July 27, 2024',
    },
    {
        id: 3,
        title: 'lorem ipsum',
        date: 'July 27, 2024',
    },
    {
        id: 4,
        title: 'lorem ipsum',
        date: 'July 27, 2024',
    },
]

const fadeUp = (delay) => ({
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: delay,
        },
    },
});

const Blogs = () => {
  return (
    <div className='bg-gray text-white py-14'>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-6'>
                <section className='space-y-7 lg:max-w-[300px]'>
                    <motion.p variants={fadeUp(0.2)} initial="hidden" whileInView="show" className='text-sm opacity-50 tracking-widest font-serif translate-y-3'>
                        Blogs
                    </motion.p>
                    <motion.h1 variants={fadeUp(0.4)} initial="hidden" whileInView="show"  className='text-2xl lg:text-3xl'>
                        Recent Blogs
                    </motion.h1>
                    <motion.p variants={fadeUp(0.6)} initial="hidden" whileInView="show"  className='text-sm leading-6 opacity-70'>
                        Lorem ipsum dolor sit amet consectetur adipisicin consectetur
                    </motion.p>
                    <button className='text-primary rounded-md border-2 border-black text-xl font-bold p-1 flex items-center gap-4 group bg-darkGray hover:bg-primary hover:border-3 hover:text-black transition-all hover:translate-x-4 duration-300'>
                        Explore More
                        <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' />
                    </button>
                </section>
                <section className='col-span-2 lg:px-20'>
                    <div className='space-y-10'>

                    </div>
                    {/* Blogs card section  */}
                    {
                        blogs.map((blog) => {
                            return (
                    <motion.div variants={fadeUp(blog.delay)} initial="hidden" whileInView="show"  key={blog.id} className='flex items-center justify-between border-b-2 border-gray pb-4'>
                        <p className='text-sm opacity-65'>{blog.date}</p>
                        <p className='text-lg font-bold'> {blog.title} ... </p>
                        <FaArrowRight className='text-xl text-primary' />
                    </motion.div>
                            )
                        })
                    }
                </section>
            </div>
        </div>
    </div>
  )
}

export default Blogs