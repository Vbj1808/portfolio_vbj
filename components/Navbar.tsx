'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navLinks } from '@/data/navigation'
import { links } from '@/data/links'
import { cn } from '@/components/ui/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    navLinks.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(sectionId) },
        { rootMargin: '-35% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav
      className={cn(
        'h-[52px] flex items-center transition-all duration-300',
        scrolled
          ? 'bg-sys-base/90 backdrop-blur-lg border-b border-white/[0.06] shadow-lg shadow-black/30'
          : 'bg-sys-base/60 backdrop-blur-md border-b border-white/[0.04]'
      )}
    >
      <div className="container-base w-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-sm font-bold text-slate-200 hover:text-accent transition-colors tracking-wider"
          aria-label="Back to top"
        >
          VBJ
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = active === link.sectionId
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-3.5 py-1.5 font-sans text-sm transition-colors duration-150',
                  isActive
                    ? 'text-slate-100'
                    : 'text-slate-500 hover:text-slate-200'
                )}
              >
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-px bg-accent" />
                )}
                {link.label}
              </a>
            )
          })}

          {/* Resume CTA */}
          <a
            href={links.resume}
            className="ml-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-white/[0.1] hover:border-accent/50 font-sans text-sm text-slate-400 hover:text-accent transition-all duration-150"
          >
            <Download className="w-3 h-3" />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-1.5 text-slate-500 hover:text-slate-200 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-sys-base/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="container-base py-3 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 font-sans text-sm text-slate-400 hover:text-slate-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-white/[0.06] my-2" />
              <a
                href={links.resume}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 font-sans text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
              >
                <Download className="w-3 h-3" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
