import { links } from '@/data/links'
import TerminalStrip from '@/components/TerminalStrip'

export default function About() {
  return (
    <section
      id="about"
      className="chapter-section snap-section bg-[#0D1117]"
    >
      <div className="max-w-5xl pb-24 md:pb-0">
        {/* Chapter marker */}
        <p className="font-technical text-primary text-sm tracking-[0.4em] mb-4">
          CHAPTER_06 // CORE_LOGIC
        </p>

        {/* Ghost headline — hover reveals white */}
        <h2 className="font-headline text-[32px] sm:text-[40px] md:text-[80px] lg:text-[100px] leading-none mb-10 md:mb-12 text-stroke hover:text-white transition-all duration-700 cursor-default">
          CODE FOR PRODUCTION,
          <br />
          NOT FOR DEMOS.
        </h2>

        {/* Two-column: philosophy left, links right */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Philosophy */}
          <div className="space-y-6 text-on-surface-variant text-base md:text-lg leading-relaxed font-body">
            <p>
              I am obsessed with moving intelligence from experimental notebooks into
              high-performance production environments.
            </p>
            <p>
              Whether it's optimizing RAG latency to 1ms or architecting HIPAA-compliant
              data lakes, my focus remains constant:{' '}
              <span className="text-white">Signal over Noise.</span>
            </p>
          </div>

          {/* Social links + footer tag */}
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <span className="font-technical text-[10px] text-primary tracking-[0.3em]">
                CONNECT_LOCALLY
              </span>
              <div className="flex gap-6 font-headline text-3xl">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GH
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LI
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  TW
                </a>
                <a
                  href={`mailto:${links.email}`}
                  className="hover:text-primary transition-colors"
                >
                  MAIL
                </a>
              </div>
            </div>

            {/* Version tag */}
            <div className="pt-8 border-t border-white/10">
              <p className="font-technical text-[10px] text-white/30 uppercase tracking-[0.4em]">
                VBJ PORTFOLIO 2026 / V1.0.4_STABLE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated terminal strip — bottom of last section */}
      <TerminalStrip />
    </section>
  )
}
