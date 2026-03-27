'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, ArrowRight, CornerDownLeft } from 'lucide-react'
import { commandItems } from '@/data/navigation'
import { links } from '@/data/links'
import { cn } from '@/components/ui/cn'

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = commandItems.filter(
    (item) =>
      query === '' ||
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  )

  const navigate = useCallback(
    (href: string, external?: boolean) => {
      if (external) {
        window.open(href, '_blank', 'noopener noreferrer')
      } else {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setOpen(false)
    },
    []
  )

  // Global keyboard handler
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Focus + reset on open
  useEffect(() => {
    if (open) {
      setQuery('')
      setCursor(0)
      setTimeout(() => inputRef.current?.focus(), 30)
    }
  }, [open])

  // Arrow + enter navigation inside palette
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setCursor((c) => Math.min(c + 1, filtered.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setCursor((c) => Math.max(c - 1, 0))
      }
      if (e.key === 'Enter' && filtered[cursor]) {
        const item = filtered[cursor]
        navigate(item.href, item.external)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, cursor, filtered, navigate])

  // Reset cursor when query changes
  useEffect(() => setCursor(0), [query])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.18, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed top-[18%] left-1/2 -translate-x-1/2 z-[201] w-[calc(100%-2rem)] max-w-md"
          >
            <div className="bg-sys-surface border border-white/10 rounded-lg overflow-hidden shadow-2xl shadow-black/80">
              {/* Search */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
                <Search className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jump to section..."
                  className="flex-1 bg-transparent font-sans text-sm text-slate-200 placeholder-slate-700 outline-none"
                  aria-label="Command palette search"
                />
                <kbd className="font-mono text-[9px] text-slate-700 bg-white/[0.04] border border-white/[0.07] px-1.5 py-0.5 rounded">
                  ESC
                </kbd>
              </div>

              {/* Items */}
              <ul className="py-1.5 max-h-72 overflow-y-auto" role="listbox">
                {filtered.length === 0 ? (
                  <li className="px-4 py-3 font-sans text-sm text-slate-600">
                    No results
                  </li>
                ) : (
                  filtered.map((item, i) => (
                    <li key={item.href} role="option" aria-selected={cursor === i}>
                      <button
                        onMouseEnter={() => setCursor(i)}
                        onClick={() => navigate(item.href, item.external)}
                        className={cn(
                          'w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors',
                          cursor === i
                            ? 'bg-accent/[0.08] text-slate-100'
                            : 'text-slate-400 hover:bg-white/[0.03]'
                        )}
                      >
                        <div>
                          <div className="font-sans text-sm font-medium leading-tight">
                            {item.label}
                          </div>
                          <div className="font-mono text-[10px] text-slate-600 mt-0.5">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight
                          className={cn(
                            'w-3.5 h-3.5 shrink-0 transition-opacity',
                            cursor === i ? 'opacity-100 text-accent' : 'opacity-0'
                          )}
                        />
                      </button>
                    </li>
                  ))
                )}
              </ul>

              {/* Footer hints */}
              <div className="px-4 py-2 border-t border-white/[0.06] flex items-center gap-4">
                <span className="font-mono text-[9px] text-slate-700 flex items-center gap-1">
                  ↑↓ <span className="text-slate-800">navigate</span>
                </span>
                <span className="font-mono text-[9px] text-slate-700 flex items-center gap-1">
                  <CornerDownLeft className="w-2.5 h-2.5" />{' '}
                  <span className="text-slate-800">select</span>
                </span>
                <span className="font-mono text-[9px] text-slate-700">esc close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
