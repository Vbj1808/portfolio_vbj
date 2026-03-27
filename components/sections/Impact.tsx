'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { metrics, type Metric } from '@/data/metrics'

function useCountUp(target: number, duration: number, trigger: boolean, isDecimal = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let rafId: number
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = isDecimal
        ? Math.round(target * eased * 10) / 10
        : Math.floor(target * eased)
      setCount(current)
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [trigger, target, duration, isDecimal])

  return count
}

function MetricBlock({ metric, animate }: { metric: Metric; animate: boolean }) {
  const count = useCountUp(metric.numericValue, 1400, animate, metric.isDecimal)

  let display: string
  if (metric.staticDisplay) {
    display = metric.staticDisplay
  } else if (metric.isDecimal) {
    display = `${count.toFixed(1)}${metric.suffix}`
  } else if (metric.useComma) {
    display = `${count.toLocaleString()}${metric.suffix}`
  } else {
    display = `${count}${metric.suffix}`
  }

  return (
    <div className="flex flex-col gap-3 p-6 bg-sys-card border border-white/[0.06] rounded-lg group hover:border-white/[0.1] transition-colors">
      {/* Metric value */}
      <div className="font-mono text-4xl sm:text-[42px] font-bold text-accent leading-none tracking-tight">
        {display}
      </div>

      {/* Labels */}
      <div className="flex flex-col gap-1">
        <span className="font-sans text-sm text-slate-300 leading-tight">
          {metric.label}
        </span>
        <span className="font-mono text-[10px] text-slate-600 tracking-wider">
          {metric.sublabel}
        </span>
      </div>
    </div>
  )
}

export function Impact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="impact" className="section-y bg-sys-surface">
      <div className="container-base">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="label-mono mb-3">By the Numbers</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Impact
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div ref={sectionRef} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <MetricBlock metric={metric} animate={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
