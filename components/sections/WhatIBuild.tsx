'use client'

import { motion } from 'framer-motion'
import { Server, BrainCircuit, ShieldCheck, Monitor, Cloud } from 'lucide-react'
import { capabilities } from '@/data/capabilities'

const iconMap: Record<string, React.ElementType> = {
  Server,
  BrainCircuit,
  ShieldCheck,
  Monitor,
  Cloud,
}

export function WhatIBuild() {
  return (
    <section className="section-y">
      <div className="container-base">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="label-mono mb-3">Capabilities</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            What I Build
          </h2>
        </motion.div>

        {/* Capability grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon] ?? Server
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group flex flex-col gap-4 p-5 bg-sys-card border border-white/[0.06] rounded-lg hover:border-white/[0.12] transition-all duration-200 hover:-translate-y-px"
                style={{ willChange: 'transform' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 flex items-center justify-center border border-white/[0.08] rounded bg-white/[0.03]">
                    <Icon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="font-mono text-xs text-slate-500 tracking-wider uppercase">
                    {cap.title}
                  </span>
                </div>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
