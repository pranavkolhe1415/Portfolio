import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Github, X } from 'lucide-react'
import type { Project } from '../types'

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return <AnimatePresence>{project && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
    <motion.div className="project-modal" initial={{ opacity: 0, y: 30, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .97 }} transition={{ type: 'spring', damping: 25, stiffness: 240 }} onMouseDown={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close project details"><X size={19}/></button>
      <span className="eyebrow">{project.category} / {project.number}</span>
      <h2>{project.name}</h2><p>{project.detail}</p>
      <div className="tag-list">{project.stack.map(s => <span className="pill" key={s}>{s}</span>)}</div>
      <div className="modal-links">
        {project.github && <a className="button button-outline" href={project.github} target="_blank" rel="noreferrer"><Github size={17}/> Source code <ArrowUpRight size={16}/></a>}
        {project.demo && <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={16}/></a>}
        {!project.github && !project.demo && <span className="muted small">Project links will be added when publicly available.</span>}
      </div>
    </motion.div>
  </motion.div>}</AnimatePresence>
}