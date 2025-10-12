import { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, FadeIn, ScaleIn } from '@/components/ui/animated-section'
import { containerStyles } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { services } from '@/data/content'
import { Check, ArrowRight, Zap, Code, Wrench } from 'lucide-react'
import { JsonLd, generateServiceSchema, generateOrganizationSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Services - Portfolio',
  description: 'Professional web development services including Next.js development, full-stack solutions, and ongoing maintenance.',
}

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: "We start by understanding your goals, target audience, and project requirements. I'll provide a detailed proposal with timeline and cost estimates.",
    icon: Zap,
  },
  {
    step: '02',
    title: 'Design & Development',
    description: "I create wireframes and prototypes, then develop your website using modern technologies, ensuring it's responsive and performant.",
    icon: Code,
  },
  {
    step: '03',
    title: 'Testing & Launch',
    description: 'Rigorous testing across devices and browsers, followed by deployment to production and post-launch monitoring.',
    icon: Wrench,
  },
]

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: "Project timelines vary based on scope and complexity. A simple website takes 2-4 weeks, while complex applications can take 2-3 months. I'll provide a detailed timeline during the discovery phase.",
  },
  {
    question: 'Do you offer maintenance after launch?',
    answer: 'Yes! I offer ongoing maintenance packages that include updates, security patches, performance monitoring, and content changes. This ensures your website stays secure and up-to-date.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'I specialize in Next.js, React, TypeScript, and Tailwind CSS for the frontend. For backend, I work with Node.js, PostgreSQL, and modern APIs. All projects are deployed on reliable platforms like Vercel.',
  },
  {
    question: 'Can you help with an existing project?',
    answer: 'Absolutely! I can audit your existing codebase, fix bugs, add new features, or completely rebuild your application with modern technologies.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'I offer both fixed-price projects and hourly rates depending on your needs. For maintenance, I provide monthly retainer packages. Contact me for a custom quote based on your requirements.',
  },
]

export default function ServicesPage() {
  const serviceSchemas = services.map(generateServiceSchema)
  
  return (
    <>
      <JsonLd data={[generateOrganizationSchema(), ...serviceSchemas]} />
      <div className="py-12">
        {/* Hero Section with Animated Gradient */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated Gradient Background */}
          <div 
            className="absolute inset-0 animate-gradient-shift"
            style={{
              background: 'linear-gradient(-45deg, var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
              backgroundSize: '400% 400%',
            }}
          />
          
          {/* Content */}
          <div className={`${containerStyles} relative z-10`}>
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6" style={{ color: 'var(--color-background)' }}>
                  Services I Offer
                </h1>
                <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--color-background)', opacity: 0.9 }}>
                  From initial concept to ongoing support, I provide end-to-end web development services 
                  tailored to your business needs.
                </p>
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-[var(--color-primary)] hover:bg-white/90 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl border-0"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    {"Let's Talk"}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className={containerStyles}>
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
                What I Can Do For You
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                Choose from my range of services designed to help your business succeed online
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScaleIn key={service.id} delay={index * 0.1}>
                <div 
                  className="p-8 rounded-lg h-full flex flex-col"
                  style={{ 
                    backgroundColor: 'var(--color-background)',
                    borderWidth: service.popular ? '2px' : '1px',
                    borderStyle: 'solid',
                    borderColor: service.popular ? 'var(--color-primary)' : 'var(--color-border)',
                  }}
                >
                  {service.popular && (
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}>
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                    {service.title}
                  </h3>
                  
                  <p className="mb-6" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-secondary)' }} />
                        <span style={{ color: 'var(--color-foreground)', opacity: 0.8 }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {service.price && (
                    <div className="pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                      <p className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                        {service.price}
                      </p>
                      <Button asChild className="w-full">
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-muted)' }}>
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
                My Process
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                A streamlined approach to delivering exceptional results
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}>
                    {item.step}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-secondary)' }}>
                    <item.icon className="w-6 h-6" style={{ color: 'var(--color-background)' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                Got questions? I've got answers
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.1}>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-muted)' }}>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-foreground)' }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-muted)' }}>
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-foreground)' }}>
                Ready to Start Your Project?
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                {"Let's discuss how I can help bring your vision to life with a modern, high-performance website."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      </div>
    </>
  )
}