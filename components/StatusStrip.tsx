'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { statusMessages } from '@/data/status'

export function StatusStrip() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % statusMessages.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-7 bg-sys-strip border-b border-white/[0.05] flex items-center justify-between px-6 overflow-hidden">
      {/* Left: fixed context label */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/60" />
        <span className="font-mono text-[10px] tracking-[0.15em] text-slate-600 uppercase">
          VBJ / SYSTEMS
        </span>
      </div>

      {/* Center: cycling status messages */}
      <div className="flex-1 flex items-center justify-center overflow-hidden px-4">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="font-mono text-[10px] tracking-[0.12em] text-slate-500 whitespace-nowrap"
          >
            ●&nbsp; {statusMessages[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Right: keyboard shortcut hint */}
      <div className="shrink-0 hidden sm:flex items-center gap-1">
        <kbd className="font-mono text-[9px] text-slate-700 bg-white/[0.03] border border-white/[0.07] px-1.5 py-0.5 rounded">
          ⌘K
        </kbd>
        <span className="font-mono text-[9px] text-slate-700">navigate</span>
      </div>
    </div>
  )
}
