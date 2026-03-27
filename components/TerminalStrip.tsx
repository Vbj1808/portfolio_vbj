import { terminalMessages } from '@/data/content'

// Duplicated messages for seamless marquee loop (marquee moves -50% of total width)
const loopedMessages = [...terminalMessages, ...terminalMessages]

export default function TerminalStrip() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-12 bg-black border-t border-white/10 flex items-center overflow-hidden">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {loopedMessages.map((msg, i) => (
          <span
            key={i}
            className={[
              'font-technical text-[9px] tracking-[0.2em] opacity-50 mx-8',
              msg.includes('OPEN TO ROLES') ? 'text-primary' : 'text-white',
            ].join(' ')}
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
