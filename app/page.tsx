'use client'

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { ProgramSection } from '@/components/program-section'
import { LiveStreamSection } from '@/components/livestream-section'
import { GivingSection } from '@/components/giving-section'
import { SermonSection } from '@/components/sermon-section'
import { GallerySection } from '@/components/gallery-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full bg-background">
      <Navigation />
      <HeroSection />
      <ProgramSection />
      <LiveStreamSection />
      <GivingSection />
      <SermonSection />
      <GallerySection />
      <Footer />
    </main>
  )
}
