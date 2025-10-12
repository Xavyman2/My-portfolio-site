import { HeroSection } from '@/components/ui/hero-section'
import { FloatingProjectShowcase } from '@/components/ui/floating-projects'
import { ValueProposition } from '@/components/ui/value-proposition'
import { TestimonialsSection } from '@/components/ui/testimonials-section'
import { ContactCTABanner } from '@/components/ui/contact-cta-banner'
import { JsonLd, generatePersonSchema, generateWebsiteSchema } from '@/lib/structured-data'

export default function Home() {
  return (
    <>
      <JsonLd data={[generatePersonSchema(), generateWebsiteSchema()]} />
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <FloatingProjectShowcase />
        <ValueProposition />
        <TestimonialsSection />
        <ContactCTABanner />
      </div>
    </>
  )
}
