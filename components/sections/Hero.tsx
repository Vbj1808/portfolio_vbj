import HeroBackground from '@/components/HeroBackground'

export default function Hero() {
  return (
    <section
      id="hero"
      className="chapter-section snap-section bg-background hero-dot-grid"
    >
      {/* Layer 2 — neural graph canvas */}
      <HeroBackground />

      {/* Layer 3 — radial vignette: fades canvas at outer edges only, center stays clear */}
      <div className="absolute inset-0 hero-vignette pointer-events-none z-[2] opacity-70" />

      {/* Layer 4 — hero content */}
      <div className="relative z-10 max-w-5xl">
        {/* Chapter marker */}
        <p className="font-technical text-primary text-sm tracking-[0.4em] mb-4">
          CHAPTER_01 // IDENTITY
        </p>

        {/* Name — massive Bebas Neue, last name ghost text-stroke */}
        <h1 className="font-headline text-[42px] sm:text-[56px] md:text-[140px] leading-[0.85] mb-8">
          BALAJI
          <br />
          JEGADEESH
          <br />
          <span className="text-stroke break-words">VIJAYARAGHAVAN</span>
        </h1>

        {/* Subtitle + tagline row */}
        <div className="flex flex-col md:flex-row md:items-end gap-8">
          <p className="font-technical text-lg md:text-xl text-primary/80 max-w-sm">
            AI Systems Engineer &amp; Full-Stack Developer
          </p>
          <p className="text-on-surface-variant text-base md:text-lg max-w-md leading-relaxed border-l border-white/10 pl-8">
            Architecting high-provenance RAG pipelines and multi-agent backend ecosystems for
            production-grade intelligence.
          </p>
        </div>
      </div>

      {/* Coordinates */}
      <div className="absolute bottom-12 left-6 md:left-12 font-technical text-[10px] text-white/30 tracking-widest z-10">
        [ 42.3584° N, 71.0598° W ] // LAST_SYNC: 2M_AGO
      </div>
    </section>
  )
}
