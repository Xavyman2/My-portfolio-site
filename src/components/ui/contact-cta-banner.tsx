import Link from 'next/link'
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { containerStyles } from '@/lib/utils'
import { AnimatedSection, FadeIn } from '@/components/ui/animated-section'

export function ContactCTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 relative overflow-hidden">
      {/* Animated Dots Background */}
      <div className="animated-dots-bg dots-with-connections opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 z-[2]" />
      
      <div className={`${containerStyles} relative z-10`}>
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-foreground/80 mb-2">
              {"Let's build something your customers love."}
            </p>
            <p className="text-foreground/70 mb-8">
              {"Tell me about your project — I'll respond within 24 hours."}
            </p>
            
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-lg px-8 py-4">
              <a href="tel:+1234567890" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4">
              <a 
                href="mailto:hello@example.com?subject=Project%20Inquiry"
                className="flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </Button>
            
            <Button variant="secondary" size="lg" asChild className="text-lg px-8 py-4">
              <a
                href="https://wa.me/1234567890?text=Hi%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            
            <Button variant="ghost" size="lg" asChild className="text-lg px-8 py-4">
              <Link href="/contact" className="flex items-center gap-2">
                Request Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Available for new projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>24-hour response time</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Free consultation</span>
            </div>
              </div>
            </FadeIn>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}