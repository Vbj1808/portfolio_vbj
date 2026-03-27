'use client'

import { motion } from 'framer-motion'
import { Monitor, Code2, Database, Cloud, BrainCircuit } from 'lucide-react'
import { skillGroups } from '@/data/skills'

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Code2,
  Database,
  Cloud,
  BrainCircuit,
}

export function TechStack() {
  return (
    <section id="skills" className="section-y">
      <div className="container-base">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="label-mono mb-3">Technical Strengths</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Skills &amp; Tools
          </h2>
        </motion.div>

        {/* Skill table */}
        <div className="flex flex-col gap-0 border border-white/[0.06] rounded-lg overflow-hidden">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 px-5 py-4 bg-sys-card border-b border-white/[0.05] last:border-b-0 hover:bg-white/[0.01] transition-colors"
              >
                {/* Category */}
                <div className="flex items-center gap-2.5 sm:w-44 shrink-0">
                  <Icon className="w-3.5 h-3.5 text-slate-600" />
                  <span className="font-mono text-[10px] tracking-[0.15em] text-slate-500 uppercase">
                    {group.category}
                  </span>
                </div>

                {/* Divider — desktop */}
                <div className="hidden sm:block w-px h-4 bg-white/[0.06] shrink-0" />

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] px-2.5 py-1 border border-white/[0.07] text-slate-400 rounded cursor-default hover:text-slate-200 hover:border-white/[0.15] transition-colors duration-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
