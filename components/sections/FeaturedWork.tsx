'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects, type Project, type StatusDot } from '@/data/projects'
import { cn } from '@/components/ui/cn'

const dotColor: Record<StatusDot, string> = {
  green: 'text-emerald-400',
  blue: 'text-accent',
  gray: 'text-slate-600',
}

function TechPill({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] px-2 py-0.5 border border-white/[0.07] text-slate-600 rounded">
      {label}
    </span>
  )
}

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: Project
  index: number
  featured?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        'group relative flex flex-col gap-5 p-6 bg-sys-card border border-white/[0.06] rounded-lg',
        'hover:border-white/[0.12] transition-all duration-200 hover:-translate-y-0.5 overflow-hidden',
        featured && 'lg:col-span-2'
      )}
      style={{ willChange: 'transform' }}
    >
      {/* Hover accent line — animates in from left */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent origin-top"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
              {project.typeTag}
            </span>
            <span className="text-white/[0.1]">|</span>
            <span className={cn('font-mono text-[10px] tracking-[0.1em] flex items-center gap-1.5', dotColor[project.statusDot])}>
              ● {project.statusLabel}
            </span>
          </div>
          <h3 className="font-mono text-xl font-bold text-slate-100 tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="font-mono text-[10px] text-slate-600 tracking-wider">
            {project.roleLabel}
          </p>
        </div>

        {/* Key metric */}
        {project.keyMetric && (
          <div className="shrink-0 text-right border border-white/[0.06] rounded px-3 py-2 bg-white/[0.02]">
            <div className="font-mono text-sm font-bold text-accent leading-tight">
              {project.keyMetric.value}
            </div>
            <div className="font-mono text-[9px] text-slate-600 mt-0.5 tracking-wider">
              {project.keyMetric.label}
            </div>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="font-sans text-sm text-slate-500 leading-relaxed">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>

      {/* Links */}
      {(project.links.github || project.links.live) && (
        <div className="flex items-center gap-3 pt-1 border-t border-white/[0.05] mt-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-600 hover:text-slate-300 transition-colors tracking-wider uppercase"
            >
              <Github className="w-3 h-3" />
              GitHub
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-600 hover:text-accent transition-colors tracking-wider uppercase"
            >
              <ExternalLink className="w-3 h-3" />
              Live
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}

export function FeaturedWork() {
  return (
    <section id="work" className="section-y">
      <div className="container-base">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="label-mono mb-3">Featured Work</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-2">
            What I&rsquo;ve Shipped
          </h2>
          <p className="font-sans text-slate-600 text-sm">
            Production systems, research tools, and enterprise engineering.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
