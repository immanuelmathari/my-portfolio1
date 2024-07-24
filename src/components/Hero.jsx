import React from 'react';
import Person from '../assets/manu.png';

const Hero = () => {
  return ( 
    <main className='bg-gray text-white'>
        <div className='container'>
        {/* image section */}
        <div className='grid grid-cols-2'>
        <div>
            <h1 className='text-6xl font-bold'>Immanuel Mathari</h1>
            <div className='h-[4px] w-[30px] bg-primary'></div>
        </div>
        <div>            
            <img src={Person} alt="Immanuel Mathari" width={100}/>
        </div>
        </div>
        {/* text section */}
        <div>
        </div>
        </div>
    </main>
  )
}

export default Hero