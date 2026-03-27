export default function Research() {
  return (
    <section
      id="research"
      className="chapter-section snap-section bg-[#07090D]"
    >
      <div className="max-w-4xl">
        {/* Chapter marker */}
        <p className="font-technical text-primary text-sm tracking-[0.4em] mb-4">
          CHAPTER_05 // INTELLIGENCE
        </p>

        {/* Headline — ghost AUTHOR. */}
        <h2 className="font-headline text-[48px] md:text-[140px] leading-[0.85] mb-4 md:mb-12">
          FIRST
          <br />
          <span className="text-stroke">AUTHOR.</span>
        </h2>

        {/* Blue accent divider */}
        <div className="border-t border-primary/20 pt-4 md:pt-12 flex flex-col md:flex-row gap-6 md:gap-16">
          {/* Left — paper info */}
          <div className="flex-1">
            <h3 className="font-headline text-3xl md:text-4xl mb-4">HOPELINK RESEARCH</h3>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
              IISE ANNUAL CONFERENCE 2026. Investigating the intersection of LLMs and
              Clinical Decision Support - patient-ready summaries with domain-scoped trust
              boundaries and 85% citation compliance.
            </p>
          </div>

          {/* Right — status card with Material Symbol */}
          <div className="w-full md:w-64 bg-white/5 p-6 flex flex-col justify-between border border-white/10">
            <span className="material-symbols-outlined text-primary text-5xl">
              description
            </span>
            <div>
              <div className="font-technical text-[10px] text-white mb-1">
                ACCEPTED_PEER_REVIEW
              </div>
              <div className="font-technical text-[8px] text-white/40">
                VIJAYARAGHAVAN ET AL.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
