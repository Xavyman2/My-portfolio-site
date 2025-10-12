'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Project } from '@/types'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  className?: string
  compact?: boolean
}

export function ProjectCard({ project, className, compact = false }: ProjectCardProps) {
  if (compact) {
    return (
      <Link 
        href={`/projects/${project.slug}`}
        className={cn(
          'group relative overflow-hidden rounded-lg border transition-all duration-300 block hover:shadow-xl hover:scale-[1.02]',
          className
        )}
        style={{
          backgroundColor: 'var(--color-background)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 340px, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5">
          <h3 
            className="font-semibold text-lg mb-2 line-clamp-1 transition-colors" 
            style={{ color: 'var(--color-foreground)' }}
          >
            {project.title}
          </h3>
          <p 
            className="text-sm mb-3 line-clamp-2" 
            style={{ color: 'var(--color-foreground)', opacity: 0.7 }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{
                  backgroundColor: 'var(--color-muted)',
                  color: 'var(--color-foreground)',
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span 
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{
                  backgroundColor: 'var(--color-muted)',
                  color: 'var(--color-foreground)',
                }}
              >
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <div 
            className="text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            style={{ color: 'var(--color-primary)' }}
          >
            View Case Study 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div className={cn(
      'group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300',
      className
    )}>
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold font-poppins text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex space-x-2">
            {project.liveUrl && (
              <Button variant="ghost" size="icon" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live site">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="ghost" size="icon" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View source code">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        
        <p className="text-foreground/80 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-muted text-foreground/70 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Button asChild className="w-full">
          <Link href={`/projects/${project.id}`}>
            View Case Study
          </Link>
        </Button>
      </div>
    </div>
  )
}