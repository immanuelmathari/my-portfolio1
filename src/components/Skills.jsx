import React from 'react'
import { CiPen } from 'react-icons/ci';
import { FaBoxOpen } from "react-icons/fa";
import { MdComputer } from 'react-icons/md';

const skills = [
    {
        id: 1,
        title: "Product Designer",
        icon: <FaBoxOpen className='text-4xl'/>
    },
    {
        id: 2,
        title: "Branding Designer",
        icon: <CiPen className='text-4xl' />
    },
    {
        id: 3,
        title: "Web desiger",
        icon: <MdComputer className='text-4xl' />
    },
]

const Skills = () => {
  return (
    <div className='bg-gray'>
        {/* card section */}
        <div className='container py-10 text-white'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10 place-items-center'>
            {
                skills.map((skill) => {
                    return (
                        <div key={skill.id} className='flex items-center bg-white/15 gap-6 px-7 py-12'>
                            {skill.icon}
                            <div className='space-y-3'>
                            <h1 className='text-2xl font-bold'>
                                {skill.title}
                            </h1>
                            <p></p>
                                </div>
                            </div>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default Skills