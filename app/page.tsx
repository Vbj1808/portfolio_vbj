import ScrollIndicator from '@/components/ScrollIndicator'
import Hero from '@/components/sections/Hero'
import Capabilities from '@/components/sections/Capabilities'
import Work from '@/components/sections/Work'
import Research from '@/components/sections/Research'
import Pipeline from '@/components/sections/Pipeline'
import About from '@/components/sections/About'

export default function Home() {
  return (
    <>
      {/* Right-side scroll progress indicator — desktop only */}
      <ScrollIndicator />

      {/* Snap scroll container — full viewport, mandatory snapping between chapters */}
      <div className="snap-container">
        <Hero />
        <Capabilities />
        <Work />
        <Pipeline />
        <Research />
        <About />
      </div>
    </>
  )
}
