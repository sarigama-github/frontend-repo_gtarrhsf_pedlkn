import { useMemo } from 'react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
      {children}
    </span>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      {eyebrow && (
        <div className="mb-3">
          <Badge>{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">{title}</h2>
      {subtitle && <p className="text-blue-200/80">{subtitle}</p>}
    </div>
  )
}

function SocialLinks() {
  const links = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rushikesh-karwande-4646941a9/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.9 0 4.6 2.6 4.6 6V24h-4v-6.7c0-1.6 0-3.6-2.2-3.6-2.2 0-2.6 1.7-2.6 3.5V24h-4V8z"/>
        </svg>
      )
    }
  ]
  return (
    <div className="flex items-center justify-center gap-3">
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-blue-100 border border-white/10 transition">
          <span className="text-blue-300/90">{l.icon}</span>
          <span className="font-medium">{l.label}</span>
        </a>
      ))}
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"/>
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl"/>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-4"><Badge>Available for freelance & mentoring</Badge></div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Hrushikesh Karwande
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mt-2">Full‑stack Developer</p>
            <p className="text-blue-200/80 mt-6 leading-relaxed">
              Passionate developer focused on building clean, robust products and sharing knowledge along the way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition border border-blue-400/30">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition border border-white/10">Get in touch</a>
            </div>
            <div className="mt-6"><SocialLinks /></div>
          </div>

          <div className="relative h-72 md:h-96 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-blue-400/20 blur-2xl"/>
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="text-blue-200/80">Showcasing craft</div>
                <div className="mt-2 text-5xl">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const skills = useMemo(() => (
    ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'Python', 'FastAPI', 'MongoDB', 'PostgreSQL', 'TailwindCSS']
  ), [])
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle eyebrow="About" title="A bit about me" subtitle="I love turning ideas into delightful, performant experiences." />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-blue-100 leading-relaxed">
              I’m a full‑stack engineer who enjoys bridging design and engineering. I ship end‑to‑end features, own quality, and keep DX high for teams. I also mentor beginners and help teammates grow with clear docs and thoughtful reviews.
            </p>
            <p className="text-blue-100/90 leading-relaxed mt-4">
              When not coding, I explore developer tooling, experiment with 3D/creative coding, and contribute to open source.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-3">Core stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1 rounded-md bg-white/10 text-blue-100 text-sm border border-white/10">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      title: 'EduTrack',
      description: 'A learning progress tracker with spaced‑repetition and analytics for students.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
      link: 'https://example.com',
      repo: '#'
    },
    {
      title: 'DevNotes',
      description: 'Markdown knowledge base with AI‑assisted search and fast, offline‑first sync.',
      tech: ['React', 'Vite', 'IndexedDB', 'Tailwind'],
      link: 'https://example.com',
      repo: '#'
    },
    {
      title: 'ClassroomKit',
      description: 'Interactive teaching templates and live quiz dashboard for workshops.',
      tech: ['Node', 'WebSockets', 'Redis', 'FastAPI'],
      link: 'https://example.com',
      repo: '#'
    }
  ]

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle eyebrow="Featured" title="Projects" subtitle="A selection of things I’ve designed and built." />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group block bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">
              <div className="h-36 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 mb-4"/>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-white font-semibold text-lg group-hover:text-blue-200 transition">{p.title}</h3>
                <span className="text-xs text-blue-200/70">↗</span>
              </div>
              <p className="text-blue-200/80 mt-2 text-sm leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map(t => <span key={t} className="text-xs text-blue-200/80 bg-white/5 border border-white/10 px-2 py-1 rounded">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      name: 'Aarav S.',
      role: 'Software Engineer',
      quote: 'Hrushikesh pairs solid engineering with clear communication. Working with him was smooth and fun.'
    },
    {
      name: 'Priya M.',
      role: 'Bootcamp Grad',
      quote: 'He helped me understand complex topics with simple, real‑world examples. I landed my first dev job!'
    }
  ]
  return (
    <section id="teaching" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle eyebrow="Words" title="Testimonials" subtitle="What collaborators and learners say." />
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-blue-100/90 leading-relaxed">“{t.quote}”</p>
              <div className="mt-4 text-sm text-blue-300/80">— {t.name}, {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle eyebrow="Contact" title="Let’s build something great" subtitle="Open to freelance, collaborations, and mentoring." />
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-blue-100">The fastest way to reach me is via LinkedIn.</p>
          <a href="https://www.linkedin.com/in/rushikesh-karwande-4646941a9/" target="_blank" rel="noreferrer" className="inline-block mt-4 px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition border border-blue-400/30">Message on LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-300/70 text-sm">
        <div>© {new Date().getFullYear()} Hrushikesh Karwande</div>
        <div className="flex items-center gap-3">
          <a href="#about" className="hover:text-white transition">About</a>
          <span className="opacity-40">•</span>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <span className="opacity-40">•</span>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.06),transparent_45%)] pointer-events-none" />

      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-white">HK</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#teaching" className="hover:text-white transition">Testimonials</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="https://www.linkedin.com/in/rushikesh-karwande-4646941a9/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-sm border border-white/10">Connect</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
