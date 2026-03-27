// Right-side vertical scroll progress indicator — desktop only
export default function ScrollIndicator() {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[80] hidden lg:flex flex-col gap-8 items-center pointer-events-none">
      <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="rotate-90 origin-center font-technical text-[8px] tracking-[0.5em] text-white/40 whitespace-nowrap uppercase">
        Scroll to Progress
      </div>
      <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
    </div>
  )
}
