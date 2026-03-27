'use client'

import { useEffect, useRef } from 'react'

// ─── constants ────────────────────────────────────────────────────────────────
const PRIMARY_HEX = '#4F9EFF'
const PRIMARY_RGB = '79, 158, 255'
const NODE_RADIUS = 3
const PULSE_MAX_RADIUS = 8
const PULSE_DURATION_MS = 600
const MAX_VELOCITY = 0.4 // px/frame at 60fps

interface NodeState {
  x: number
  y: number
  vx: number
  vy: number
  pulseStart: number | null // performance.now() when pulse began
}

// ─── component ────────────────────────────────────────────────────────────────
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    if (!canvasEl) return
    const ctxEl = canvasEl.getContext('2d')
    if (!ctxEl) return

    // Rebind as non-nullable so TypeScript keeps narrowing inside closures
    const canvas: HTMLCanvasElement = canvasEl
    const ctx: CanvasRenderingContext2D = ctxEl

    let animId: number
    let nodes: NodeState[] = []
    let lastPulseAt = 0
    let nextPulseIn = randomDelay()
    let lastTs = 0

    // ── helpers ──────────────────────────────────────────────────────────────

    function randomDelay(): number {
      return 3000 + Math.random() * 2000 // 3–5 s
    }

    function isMobile(): boolean {
      return window.innerWidth < 768
    }

    function threshold(): number {
      return isMobile() ? 120 : 180
    }

    function syncSize(): void {
      const p = canvas.parentElement
      canvas.width = p ? p.offsetWidth : window.innerWidth
      canvas.height = p ? p.offsetHeight : window.innerHeight
    }

    function makeNode(): NodeState {
      // Ensure non-trivial velocity so nodes never stall
      let vx = (Math.random() - 0.5) * MAX_VELOCITY * 2
      let vy = (Math.random() - 0.5) * MAX_VELOCITY * 2
      if (Math.abs(vx) < 0.06) vx = Math.random() > 0.5 ? 0.1 : -0.1
      if (Math.abs(vy) < 0.06) vy = Math.random() > 0.5 ? 0.1 : -0.1
      return {
        x: NODE_RADIUS + Math.random() * (canvas.width - NODE_RADIUS * 2),
        y: NODE_RADIUS + Math.random() * (canvas.height - NODE_RADIUS * 2),
        vx,
        vy,
        pulseStart: null,
      }
    }

    function init(): void {
      syncSize()
      const count = isMobile() ? 6 : 10
      nodes = Array.from({ length: count }, makeNode)
    }

    // ── animation loop ───────────────────────────────────────────────────────

    function step(ts: number): void {
      // Pause rendering when tab is backgrounded; resume seamlessly
      if (document.visibilityState === 'hidden') {
        lastTs = 0 // reset dt so the first resumed frame has no sudden jump
        animId = requestAnimationFrame(step)
        return
      }

      // dt normalised to 60fps so physics is frame-rate independent
      const dt = lastTs === 0 ? 1 : Math.min((ts - lastTs) / 16.667, 3)
      lastTs = ts

      // ── trigger pulse ──
      if (ts - lastPulseAt > nextPulseIn) {
        nodes[Math.floor(Math.random() * nodes.length)].pulseStart = ts
        lastPulseAt = ts
        nextPulseIn = randomDelay()
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const T = threshold()

      // ── edges ──
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x
          const dy = nodes[j].y - nodes[i].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < T) {
            // Smooth opacity falloff: 0.8 at dist=0, 0 at dist=T
            const alpha = (0.8 * (1 - dist / T)).toFixed(3)
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(${PRIMARY_RGB}, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // ── nodes ──
      for (const n of nodes) {
        // Move — dt-scaled so identical at any refresh rate
        n.x += n.vx * dt
        n.y += n.vy * dt

        // Bounce off canvas edges
        if (n.x < NODE_RADIUS) { n.x = NODE_RADIUS; n.vx = Math.abs(n.vx) }
        if (n.x > canvas.width - NODE_RADIUS) { n.x = canvas.width - NODE_RADIUS; n.vx = -Math.abs(n.vx) }
        if (n.y < NODE_RADIUS) { n.y = NODE_RADIUS; n.vy = Math.abs(n.vy) }
        if (n.y > canvas.height - NODE_RADIUS) { n.y = canvas.height - NODE_RADIUS; n.vy = -Math.abs(n.vy) }

        // Base dot — solid fill with glow
        ctx.shadowBlur = 8
        ctx.shadowColor = PRIMARY_HEX
        ctx.beginPath()
        ctx.arc(n.x, n.y, NODE_RADIUS, 0, Math.PI * 2)
        ctx.fillStyle = PRIMARY_HEX
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.shadowColor = 'transparent'

        // Pulse ring — "claim being verified"
        if (n.pulseStart !== null) {
          const elapsed = ts - n.pulseStart
          if (elapsed >= PULSE_DURATION_MS) {
            n.pulseStart = null
          } else {
            const t = elapsed / PULSE_DURATION_MS // 0 → 1
            const eased = 1 - (1 - t) * (1 - t)  // ease-out quad
            const r = NODE_RADIUS + eased * (PULSE_MAX_RADIUS - NODE_RADIUS)
            // Opacity: rises 0→0.7 in first 30%, fades 0.7→0 over last 70%
            const alpha = t < 0.3
              ? (t / 0.3) * 0.7
              : (1 - (t - 0.3) / 0.7) * 0.7
            ctx.beginPath()
            ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(${PRIMARY_RGB}, ${alpha.toFixed(3)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(step)
    }

    // ── bootstrap ────────────────────────────────────────────────────────────

    init()
    animId = requestAnimationFrame(step)

    // Keep canvas exactly sized to its parent section on resize.
    // Re-initialize node count when crossing the mobile/desktop threshold (768px)
    // so orientation changes apply the correct node density.
    let lastMobile = isMobile()
    const ro = new ResizeObserver(() => {
      const nowMobile = isMobile()
      if (nowMobile !== lastMobile) {
        lastMobile = nowMobile
        init() // re-init with correct node count for new screen class
      } else {
        syncSize()
        for (const n of nodes) {
          n.x = Math.max(NODE_RADIUS, Math.min(n.x, canvas.width - NODE_RADIUS))
          n.y = Math.max(NODE_RADIUS, Math.min(n.y, canvas.height - NODE_RADIUS))
        }
      }
    })
    const parent = canvas.parentElement
    if (parent) ro.observe(parent)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-[1] opacity-[0.45] will-change-transform"
    />
  )
}
