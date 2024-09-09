import { useState } from 'react'
import { Navbar } from './components/navBar'
import { Hero } from './components/hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Project } from './components/Projects'
import { Contact } from './components/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div><Navbar /></div>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
    </div>)
    
}

export default App
