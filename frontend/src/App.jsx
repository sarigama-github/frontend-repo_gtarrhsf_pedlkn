import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Teaching from './components/Teaching'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="min-h-screen bg-base-900 text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Projects />
        <Teaching />
        <Contact />
        <footer className="py-10 text-center text-sm text-zinc-400">© {new Date().getFullYear()} Your Name — Tech Educator & Full‑Stack Developer</footer>
      </main>
    </div>
  )
}
