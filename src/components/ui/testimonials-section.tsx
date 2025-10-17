import Image from 'next/image'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/content'
import { containerStyles } from '@/lib/utils'
import { AnimatedSection, ScaleIn } from '@/components/ui/animated-section'

export function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Dots Background */}
      <div className="animated-dots-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 z-[2]" />
      
      <div className={`${containerStyles} relative z-10`}>
        {/* Header with slide-up animation */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              {"Don't just take my word for it. Here's what clients have to say about working with me."}
            </p>
          </div>
        </AnimatedSection>
        
        {/* Testimonial cards with staggered scale-in animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScaleIn key={testimonial.id} delay={index * 0.15}>
              <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-foreground/80 mb-6 leading-relaxed">
                {`“${testimonial.content}”`}
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  ) : (
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  )
}