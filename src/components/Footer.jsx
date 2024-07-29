import React from 'react'
import Logo from '../assets/react.svg'
import { motion } from 'framer-motion'
import { MdCallEnd, MdEmail } from 'react-icons/md'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


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

const Footer = () => {
  return (
    <div className='bg-darkGray py-14'>
        <div className='container flex flex-col gap-3 justify-center items-center'>
            <motion.img initial={{ scale: 0, opacity: 0}} whileInView={{scale:1, opacity: 1}} transition={{duration: 0.4}} src={Logo} alt='logo' className='w-[100px]' />
            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.4, delay: 0.4}} className='text-white text-center text-sm'>Copyright &copy; 2024. All rights reserved</motion.p>
            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.4, delay: 0.8}} className='text-white'>Available For Hire and Employment <a href='#' className='text-primary'>~ Developer Immanuel Mathari</a></motion.p>
        {/* social contacts handles  */}
        <div className='flex gap-4 mt-12 text-white'>
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
    </div>
  )
}

export default Footer