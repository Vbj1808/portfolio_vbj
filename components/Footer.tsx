'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { links } from '@/data/links'

export function Footer() {
  return (
    <footer className="bg-sys-strip border-t border-white/[0.05]">
      <div className="container-base py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="font-mono text-xs text-slate-600 tracking-wider">
            BALAJI JEGADEESH VIJAYARAGHAVAN
          </span>
          <span className="hidden sm:block text-slate-700">·</span>
          <span className="font-mono text-xs text-slate-700">
            APPLIED AI PRODUCT ENGINEER
          </span>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-700 hover:text-slate-400 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-700 hover:text-slate-400 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${links.email}`}
            aria-label="Email"
            className="p-2 text-slate-700 hover:text-slate-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
