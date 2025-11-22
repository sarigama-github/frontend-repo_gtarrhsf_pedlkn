import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0 gradient pointer-events-none" />
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm/0"
          >
            <p className="inline-flex items-center gap-2 text-sm text-zinc-300/80 mb-4">
              <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
              Tech Educator • Full‑Stack Developer
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              I build engaging web experiences and teach developers how to do the same.
            </h1>
            <p className="mt-4 text-zinc-300 max-w-xl">
              Modern, performant, and delightful software — with a focus on clarity, DX, and maintainability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-black hover:opacity-90 transition">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-zinc-800/70 ring-1 ring-white/10 hover:bg-zinc-800 transition">Contact Me</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
