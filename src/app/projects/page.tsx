import { Metadata } from 'next'
import { AnimatedSection, FadeIn } from '@/components/ui/animated-section'
import { ProjectCard } from '@/components/ui/project-card'
import { projects } from '@/data/content'
import { containerStyles } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Projects - Portfolio',
  description: 'Browse my portfolio of web development projects built with Next.js, React, and modern technologies.',
}

const categories = ['all', 'web', 'fullstack', 'mobile'] as const

export default function ProjectsPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-muted)' }}>
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6" style={{ color: 'var(--color-foreground)' }}>
                My Projects
              </h1>
              <p className="text-lg md:text-xl" style={{ color: 'var(--color-foreground)', opacity: 0.8 }}>
                A showcase of web applications and websites I've built for clients and personal projects.
                Each project demonstrates my commitment to quality, performance, and user experience.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className={containerStyles}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: 'var(--color-foreground)', opacity: 0.6 }}>
                No projects found. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-muted)' }}>
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-foreground)' }}>
                {"Let's Build Something Together"}
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md transition-colors hover:opacity-90"
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}
              >
                Start a Project
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}