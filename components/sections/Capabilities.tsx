import { capabilities, capabilityMetrics } from '@/data/content'

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="chapter-section snap-section bg-[#0A0C10]"
    >
      {/* Skewed blue accent panel — top-right background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 origin-top -z-10" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left column — chapter label + heading + icon grid */}
        <div>
          <p className="font-technical text-primary text-sm tracking-[0.4em] mb-4">
            CHAPTER_02 // ARCHITECTURE
          </p>
          <h2 className="font-headline text-[48px] md:text-8xl mb-4 md:mb-8 leading-none">
            SYSTEM
            <br />
            <span className="text-stroke">CAPABILITIES</span>
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-4 md:mb-12">
            I bridge the gap between experimental AI and hardened production software through
            four core pillars.
          </p>

          {/* 2×2 capability icon grid */}
          <div className="grid grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title}>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                  {cap.icon}
                </span>
                <h4 className="font-technical text-xs font-bold mb-2">{cap.title}</h4>
                <p className="text-[10px] text-white/50 uppercase tracking-tighter">
                  {cap.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — metrics dashboard panel */}
        <div className="hidden md:block border border-white/5 bg-white/5 p-12 backdrop-blur-3xl">
          <div className="space-y-8">
            {capabilityMetrics.map((metric) => (
              <div
                key={metric.label}
                className="flex justify-between items-end border-b border-white/10 pb-4"
              >
                <span
                  className={`font-headline text-4xl${metric.ghost ? ' text-stroke' : ''}`}
                >
                  {metric.label}
                </span>
                <span className="font-technical text-primary">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
