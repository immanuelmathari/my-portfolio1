import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

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
    }
  }
})

const Contact = () => {
  return (
    <main className='bg-darkGray text-white'>
        <div className='container py-24 lg:py-36'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {/* left side section */}
        <section className='space-y-7 lg:max-w-[380px]'>
          <motion.p variants={fadeUp(0.2)} initial="hidden" whileInView="show" className='text-sm opacity-70 tracking-widest font-serif translate-y-3'>- Contact</motion.p>
          <motion.h1 variants={fadeUp(0.4)} initial="hidden" whileInView="show" className='text-2xl md:text-3xl'>
            Any type of Query and discussion
          </motion.h1>
          <motion.p variants={fadeUp(0.6)} initial="hidden" whileInView="show" className='text-sm leading-6 opacity-70'>lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio, eos saepe dolore est asperiores.</motion.p>
          <motion.button variants={fadeUp(0.8)} initial="hidden" whileInView="show" className='text-primary border border-b-2 border-primary text-xl font-bold p-2 hover:text-black hover:bg-primary hover:translate-x-4 transition-all duration-300 flex items-center gap-4'>Emunah Technologies <FaArrowRight className='text-sm hover:translate-x-1 transition duration-200'/> </motion.button>
        </section>
        {/* right side section */}
                <div className='space-y-7'>
                  <motion.p variants={fadeUp(0.2)} initial="hidden" whileInView="show" className='text-3xl'>You can't use up creativity, the more you use, more you have in your signifant mind.</motion.p>
                  <motion.p variants={fadeUp(0.4)} initial="hidden" whileInView="show" className='text-sm leading-6 opacity-60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis itaque blanditiis dacilis dugiat ratione! Eaque dolorum, repellat possims, eveniet asperiores voluptatibus facere excepturi reiciendis quo duga aliquam. Est, laboriosam temetur
                  </motion.p>
                  <div className='grid grid-cols-2 gap-4'>
                    <motion.div variants={fadeUp(0.6)} initial="hidden" whileInView="show" className='flex gap-2 items-center'>
                      <p className='text-6xl text-primary font-bold'>14</p>
                      <p className='font-semibold'>year of Experience</p>
                    </motion.div>
                    <motion.div variants={fadeUp(0.8)} initial="hidden" whileInView="show" className='flex gap-2 items-center'>
                      <p className='text-6xl text-primary font-bold'>123</p>
                      <p className='font-semibold'>completed projects</p>
                    </motion.div>
                  </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Contact