import { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedSection, SlideInLeft, SlideInRight, FadeIn } from '@/components/ui/animated-section'
import { containerStyles } from '@/lib/utils'
import { Code2, Rocket, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Portfolio',
  description: 'Learn more about my journey, skills, and values as a Next.js developer.',
}

const skills = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'API Design'],
  },
  {
    category: 'Tools & Methods',
    items: ['Git', 'VS Code', 'Vercel', 'Figma', 'Agile/Scrum'],
  },
  {
    category: 'Specialties',
    items: ['Performance Optimization', 'SEO', 'Accessibility', 'Responsive Design'],
  },
]

const timeline = [
  {
    year: '2024',
    title: 'Senior Full-stack Developer',
    company: 'OpenRouter',
    description: 'Leading development of enterprise Next.js applications, mentoring junior developers, and implementing best practices at the company I co-created.',
  },
  {
    year: '2022',
    title: 'Full-stack Developer',
    company: 'OpenRouter',
    description: 'Built and maintained client websites using modern web technologies, focusing on performance and user experience.',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'OpenRouter',
    description: 'Developed responsive web applications and collaborated with design teams to create pixel-perfect interfaces.',
  },
  {
    year: '2019',
    title: 'Co-Founded OpenRouter',
    company: 'OpenRouter',
    description: 'Started as a curious individual with partners, co-creating OpenRouter and continuously improving my skills through hands-on experience.',
  },
]

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'I believe in writing code that is not only functional but also maintainable and easy to understand.',
  },
  {
    icon: Rocket,
    title: 'Performance First',
    description: 'Every millisecond counts. I optimize for speed without compromising on features or user experience.',
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'At the end of the day, it\'s about creating experiences that users love and find intuitive.',
  },
  {
    icon: Award,
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and I stay current with the latest trends and best practices.',
  },
]

export default function AboutPage() {
  return (
    <div className="py-12">
      {/* Hero Section with Profile Photo */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--color-muted)' }}>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" 
          style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }} 
        />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10" 
          style={{ background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)' }} 
        />
        
        <div className={containerStyles}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto relative">
            {/* Profile Photo - Left Side */}
            <SlideInLeft>
              <div className="relative group">
                {/* Decorative backdrop */}
                <div 
                  className="absolute -inset-4 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
                />
                
                {/* Main photo frame */}
                <div className="relative">
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                      padding: '4px',
                    }}
                  >
                    <div className="w-full h-full rounded-2xl" style={{ backgroundColor: 'var(--color-muted)' }} />
                  </div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
                    <Image
                      src="/projects/profile.jpg"
                      alt="Profile photo"
                      width={600}
                      height={600}
                      priority
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Accent corner elements */}
                  <div 
                    className="absolute -top-2 -left-2 w-20 h-20 rounded-tl-2xl border-l-4 border-t-4 opacity-60"
                    style={{ borderColor: 'var(--color-accent)' }}
                  />
                  <div 
                    className="absolute -bottom-2 -right-2 w-20 h-20 rounded-br-2xl border-r-4 border-b-4 opacity-60"
                    style={{ borderColor: 'var(--color-accent)' }}
                  />
                </div>
              </div>
            </SlideInLeft>

            {/* Text Content - Right Side */}
            <SlideInRight>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6" style={{ color: 'var(--color-foreground)' }}>
                  About Me
                </h1>
                <p className="text-lg md:text-xl mb-4 leading-relaxed" style={{ color: 'var(--color-foreground)', opacity: 0.8 }}>
                  I'm a passionate Next.js developer and co-founder of OpenRouter, with a love for creating beautiful, performant web experiences.
                </p>
                <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                  Since 2019, I started as a curious individual who co-created OpenRouter with partners. Through years of hands-on experience, 
                  I've developed expertise in building modern web applications that are fast, accessible, and delightful to use.
                </p>
                
                {/* Decorative stat highlights */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)' }}>
                    <div className="text-2xl font-bold font-poppins mb-1" style={{ color: 'var(--color-primary)' }}>5+</div>
                    <div className="text-sm opacity-70">Years Exp.</div>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)' }}>
                    <div className="text-2xl font-bold font-poppins mb-1" style={{ color: 'var(--color-secondary)' }}>23+</div>
                    <div className="text-sm opacity-70">Projects</div>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)' }}>
                    <div className="text-2xl font-bold font-poppins mb-1" style={{ color: 'var(--color-accent)' }}>96%</div>
                    <div className="text-sm opacity-70">Satisfied</div>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className={containerStyles}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-foreground)' }}>
                My Story
              </h2>
              <div className="space-y-4" style={{ color: 'var(--color-foreground)', opacity: 0.8 }}>
                <p>
                  My journey into web development started with a curiosity about how websites work. 
                  What began as a hobby quickly turned into a passion, and I haven't looked back since.
                </p>
                <p>
                  Over the years, I've had the privilege of working with amazing teams and clients, 
                  building everything from small business websites to large-scale enterprise applications.
                </p>
                <p>
                  Today, I focus on Next.js and the React ecosystem, helping businesses create web 
                  experiences that not only look great but perform exceptionally well.
                </p>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="rounded-lg p-8" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}>
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">📍</span>
                    <span>Based in Mityana Municipality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">💼</span>
                    <span>5+ years of professional experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">🏆</span>
                    <span>23+ successful projects delivered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">🚀</span>
                    <span>Co-founder of OpenRouter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">🎓</span>
                    <span>Continuous learner and tech enthusiast</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">☕</span>
                    <span>Powered by coffee and curiosity</span>
                  </li>
                </ul>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-muted)' }}>
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
                Skills & Expertise
              </h2>
              <p className="text-lg" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                Technologies and tools I work with daily
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <FadeIn key={skillGroup.category} delay={index * 0.1}>
                <div className="p-6 rounded-lg h-full" style={{ backgroundColor: 'var(--color-background)', borderWidth: '1px', borderColor: 'var(--color-border)' }}>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="flex items-center" style={{ color: 'var(--color-foreground)', opacity: 0.8 }}>
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: 'var(--color-secondary)' }} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
                My Journey
              </h2>
              <p className="text-lg" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                A timeline of my professional growth
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.15}>
                <div className="relative pl-8 pb-12 border-l-2 last:pb-0" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px]" style={{ backgroundColor: 'var(--color-primary)' }} />
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}>
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--color-foreground)' }}>
                    {item.title}
                  </h3>
                  <p className="font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                    {item.company}
                  </p>
                  <p style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-muted)' }}>
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
                My Values
              </h2>
              <p className="text-lg" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                Principles that guide my work
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="text-center p-6 rounded-lg h-full" style={{ backgroundColor: 'var(--color-background)' }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                    <value.icon className="w-8 h-8" style={{ color: 'var(--color-background)' }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-foreground)' }}>
                    {value.title}
                  </h3>
                  <p style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}