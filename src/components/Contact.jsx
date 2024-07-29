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
    <main className='bg-darkGray text-white'id='about'>
        <div className='container py-24 lg:py-36'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {/* left side section */}
        <section className='space-y-7 lg:max-w-[380px]' >

        <motion.h1 variants={fadeUp(0.3)} initial="hidden" whileInView="show" className='text-6xl font-bold relative z-20'>My Story</motion.h1>
        <motion.div variants={fadeUp(0.6)} initial='hidden' whileInView="show" className='h-[4px] w-[30px] bg-primary mt-4'></motion.div>
          <motion.h1 variants={fadeUp(0.4)} initial="hidden" whileInView="show" className='text-2xl md:text-3xl'>
            With Great Sacrifice Comes Success ~ By Immanuel Mathari
          </motion.h1>
          <motion.p variants={fadeUp(0.6)} initial="hidden" whileInView="show" className='text-sm leading-6 opacity-70'>It all began in 2019 when I attended Emobilis Training Institute where I undertook a program called MIT that gave us a solid introduction to Programming and Software Development. Init, we learned the very basics which included HTML, CSS, Bootstrap for Web Development and Kotlin for mobile development. I graduated with a basics in Software development in 2020. 
I proceeded to higher education in JKUAT (Jomo Kenyatta University of Agriculture and Technology) where i undertook a 4 year degree in Information Technology. We were equiped with an array of skills in the Computer World such as a strong grasp of design and structures of algorithms AKA Data Structures, Calculus, Web Application Development, Network Design and Management, Mobile Computing, Software Engineerng, Object Oriented Programming, Database Management Systems ALIAS DBMS, Computer Aided Design, Cloud Computing and Computer Security. 
During my tenure at the institution of higher learning, I did several hackerthons and projects that made me earn an internship opportunity at Discovery Center a company dealing with IoT and later on The Longhorn Publishers. </motion.p>
            <a href='#skills'>

          <motion.button variants={fadeUp(0.8)} initial="hidden" whileInView="show" className='text-primary border border-b-2 border-primary text-xl font-bold p-2 hover:text-black hover:bg-primary hover:translate-x-4 transition-all duration-300 flex items-center gap-4'>My Skillset <FaArrowRight className='text-sm hover:translate-x-1 transition duration-200'/> </motion.button>
            </a>
        </section>
        {/* right side section */}
                <div className='space-y-7'>
                  <motion.p variants={fadeUp(0.2)} initial="hidden" whileInView="show" className='text-3xl'>You can't ever use up creativity, the more you use, more you have it in your mind ~ By Immanuel Mathari</motion.p>
                  <motion.p variants={fadeUp(0.4)} initial="hidden" whileInView="show" className='text-sm leading-6 opacity-60'>
                    
I worked with longhorn publishers to build an elearing platform. The project lasted 2 years within which we undertook massive data processing and creating RESTful APIs to fetch and manipulate the data. We also created the database architecture to house our database. We used MySQL for the DBMS. We integrated the elearning platform with the following technologies; Laravel, NodeJS, ExpressJs, MySQL, React, Tailwind and we were using docker for our integration and deployment. 
In Laravel, we used packages such as Eloquent ORM to manage our database, Laravel Passport for API authentication, Laravel Horizon for queue management. 
In React, we used libraries such as Redux for state management, Axios for HTTP requests, React router for navigation and we used a more secure way of handling forms; FomrLink.
The project pushed me and our team to our limits and that is when I realised the expandability of a human being when fueled with determination and zeal to accomplish a greater task. 
I learned how to work and deliver efficiently with the best coding practices such as writing DRY code and abstracting implementation, adding comments to my code so that the rest of the team can follow up working together cohesively as a team. 
I was glad to be able to learn and polish my skills in the said technologies along with may others we used for the project which made me learn how to learn fast. 
I skimmed through large documentations and got the gist of how to go about complex task within a matter of days. 
                  </motion.p>
                  <div className='grid grid-cols-2 gap-4'>
                    <motion.div variants={fadeUp(0.6)} initial="hidden" whileInView="show" className='flex gap-2 items-center'>
                      <p className='text-6xl text-primary font-bold'>5</p>
                      <p className='font-semibold'>year of Experience</p>
                    </motion.div>
                    <motion.div variants={fadeUp(0.8)} initial="hidden" whileInView="show" className='flex gap-2 items-center'>
                      <p className='text-6xl text-primary font-bold'>23</p>
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