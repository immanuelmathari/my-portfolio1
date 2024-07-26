import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <main className='bg-darkGray text-white'>
        <div className='container py-24 lg:py-36'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {/* left side section */}
        <section className='space-y-7 lg:max-w-[380px]'>
          <p className='text-sm opacity-70 tracking-widest font-serif translate-y-3'>- Contact</p>
          <h1 className='text-2xl md:text-3xl'>
            Any type of Query and discussion
          </h1>
          <p className='text-sm leading-6 opacity-70'>lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.</p>
          <button className='text-primary border border-b-2 border-primary text-xl font-bold p-2 hover:text-black hover:bg-primary hover:translate-x-4 transition-all duration-300 flex items-center gap-4'>Emunah Technologies <FaArrowRight className='text-sm hover:translate-x-1 transition duration-200'/> </button>
        </section>
        {/* right side section */}
                <div className='space-y-7'>
                  <p className='text-3xl'>You can't use up creativity, the more you use, more you have in your signifant mind.</p>
                  <p className='text-sm leading-6 opacity-60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis itaque blanditiis dacilis dugiat ratione! Eaque dolorum, repellat possims, eveniet asperiores voluptatibus facere excepturi reiciendis quo duga aliquam. Est, laboriosam temetur
                  </p>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex gap-2 items-center'>
                      <p className='text-6xl text-primary font-bold'>14</p>
                      <p className='font-semibold'>year of Experience</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <p className='text-6xl text-primary font-bold'>123</p>
                      <p className='font-semibold'>completed projects</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Contact