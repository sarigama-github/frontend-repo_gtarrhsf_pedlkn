import React, { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [status, setStatus] = useState('')

  async function onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setStatus('Sending...')
    try{
      const res = await fetch(`${API}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if(!res.ok) throw new Error('Failed')
      setStatus('Thanks! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch(err){
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Let’s build something</h2>
          <p className="text-zinc-300 mt-2">Have a project or workshop in mind? Drop a note.</p>
        </div>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-5">
          <input name="name" required placeholder="Name" className="px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10" />
          <input name="email" type="email" required placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10" />
          <input name="subject" placeholder="Subject" className="md:col-span-2 px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10" />
          <textarea name="message" required placeholder="Your message" rows="5" className="md:col-span-2 px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="px-5 py-3 rounded-xl bg-white text-black hover:opacity-90 transition">Send Message</button>
            <span className="text-sm text-zinc-400">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
