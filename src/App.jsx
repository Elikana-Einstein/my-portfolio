import React from 'react'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Contact/>
      <About />
    </div>
  )
}

export default App
