import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blogs from './components/Blogs'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Contact />
      <Skills />
      <Projects />
      <Blogs />
    </main>
  )
}

export default App