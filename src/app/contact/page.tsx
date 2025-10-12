import { Metadata } from 'next'
import { AnimatedSection, FadeIn, SlideInLeft, SlideInRight } from '@/components/ui/animated-section'
import { ContactForm } from '@/components/ui/contact-form'
import { containerStyles } from '@/lib/utils'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact - Get in Touch',
  description: 'Get in touch to discuss your next project. Available via email, phone, or WhatsApp.',
}

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
    description: 'Send me an email anytime',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    description: 'Call during business hours',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+1 (555) 123-4567',
    href: 'https://wa.me/15551234567',
    description: 'Message me on WhatsApp',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: undefined,
    description: 'Available for remote work',
  },
]

export default function ContactPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-muted)' }}>
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6" style={{ color: 'var(--color-foreground)' }}>
                {"Let's Work Together"}
              </h1>
              <p className="text-lg md:text-xl" style={{ color: 'var(--color-foreground)', opacity: 0.8 }}>
                Have a project in mind? I'd love to hear about it. Fill out the form below or reach out directly
                via email, phone, or WhatsApp.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-20">
        <div className={containerStyles}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Methods */}
            <div className="space-y-8">
              <SlideInLeft>
                <div>
                  <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
                    Get in Touch
                  </h2>
                  <p className="text-lg mb-8" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                    {"I'm always excited to discuss new projects and opportunities. Choose your preferred method of contact below."}
                  </p>
                </div>
              </SlideInLeft>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <SlideInLeft key={method.label} delay={index * 0.1}>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 p-6 rounded-lg transition-colors hover:opacity-90"
                        style={{ backgroundColor: 'var(--color-muted)' }}
                      >
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'var(--color-primary)' }}
                        >
                          <method.icon className="w-6 h-6" style={{ color: 'var(--color-background)' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1" style={{ color: 'var(--color-foreground)' }}>
                            {method.label}
                          </h3>
                          <p className="font-medium mb-1" style={{ color: 'var(--color-primary)' }}>
                            {method.value}
                          </p>
                          <p className="text-sm" style={{ color: 'var(--color-foreground)', opacity: 0.6 }}>
                            {method.description}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div
                        className="flex items-start gap-4 p-6 rounded-lg"
                        style={{ backgroundColor: 'var(--color-muted)' }}
                      >
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'var(--color-primary)' }}
                        >
                          <method.icon className="w-6 h-6" style={{ color: 'var(--color-background)' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1" style={{ color: 'var(--color-foreground)' }}>
                            {method.label}
                          </h3>
                          <p className="font-medium mb-1" style={{ color: 'var(--color-foreground)' }}>
                            {method.value}
                          </p>
                          <p className="text-sm" style={{ color: 'var(--color-foreground)', opacity: 0.6 }}>
                            {method.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </SlideInLeft>
                ))}
              </div>

              <SlideInLeft delay={0.4}>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-background)' }}>
                    Response Time
                  </h3>
                  <p style={{ color: 'var(--color-background)', opacity: 0.9 }}>
                    I typically respond to all inquiries within 24 hours during business days.
                    For urgent matters, feel free to call or message me on WhatsApp.
                  </p>
                </div>
              </SlideInLeft>
            </div>

            {/* Right Column - Contact Form */}
            <SlideInRight>
              <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--color-muted)' }}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-foreground)' }}>
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-muted)' }}>
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-foreground)' }}>
                Common Questions
              </h2>

              <div className="space-y-6">
                <FadeIn delay={0.1}>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-background)' }}>
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--color-foreground)' }}>
                      What is your typical project timeline?
                    </h3>
                    <p style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                      Project timelines vary depending on scope and complexity, typically ranging from 2-4 months.
                      {"I'll"} provide a detailed timeline during our initial consultation.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-background)' }}>
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--color-foreground)' }}>
                      Do you offer ongoing support and maintenance?
                    </h3>
                    <p style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                      Yes! I offer various support and maintenance packages to keep your website running smoothly
                      after launch. We can discuss the best option for your needs.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-background)' }}>
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--color-foreground)' }}>
                      What information do you need to get started?
                    </h3>
                    <p style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                      {"I'll"} need to understand your business goals, target audience, desired features, and any design
                      preferences. We can discuss all of this during our initial consultation.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}