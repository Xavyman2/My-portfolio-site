import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection, FadeIn, SlideInLeft, SlideInRight } from '@/components/ui/animated-section'
import { projects } from '@/data/content'
import { containerStyles } from '@/lib/utils'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { JsonLd, generateProjectSchema, generateBreadcrumbSchema } from '@/lib/structured-data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Project Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: project.title, url: `/projects/${project.slug}` },
  ]

  return (
    <>
      <JsonLd data={[generateProjectSchema(project), generateBreadcrumbSchema(breadcrumbs)]} />
      <div className="py-12">
        {/* Back Link */}
        <section className="py-6">
        <div className={containerStyles}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-primary)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12">
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-foreground)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6" style={{ color: 'var(--color-foreground)' }}>
                {project.title}
              </h1>
              
              <p className="text-xl mb-8" style={{ color: 'var(--color-foreground)', opacity: 0.8 }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-md transition-colors hover:opacity-90"
                    style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-md transition-colors hover:opacity-90"
                    style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-foreground)' }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className={containerStyles}>
          <FadeIn>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--color-muted)' }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="py-12">
        <div className={containerStyles}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <SlideInLeft>
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-foreground)' }}>
                    Project Overview
                  </h2>
                  <div className="prose max-w-none" style={{ color: 'var(--color-foreground)', opacity: 0.8 }}>
                    <p className="text-lg mb-4">
                      {project.description}
                    </p>
                    <p className="text-lg">
                      This project showcases modern web development practices with a focus on performance,
                      user experience, and maintainable code. Built with {project.tags.slice(0, 3).join(', ')},
                      it demonstrates the power of modern web technologies.
                    </p>
                  </div>
                </div>
              </SlideInLeft>

              <SlideInLeft delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-foreground)' }}>
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium"
                        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}>
                        1
                      </span>
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: 'var(--color-foreground)' }}>
                          Responsive Design
                        </h3>
                        <p style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                          Fully responsive layout that works seamlessly across all devices and screen sizes.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium"
                        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}>
                        2
                      </span>
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: 'var(--color-foreground)' }}>
                          Performance Optimized
                        </h3>
                        <p style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                          Optimized for fast loading times and smooth interactions with code splitting and lazy loading.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium"
                        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}>
                        3
                      </span>
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: 'var(--color-foreground)' }}>
                          Modern Tech Stack
                        </h3>
                        <p style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                          Built with the latest technologies and best practices for maintainability and scalability.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </SlideInLeft>

              <SlideInLeft delay={0.3}>
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-foreground)' }}>
                    Technical Challenges
                  </h2>
                  <div className="prose max-w-none" style={{ color: 'var(--color-foreground)', opacity: 0.8 }}>
                    <p className="text-lg">
                      During development, several technical challenges were encountered and successfully resolved,
                      including performance optimization, cross-browser compatibility, and implementing complex
                      interactive features while maintaining code quality and accessibility standards.
                    </p>
                  </div>
                </div>
              </SlideInLeft>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SlideInRight>
                <div className="sticky top-24 space-y-8">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-muted)' }}>
                    <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
                      Project Details
                    </h3>
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-sm font-medium mb-1" style={{ color: 'var(--color-foreground)', opacity: 0.6 }}>
                          Role
                        </dt>
                        <dd className="text-base" style={{ color: 'var(--color-foreground)' }}>
                          Full Stack Developer
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium mb-1" style={{ color: 'var(--color-foreground)', opacity: 0.6 }}>
                          Timeline
                        </dt>
                        <dd className="text-base" style={{ color: 'var(--color-foreground)' }}>
                          2-3 months
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium mb-1" style={{ color: 'var(--color-foreground)', opacity: 0.6 }}>
                          Technologies
                        </dt>
                        <dd>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs font-medium rounded"
                                style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-primary)' }}>
                    <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-background)' }}>
                      Interested in a Similar Project?
                    </h3>
                    <p className="mb-6" style={{ color: 'var(--color-background)', opacity: 0.9 }}>
                      {"Let's discuss how I can help bring your vision to life."}
                    </p>
                    <Link
                      href="/contact"
                      className="block w-full text-center px-6 py-3 font-medium rounded-md transition-colors hover:opacity-90"
                      style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-muted)' }}>
        <div className={containerStyles}>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
                More Projects
              </h2>
              <p className="text-lg" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
                Check out other projects in my portfolio
              </p>
            </div>
          </AnimatedSection>

          <div className="flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md transition-colors hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}