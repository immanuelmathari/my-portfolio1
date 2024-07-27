import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

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

const Blogs = () => {
  return (
    <div className='bg-darkGray text-white py-14'>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-6'>
                <section className='space-y-7 lg:max-w-[300px]'>
                    <p className='text-sm opacity-50 tracking-widest font-serif translate-y-3'>
                        Blogs
                    </p>
                    <h1 className='text-2xl lg:text-3xl'>
                        Recent Blogs
                    </h1>
                    <p className='text-sm leading-6 opacity-70'>
                        Lorem ipsum dolor sit amet consectetur adipisicin consectetur
                    </p>
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
                    <div key={blog.id} className='flex items-center justify-between border-b-2 border-gray pb-4'>
                        <p className='text-sm opacity-65'>{blog.date}</p>
                        <p className='text-lg font-bold'> {blog.title} ... </p>
                        <FaArrowRight className='text-xl text-primary' />
                    </div>
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