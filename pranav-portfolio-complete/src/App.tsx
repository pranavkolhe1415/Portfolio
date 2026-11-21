import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Github, Linkedin, Mail, Menu, X, Download, Sparkles, ExternalLink } from 'lucide-react'
import Scene from './components/Scene'
import Reveal from './components/Reveal'
import ProjectModal from './components/ProjectModal'
import { journey, profile, projects, skills } from './data'
import type { Project } from './types'

const nav = [{ label: 'About', id: 'about' }, { label: 'Skills', id: 'skills' }, { label: 'Projects', id: 'projects' }, { label: 'Journey', id: 'journey' }, { label: 'Contact', id: 'contact' }]

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="nav-inner">
      <a className="brand" href="#home" aria-label="Pranav Kolhe home">PK<span>.</span></a>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>{nav.map(n => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>)}</nav>
      <a className="resume-link" href={profile.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={16}/></a>
      <button className="mobile-menu" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    </div>
  </header>
}

function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-copy">
      <motion.div className="availability" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}><span className="status-dot"/> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</motion.div>
      <motion.p className="hello" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>Hello, I'm {profile.name}.</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .45 }}>Building<br/>digital experiences<br/><span className="gradient-text">beyond limits.</span></motion.h1>
      <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }}>Full-stack developer passionate about building meaningful applications, interactive interfaces, and modern web experiences.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9 }}>
        <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
        <a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
      </motion.div>
      <div className="hero-tech">{['React', 'Node.js', 'Java', 'MongoDB', 'Three.js'].map(t => <span className="pill" key={t}>{t}</span>)}</div>
    </div>
    <motion.div className="hero-visual" initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .45 }}><Scene/></motion.div>
    <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
  </section>
}

function SectionHeading({ index, label, title, accent }: { index: string; label: string; title: string; accent?: string }) {
  return <div className="section-heading"><span className="eyebrow">{index} / {label}</span><h2>{title} {accent && <span className="gradient-text">{accent}</span>}</h2></div>
}

function About() {
  return <section className="section section-shell" id="about">
    <SectionHeading index="01" label="ABOUT ME" title="I turn ideas into" accent="useful digital experiences."/>
    <div className="about-grid">
      <div className="about-spacer"><div className="about-mark">PK<span>.</span></div><span className="muted small">CURIOUS BY NATURE. BUILDER BY CHOICE.</span></div>
      <div className="about-copy"><p>I'm an Information Technology student at Vishwakarma Institute of Information Technology, interested in full-stack engineering and thoughtful interface design.</p><p>I enjoy understanding how products work from frontend interactions to backend logic and data. I like building practical applications and exploring how 3D can make the web more engaging.</p><p className="muted small">My goal is to turn complex problems into useful, reliable and intuitive digital experiences.</p></div>
    </div>
    <div className="principles">{[{n:'01',t:'Product thinking',d:'Start with the problem and build with purpose.'},{n:'02',t:'Full-stack development',d:'Connect polished interfaces with dependable systems.'},{n:'03',t:'Interactive experiences',d:'Make digital products feel clear, alive and memorable.'}].map((x,i)=><Reveal key={x.n} delay={i*.08}><div className="principle-card"><span>{x.n}</span><h3>{x.t}</h3><p>{x.d}</p></div></Reveal>)}</div>
  </section>
}

function Skills() {
  return <section className="section section-shell" id="skills">
    <SectionHeading index="02" label="TOOLKIT" title="Tools I use to" accent="bring ideas to life."/>
    <p className="section-intro">A growing toolkit across interfaces, application logic, data and creative web experiences.</p>
    <div className="skills-grid">{skills.map((group,i)=><Reveal key={group.group} delay={i*.07}><div className="skill-card"><div className="skill-card-top"><span className="skill-icon"><Code2 size={18}/></span><span className="muted small">0{i+1}</span></div><h3>{group.group}</h3><div className="tag-list">{group.items.map(item=><span className="pill" key={item}>{item}</span>)}</div></div></Reveal>)}</div>
    <div className="learning-strip"><Sparkles size={18}/><span>Always learning — currently strengthening Java, DSA, system fundamentals and modern frontend engineering.</span></div>
  </section>
}

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  return <section className="section section-shell" id="projects">
    <SectionHeading index="03" label="SELECTED WORK" title="Things I've" accent="built."/>
    <div className="section-side-note">A selection of applications and experiments. Open each project to explore its implementation and outcomes.</div>
    <div className="projects-grid">{projects.map((p,i)=><Reveal key={p.number} delay={(i%2)*.08}><button className="project-card" onClick={()=>setSelected(p)}>
      <div className="project-top"><span className="eyebrow">{p.category}</span><span className="project-number">{p.number}</span></div>
      <div className="project-art"><div className={`art-glow art-${i+1}`}/><span className="art-monogram">{p.name.split(' ').map(w=>w[0]).join('').slice(0,3)}</span><span className="art-open"><ArrowUpRight size={20}/></span></div>
      <h3>{p.name}</h3><p>{p.description}</p><div className="tag-list">{p.stack.slice(0,4).map(s=><span className="pill" key={s}>{s}</span>)}</div>
      <div className="project-footer"><span>{p.type}</span><span>Explore project <ArrowRight size={14}/></span></div>
    </button></Reveal>)}</div>
    <ProjectModal project={selected} onClose={()=>setSelected(null)}/>
  </section>
}

function Journey() {
  return <section className="section section-shell" id="journey">
    <SectionHeading index="04" label="THE JOURNEY" title="Always learning." accent="Always building."/>
    <div className="timeline">{journey.map((item,i)=><Reveal key={item.title} delay={i*.08}><div className="timeline-item"><div className="timeline-marker">{String(i+1).padStart(2,'0')}</div><div><span className="eyebrow">{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></div></div></Reveal>)}</div>
    <p className="muted small journey-note">Dates, certifications and additional achievements can be added as they are verified.</p>
  </section>
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(()=>setCopied(false),1800) }
    catch { window.location.href = `mailto:${profile.email}` }
  }
  return <section className="section section-shell contact-section" id="contact">
    <span className="eyebrow">05 / CONTACT</span>
    <div className="contact-panel"><div className="contact-content"><p>Have an idea or an opportunity?</p><h2>Let's create<br/>something<br/><span className="gradient-text">meaningful.</span></h2><p className="contact-description">I'm interested in software engineering opportunities, collaborations and building useful products.</p><div className="contact-actions"><a className="button button-light" href={`mailto:${profile.email}`}><Mail size={17}/> Say hello <ArrowUpRight size={16}/></a><button className="button button-glass" onClick={copyEmail}>{copied ? <Check size={17}/> : <Mail size={17}/>} {copied ? 'Copied!' : 'Copy email'}</button></div><span className="muted small">{profile.email}</span></div><div className="contact-decoration"><div className="contact-orbit"/><div className="contact-orbit second"/><div className="contact-star">✳</div></div></div>
  </section>
}

function Footer() {
  return <footer className="footer"><div className="footer-inner"><span>© {new Date().getFullYear()} {profile.name}. Designed & built with care.</span><div className="socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={18}/></a></div></div></footer>
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: .001 })
  useEffect(() => { document.documentElement.classList.add('ready'); return () => document.documentElement.classList.remove('ready') }, [])
  return <><motion.div className="scroll-progress" style={{ scaleX }}/><Header/><main><Hero/><About/><Skills/><Projects/><Journey/><Contact/></main><Footer/></>
}