'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Download, ArrowRight } from 'lucide-react'
import { links } from '@/data/links'

export function Contact() {
  return (
    <section id="contact" className="section-y bg-sys-surface">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="label-mono mb-3">Contact</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-4">
            Build something together.
          </h2>
          <p className="font-sans text-slate-400 leading-relaxed mb-10">
            Open to full-time roles, contract work, and early-stage collaborations. If
            you&rsquo;re working on something in healthcare, fintech, or applied AI —
            I&rsquo;m interested.
          </p>

          {/* Primary action */}
          <a
            href={`mailto:${links.email}`}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-accent text-sys-base font-sans font-semibold text-sm rounded transition-all duration-150 hover:bg-accent/90 active:scale-95 mb-8"
          >
            <Mail className="w-4 h-4" />
            {links.email}
            <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Secondary links */}
          <div className="flex flex-wrap gap-2">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/[0.08] hover:border-white/[0.18] font-sans text-sm text-slate-500 hover:text-slate-200 rounded transition-all duration-150"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/[0.08] hover:border-white/[0.18] font-sans text-sm text-slate-500 hover:text-slate-200 rounded transition-all duration-150"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a
              href={links.resume}
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/[0.08] hover:border-white/[0.18] font-sans text-sm text-slate-500 hover:text-slate-200 rounded transition-all duration-150"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
