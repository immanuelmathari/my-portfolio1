import React from 'react'
import Logo from '../assets/react.svg'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <div className='bg-darkGray py-14'>
        <div className='container flex flex-col gap-3 justify-center items-center'>
            <motion.img initial={{ scale: 0, opacity: 0}} whileInView={{scale:1, opacity: 1}} transition={{duration: 0.4}} src={Logo} alt='logo' className='w-[100px]' />
            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.4, delay: 0.4}} className='text-white text-center text-sm'>Copyright &copy; 2022. All rights reserved</motion.p>
            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.4, delay: 0.8}} className='text-white'>Call me Now!! <a href='#' className='text-primary'>Immanuel Mathari</a></motion.p>
        </div>
    </div>
  )
}

export default Footer