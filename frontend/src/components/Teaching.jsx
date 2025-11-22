import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Teaching(){
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`${API}/testimonials`).then(r => r.json()).then(setItems).catch(() => setItems([]))
  }, [])

  return (
    <section id="teaching" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">What Learners Say</h2>
          <p className="text-zinc-300 mt-2">Feedback from workshops, courses, and mentoring.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={t.id || i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-5 rounded-2xl bg-base-800 ring-1 ring-white/10">
              <p className="text-zinc-200">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                {t.avatar_url ? (
                  <img src={t.avatar_url} alt={t.name} className="size-8 rounded-full" />
                ) : (
                  <div className="size-8 rounded-full bg-white/10" />
                )}
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-zinc-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
