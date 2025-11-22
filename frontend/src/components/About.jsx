import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-semibold">About</h2>
          <p className="mt-4 text-zinc-300">I'm a tech educator and full‑stack developer with a knack for turning complex concepts into approachable, hands‑on learning. I design scalable systems, craft smooth user interfaces, and teach others how to ship with confidence.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <li className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">React • Next.js • Vite</li>
            <li className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">Node • FastAPI • MongoDB</li>
            <li className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">TypeScript • Python</li>
            <li className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">Teaching • Workshops • Curriculum</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-400/10 via-indigo-400/10 to-fuchsia-400/10 ring-1 ring-white/10" />
          <div className="absolute -bottom-5 -right-5 p-4 rounded-xl bg-base-900 ring-1 ring-white/10 text-sm">Open to mentoring & collaborations</div>
        </motion.div>
      </div>
    </section>
  )
}
