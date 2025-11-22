import React from 'react'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar(){
  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 backdrop-blur-xl bg-base-900/40 ring-1 ring-white/10 rounded-2xl px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-2.5 rounded-full bg-emerald-400" />
            <span className="font-semibold">YourName.dev</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#teaching" className="hover:text-white">Teaching</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com" aria-label="GitHub" className="p-2 rounded-lg hover:bg-white/5"><Github size={18} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-white/5"><Linkedin size={18} /></a>
            <a href="#contact" aria-label="Email" className="p-2 rounded-lg hover:bg-white/5"><Mail size={18} /></a>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/5" aria-label="Menu"><Menu size={18} /></button>
          </div>
        </div>
      </div>
    </header>
  )
}
