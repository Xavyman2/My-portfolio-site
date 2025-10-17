import { Zap, Search, Accessibility, HeadphonesIcon } from 'lucide-react'
import { containerStyles } from '@/lib/utils'
import { AnimatedSection, FadeIn } from '@/components/ui/animated-section'

const values = [
  {
    icon: Zap,
    title: 'Speed & Performance',
    description: 'Pixel-perfect UI paired with production-quality code that achieves excellent Core Web Vitals scores.',
  },
  {
    icon: Search,
    title: 'SEO & Accessibility',
    description: 'SEO-aware structure so customers find you, with full accessibility compliance for all users.',
  },
  {
    icon: Accessibility,
    title: 'Clean, Maintainable Code',
    description: 'Well-structured, documented code that your team can easily understand and maintain.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Clear Communication',
    description: 'Ongoing maintenance and support options with clear, timely communication throughout.',
  },
]

export function ValueProposition() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated Dots Background */}
      <div className="animated-dots-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-muted/50 z-[2]" />
      
      <div className={`${containerStyles} relative z-10`}>
        {/* Header with slide-up animation */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
              Why Clients Trust Me
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              I focus on delivering exceptional results that drive business growth and user satisfaction.
            </p>
          </div>
        </AnimatedSection>
        
        {/* Value cards with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}