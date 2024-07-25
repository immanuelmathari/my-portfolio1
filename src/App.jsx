import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Contact />
    </main>
  )
}

export default App