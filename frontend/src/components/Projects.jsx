import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Projects(){
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${API}/projects`).then(r => r.json()).then(setItems).catch(() => setItems([]))
  }, [])

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Featured Projects</h2>
          <p className="text-zinc-300 mt-2">A selection of recent work that blends clean architecture with playful interaction.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a
              key={p.id || i}
              href={p.live_url || p.repo_url || '#'}
              target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-base-800 ring-1 ring-white/10"
            >
              {p.image_url ? (
                <img src={p.image_url} alt={p.title} className="h-44 w-full object-cover" />
              ) : (
                <div className="h-44 w-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20" />
              )}
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-zinc-300 line-clamp-2 mt-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech?.map((t, j) => (
                    <span key={j} className="text-xs px-2 py-1 rounded-lg bg-white/5 ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
