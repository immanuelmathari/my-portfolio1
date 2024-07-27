import React from 'react'
import Logo from '../assets/react.svg'


const Footer = () => {
  return (
    <div className='bg-darkGray py-14'>
        <div className='container flex flex-col gap-3 justify-center items-center'>
            <img src={Logo} alt='logo' className='w-[100px]' />
            <p className='text-white text-center text-sm'>Copyright &copy; 2022. All rights reserved</p>
            <p className='text-white'>Call me Now!! <a href='#' className='text-primary'>Immanuel Mathari</a></p>
        </div>
    </div>
  )
}

export default Footer