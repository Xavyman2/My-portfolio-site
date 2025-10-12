'use client'

import { useState, useRef } from 'react'
import { ProjectCard } from '@/components/ui/project-card'
import { projects } from '@/data/content'
import { containerStyles } from '@/lib/utils'
import { AnimatedSection, FadeIn, SlideInLeft, SlideInRight } from '@/components/ui/animated-section'

const featuredProjects = projects.filter(project => project.featured)
// Create enough duplicates for seamless infinite scroll
const createMarqueeItems = () => {
  const items = []
  for (let i = 0; i < 8; i++) { // 8 copies for ultra-smooth scrolling
    items.push(...featuredProjects)
  }
  return items
}

const marqueeItems = createMarqueeItems()

export function FloatingProjectShowcase() {
  const [isPausedRow1, setIsPausedRow1] = useState(false)
  const [isPausedRow2, setIsPausedRow2] = useState(false)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  // Handle pause/play for Row 1
  const handleRow1Pause = () => {
    setIsPausedRow1(true)
    if (row1Ref.current) {
      row1Ref.current.style.animationPlayState = 'paused'
    }
  }

  const handleRow1Play = () => {
    setIsPausedRow1(false)
    if (row1Ref.current) {
      row1Ref.current.style.animationPlayState = 'running'
    }
  }

  // Handle pause/play for Row 2
  const handleRow2Pause = () => {
    setIsPausedRow2(true)
    if (row2Ref.current) {
      row2Ref.current.style.animationPlayState = 'paused'
    }
  }

  const handleRow2Play = () => {
    setIsPausedRow2(false)
    if (row2Ref.current) {
      row2Ref.current.style.animationPlayState = 'running'
    }
  }

  if (featuredProjects.length === 0) {
    return null
  }

  return (
    <section 
      className="py-20 overflow-hidden relative" 
      style={{ backgroundColor: 'var(--color-muted)' }} 
      aria-labelledby="featured-projects-heading"
    >
      {/* Header with slide-up animation */}
      <AnimatedSection>
        <div className={containerStyles}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 
              id="featured-projects-heading" 
              className="text-3xl md:text-4xl font-bold font-poppins mb-4" 
              style={{ color: 'var(--color-foreground)' }}
            >
              Recent Featured Work
            </h2>
            <p className="text-lg" style={{ color: 'var(--color-foreground)', opacity: 0.7 }}>
              A rotating look at a few favorite launches. Hover or touch any card to pause the motion and dive deeper.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Marquee Container - Full Width with animations */}
      <div className="relative">
        {/* Blur/Fade Gradients - Keep these as you liked them */}
        <div 
          className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-32 z-20" 
          style={{ 
            background: 'linear-gradient(to right, var(--color-muted) 0%, var(--color-muted) 20%, transparent 100%)' 
          }} 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-32 z-20" 
          style={{ 
            background: 'linear-gradient(to left, var(--color-muted) 0%, var(--color-muted) 20%, transparent 100%)' 
          }} 
          aria-hidden="true" 
        />

        <div className="space-y-8">
          {/* Row 1: Moving LEFT TO RIGHT → with slide-in animation */}
          <SlideInLeft delay={0.2}>
            <div className="relative">
              <div
                ref={row1Ref}
                className="flex gap-6 animate-marquee will-change-transform"
                style={{
                  width: 'max-content',
                  animationDuration: '100s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite',
                }}
                onMouseEnter={handleRow1Pause}
                onMouseLeave={handleRow1Play}
                onTouchStart={handleRow1Pause}
                onTouchEnd={handleRow1Play}
              >
                {marqueeItems.map((project, index) => (
                  <div 
                    key={`row1-${project.id}-${index}`}
                    className="w-[280px] md:w-[320px] flex-shrink-0"
                  >
                    <ProjectCard
                      project={project}
                      compact
                    />
                  </div>
                ))}
              </div>
            </div>
          </SlideInLeft>

          {/* Row 2: Moving RIGHT TO LEFT ← with slide-in animation */}
          <SlideInRight delay={0.4}>
            <div className="relative">
              <div
                ref={row2Ref}
                className="flex gap-6 animate-marquee-reverse will-change-transform"
                style={{
                  width: 'max-content',
                  animationDuration: '100s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite',
                }}
                onMouseEnter={handleRow2Pause}
                onMouseLeave={handleRow2Play}
                onTouchStart={handleRow2Pause}
                onTouchEnd={handleRow2Play}
              >
                {marqueeItems.map((project, index) => (
                  <div 
                    key={`row2-${project.id}-${index}`}
                    className="w-[280px] md:w-[320px] flex-shrink-0"
                  >
                    <ProjectCard
                      project={project}
                      compact
                    />
                  </div>
                ))}
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>

      {/* Screen reader description */}
      <div className="sr-only" aria-live="polite">
        <p>
          Featured projects include{' '}
          {featuredProjects.map((project, idx) => (
            <span key={project.id}>
              {project.title}
              {idx < featuredProjects.length - 1 && ', '}
            </span>
          ))}
          . Use tab navigation to focus each project card and pause the showcase.
        </p>
      </div>
    </section>
  )
}