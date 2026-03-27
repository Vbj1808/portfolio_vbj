import { projects } from '@/data/content'

// Stagger delays: 0s · 0.75s · 1.5s · 2.25s
const BEAM_DELAYS = ['0s', '0.75s', '1.5s', '2.25s']

export default function Work() {
  return (
    // overflow-hidden at section level clips beams at section boundary
    <section
      id="work"
      className="chapter-section snap-section overflow-hidden"
      style={{ backgroundColor: '#07090D' }}
    >

      {/* Header row */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full mb-8 md:mb-12 relative z-10">
        <div className="max-w-3xl">
          <p className="font-technical text-primary text-sm tracking-[0.4em] mb-4">
            CHAPTER_03 // DEPLOYMENTS
          </p>
          <h2 className="font-headline text-[42px] sm:text-[56px] md:text-[120px] leading-none mb-4 md:mb-6">
            SIGNAL OVER
            <br />
            <span className="text-stroke">NOISE.</span>
          </h2>
        </div>
        <div className="font-technical text-[10px] tracking-widest text-white/40 md:mb-4">
          50+ PRODUCTION APIs / 20K+ ASSETS PROCESSED
        </div>
      </div>

      {/*
        overflow-visible on grid so beams escape upward past the grid boundary.
        section overflow-hidden then clips them cleanly at the section edge.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 relative z-10 overflow-visible">
        {projects.map((project, index) => (
          <div
            key={project.tag}
            // relative + overflow-visible: beam is anchored to card but escapes upward
            className="relative overflow-visible bg-white/5 border border-white/10 p-6 md:p-8 hover:bg-primary/10 hover:border-primary/40 transition-[background-color,border-color] duration-300 cursor-pointer group/card"
          >
            {/*
              Signal beam — sits above the card top edge.
              Normal state: slow pulse via animate-signal-beam.
              Hover state: animation killed, opacity locked to 1 (solid beam).
              transition-opacity makes the hover-in smooth even as animation cuts.
            */}
            <div
              className={[
                'signal-beam hidden sm:block',
                project.tag === 'DOKIS' ? 'signal-beam-dokis' : '',
                'animate-signal-beam transition-opacity duration-300',
                'group-hover/card:animate-none group-hover/card:opacity-100',
              ].join(' ')}
              style={{ animationDelay: BEAM_DELAYS[index] }}
            />

            {/* Top row — tag + status */}
            <div className="flex justify-between mb-6 md:mb-8">
              <span
                className={[
                  'font-technical text-[10px] px-2 py-1',
                  project.tagBordered
                    ? 'border border-primary text-primary'
                    : 'border border-white/20 text-white/70',
                ].join(' ')}
              >
                {project.tag}
              </span>
              <span
                className={[
                  'font-technical text-[10px]',
                  project.statusColor === 'accent' ? 'text-accent' : 'text-white/40',
                ].join(' ')}
              >
                {project.status}
              </span>
            </div>

            {/* Project title */}
            <h3 className="font-headline text-3xl md:text-4xl mb-3 md:mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
