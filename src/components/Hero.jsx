import React from 'react';
import Person from '../assets/immah.jpg';
import { FaArrowRight, FaGithub, FaMailBulk } from 'react-icons/fa';
import { FaDribbble, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"
import { MdCallEnd, MdEmail } from 'react-icons/md';


const container = (delay) => ({
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x:0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return ( 
    <main className='bg-gray text-white'>
        <div className='container'>
          {/* note the use of overflow y hidden */}
          <div className='grid grid-cols-1 lg:overflow-y-hidden lg:overflow-x-hidden md:grid-cols-3 min-h-[600px] place-items-center gap-10'>
        {/* image section */}
        <div className='grid col-span-2 relative h-full justify-center'>
        <div className='w-[280px]'>
            <motion.h1 variants={container(0.3)} initial="hidden" whileInView="show" className='text-6xl font-bold relative z-20'>Immanuel Mathari</motion.h1>
            <motion.div variants={container(0.6)} initial='hidden' whileInView="show" className='h-[4px] w-[30px] bg-primary mt-4'></motion.div>
        </div>
         
        <div className=''>            
            <motion.img initial={{x: -100}} whileInView={{x: 0}} transition={{ duration: 1}} src={Person} alt="Immanuel Mathari" className='img-shadow w-[400px] scale-125 relative z-10'/>
        </div>

        {/* social contacts handles  */}
        <div className='flex gap-4 mt-12'>
          {/* motions should work in divs */}
          <a href='tel:+254797952810' target='_blank'>
          <motion.div variants={container(0.8)} initial={"hidden"} whileInView="show">
          <MdCallEnd className='text-4xl hover:scale-125 cursor-pointer duration-200' />
            </motion.div>
            </a>
            <a href='https://www.linkedin.com/in/immanuel-mathari-20aa51253/' target='_blank'  >
            <motion.div variants={container(1.0)} initial="hidden" whileInView="show">
          <FaLinkedinIn className='text-4xl hover:scale-125 cursor-pointer duration-200' />
          </motion.div>
          </a>
          <a href='https://www.instagram.com/captainmathari/' target='_blank'>
          <motion.div variants={container(1.2)} initial="hidden" whileInView="show">
          <FaInstagram className='text-4xl hover:scale-125 cursor-pointer duration-200' />
          </motion.div>
          </a>
          <a href='mailto:immanuelmathari@gmail.com' target='_blank'>
          <motion.div variants={container(1.2)} initial="hidden" whileInView="show">
          <MdEmail className='text-4xl hover:scale-125 cursor-pointer duration-200'/>
          </motion.div>
          </a>
          <a href='https://github.com/immanuelmathari/' target='_blank'>
          <motion.div variants={container(1.2)} initial="hidden" whileInView="show">
          <FaGithub className='text-4xl hover:scale-125 cursor-pointer duration-200'/>
          </motion.div>
          </a>

        </div>
       
        </div>
        {/* text section */}
        <div className='space-y-7 font-bold leading-tight pl-10'>
          <motion.p variants={container(0.4)} initial="hidden" whileInView="show" className='text-sm opacity-70 tracking-widest font-serif translate-y-3'>- Introduction</motion.p>
          <motion.h1 variants={container(0.5)} initial="hidden" whileInView="show" className='text-2xl md:text-3xl'>
            FullStack Developer
          </motion.h1>
          <motion.p variants={container(0.6)} initial="hidden" whileInView={"show"} className='text-sm leading-6 opacity-70'>Hello, I am a graduate from Jomo Kenyatta University of Agriculture and Technology. I studied Information Technology with a major in Software Engineerng, Computer Programming and Networking. I am passionate about programming and problem-solving. I have diverse skills in various programming languages and web technologies. My foundation includes proficiency in Data Structures, PHP-Laravel, JavaScript- ReactJs, Server-side NodeJs, ExpressJs, NodeJs, Angular, Python-Django, Database Technologies such as MySQL, PostgreSQL, nosql technologies such as MongoDB. I have hands-on experience building dynamic and interactive web applications, utilizing the power of UI/UX design, Material Design, DRY principles.</motion.p>
          <a href='#about'>
          <motion.button variants={container(0.7)} initial="hidden" whileInView="show"className='text-primary border border-b-2 border-primary text-xl font-bold p-2 hover:text-black hover:bg-primary hover:translate-x-4 transition-all duration-300 flex items-center gap-4'>My Story 
            
            <FaArrowRight className='text-sm hover:translate-x-1 transition duration-200'/>
             </motion.button></a>
        </div>
        </div>
        </div>
    </main>
  )
}

export default Hero