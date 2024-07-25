import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <main className='bg-darkGray text-white'>
        <div className='container py-24 lg:py-36'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                 {/* text section */}
        <section className='space-y-7 lg:max-w-[380px]'>
          <p className='text-sm opacity-70 tracking-widest font-serif translate-y-3'>- Contact</p>
          <h1 className='text-2xl md:text-3xl'>
            Any type of Query and discussion
          </h1>
          <p className='text-sm leading-6 opacity-70'>lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.</p>
          <button className='text-primary border border-b-2 border-primary text-xl font-bold p-2 hover:text-black hover:bg-primary hover:translate-x-4 transition-all duration-300 flex items-center gap-4'>Emunah Technologies <FaArrowRight className='text-sm hover:translate-x-1 transition duration-200'/> </button>
        </section>
                <div></div>
            </div>
        </div>
    </main>
  )
}

export default Contact