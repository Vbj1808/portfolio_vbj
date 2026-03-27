'use client'

import { useEffect, useRef, useState } from 'react'
import { pipelineProjects } from '@/data/pipeline'

export default function Pipeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animated, setAnimated] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [dateStr, setDateStr] = useState('')

  // Trigger progress bars when section enters the snap viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const scrollContainer = document.querySelector('.snap-container')
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { root: scrollContainer, threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Blinking cursor — 800 ms toggle
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 800)
    return () => clearInterval(id)
  }, [])

  // Client-side date — empty on server to avoid hydration mismatch
  useEffect(() => {
    setDateStr(
      new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    )
  }, [])

  return (
    // chapter-section provides: h-screen sticky top-0 flex-col justify-center
    //   px-6 md:px-24 overflow-hidden relative
    // overflow-hidden is REQUIRED — without it the snap-container can't navigate
    // backward through this section (browser treats it as an internal scroll target).
    <section
      ref={sectionRef}
      id="pipeline"
      className="chapter-section snap-section pipeline-grid-bg"
    >
      {/* Radar sweep — clipped decoratively by overflow-hidden at section edge */}
      <div className="radar-sweep hidden md:block" aria-hidden="true" />

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between w-full mb-4 md:mb-5 relative z-10">
        <div>
          <p className="font-technical text-primary text-xs tracking-[0.3em] mb-2 md:mb-4">
            CHAPTER_04 // TRANSMISSION
          </p>
          {/* Smaller than other headlines so header + 2×2 grid fits in h-screen */}
          <h2 className="font-headline text-[40px] md:text-[72px] leading-none">
            IN <span className="text-stroke">/ TRANSIT.</span>
          </h2>
        </div>

        <div className="font-technical hidden md:block text-right">
          <div className="text-white text-sm tracking-wider mb-1">
            4 PROJECTS IN TRANSIT
          </div>
          <div className="text-white/40 text-[10px] tracking-widest uppercase">
            LAST UPDATED: {dateStr}
          </div>
        </div>
      </div>

      {/* ── 2×2 transmission grid ────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
        {pipelineProjects.map((project) => (
          <div
            key={project.title}
            className="bg-surface border border-white/10 p-3 md:p-4 group/card hover:border-primary/30 transition-[border-color] duration-300 relative overflow-hidden"
          >
            {/* ▸ TRANSMITTING bar */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="font-technical text-[9px] tracking-[0.25em] text-accent">
                  ▸ TRANSMITTING
                </span>
                {/* Fixed-width so layout doesn't shift on cursor blink */}
                <span
                  className="font-technical text-[9px] text-accent select-none inline-block w-2"
                  aria-hidden="true"
                >
                  {cursorVisible ? '_' : '\u00a0'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-technical text-[9px] border border-white/20 text-white/50 px-1.5 py-0.5">
                  {project.tag}
                </span>
                <span className="font-technical text-[9px] text-accent">
                  ● {project.status}
                </span>
              </div>
            </div>

            <div className="border-t border-white/10 mb-2" />

            {/* Title */}
            <h3 className="font-headline text-[32px] md:text-[40px] leading-none mb-1.5">
              {project.title}
            </h3>

            {/* Mission — single line to save vertical space */}
            <p className="text-xs text-on-surface-variant leading-relaxed mb-2 line-clamp-1">
              {project.mission}
            </p>

            {/* Progress bar */}
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="font-technical text-[9px] text-white/40 tracking-widest">
                  BUILD PROGRESS
                </span>
                <span className="font-technical text-[9px] text-primary">
                  {project.progress}%
                </span>
              </div>
              <div className="relative h-[3px] bg-white/10 overflow-hidden">
                <div
                  className="relative h-full bg-primary overflow-hidden"
                  style={{
                    width: animated ? `${project.progress}%` : '0%',
                    transition: 'width 1.2s ease-out',
                  }}
                >
                  <div className="progress-shimmer group-hover/card:[animation-duration:1s]" />
                </div>
              </div>
            </div>

            {/* Stack pills — single nowrap row, clipped at card edge */}
            <div className="flex gap-1.5 mb-2 overflow-hidden">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-technical text-[8px] tracking-wider text-white/50 border border-white/10 px-1.5 py-0.5 shrink-0"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-technical text-[9px] border border-white/20 text-white/50 px-2.5 py-1 hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  GH
                </a>
              )}
              {project.links.docs && (
                <a
                  href={project.links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-technical text-[9px] border border-white/20 text-white/50 px-2.5 py-1 hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  DOCS
                </a>
              )}
              {project.links.pypi && (
                <a
                  href={project.links.pypi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-technical text-[9px] border border-white/20 text-white/50 px-2.5 py-1 hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  PyPI
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
