'use client'

import { useState, useEffect, useRef } from 'react'
import { navLinks } from '@/data/content'

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

function triggerPageLift(sectionIndex: number) {
  const el = document.getElementById(sectionIds[sectionIndex])
  if (!el || el.classList.contains('page-lift-out')) return
  el.classList.add('page-lift-out')
  setTimeout(() => el.classList.remove('page-lift-out'), 500)
}

export default function Nav() {
  const [activeSection, setActiveSection] = useState('hero')
  const scrollContainerRef = useRef<HTMLElement | null>(null)
  const lastScrollTop = useRef<number>(0)
  const scrollDirection = useRef<'up' | 'down'>('down')

  useEffect(() => {
    const scrollContainer = document.querySelector('.snap-container') as HTMLElement
    if (!scrollContainer) return

    scrollContainerRef.current = scrollContainer

    const updateActiveSection = () => {
      const scrollTop = scrollContainer.scrollTop
      const sectionHeight = scrollContainer.clientHeight

      // Detect direction
      const direction: 'up' | 'down' = scrollTop < lastScrollTop.current ? 'up' : 'down'
      scrollDirection.current = direction

      const currentIndex = Math.round(scrollTop / sectionHeight)
      const prevIndex = Math.round(lastScrollTop.current / sectionHeight)

      // Trigger page lift on manual upward section transition
      if (direction === 'up' && currentIndex !== prevIndex) {
        triggerPageLift(prevIndex)
      }

      lastScrollTop.current = scrollTop

      const clampedIndex = Math.max(0, Math.min(currentIndex, navLinks.length - 1))
      setActiveSection(navLinks[clampedIndex].href.replace('#', ''))
    }

    updateActiveSection()

    scrollContainer.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => scrollContainer.removeEventListener('scroll', updateActiveSection)
  }, [])

  const handleNavClick = (href: string) => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const targetIndex = sectionIds.indexOf(href.replace('#', ''))
    if (targetIndex === -1) return

    const currentIndex = Math.round(scrollContainer.scrollTop / scrollContainer.clientHeight)
    const direction = targetIndex < currentIndex ? 'up' : 'down'
    const targetScrollTop = targetIndex * scrollContainer.clientHeight

    // Disable snap before scrolling
    scrollContainer.style.scrollSnapType = 'none'
    scrollContainer.scrollTo({ top: targetScrollTop, behavior: 'smooth' })

    // Fix 4 — trigger lift AFTER scrollTo so animation timer aligns with actual motion
    if (direction === 'up') {
      triggerPageLift(currentIndex)
    }

    // Fix 3 — re-enable snap when scroll actually ends, not after arbitrary timeout
    const restoreSnap = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.scrollSnapType = 'y mandatory'
      }
    }

    const onScrollEnd = () => {
      restoreSnap()
      scrollContainer.removeEventListener('scrollend', onScrollEnd)
      clearTimeout(fallbackId)
    }

    // Fallback for Safari < 16.4 which does not support scrollend
    const fallbackId = setTimeout(() => {
      restoreSnap()
      scrollContainer.removeEventListener('scrollend', onScrollEnd)
    }, Math.max(800, Math.abs(targetIndex - currentIndex) * 400))

    scrollContainer.addEventListener('scrollend', onScrollEnd)
  }

  return (
    <>
      {/* Fixed top nav with mix-blend-difference — floats above sections */}
      <nav className="fixed top-0 left-0 w-full z-[80] flex justify-between items-center p-6 mix-blend-difference">
        {/* Logo mark */}
        <div className="font-technical font-bold text-primary tracking-tighter text-2xl">
          VBJ.OS
        </div>

        {/* Chapter navigation */}
        <div className="hidden md:flex gap-12 font-technical text-[10px] tracking-[0.3em] uppercase">
          {navLinks.map((link) => {
            const isActive = link.href === '#' + activeSection
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}
              >
                {link.label}
              </button>
            )
          })}
        </div>

        {/* System live indicator */}
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-white/20 hidden md:block" />
          <span className="font-technical text-[10px] text-accent">● SYSTEM_LIVE</span>
        </div>
      </nav>

      {/* Mobile nav — justify-around + gap-1 so 6 items fit at 375px */}
      <nav className="fixed bottom-0 left-0 w-full z-[80] flex md:hidden justify-around gap-1 py-3 px-2 bg-background/80 backdrop-blur-sm border-t border-white/10">
        {navLinks.map((link) => {
          const isActive = link.href === '#' + activeSection
          return (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-technical text-[8px] tracking-[0.05em] uppercase transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center px-1 ${
                isActive ? 'text-primary' : 'text-white/50 hover:text-primary'
              }`}
            >
              {/* Full label on sm+; number-only on xs to fit 375px */}
              <span className="hidden sm:inline">{link.label}</span>
              <span className="sm:hidden">{link.label.split('_')[0]}</span>
            </button>
          )
        })}
      </nav>
    </>
  )
}
