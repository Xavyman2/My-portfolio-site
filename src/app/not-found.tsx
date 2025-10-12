import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { containerStyles } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float-slow"
          style={{ background: 'var(--color-primary)' }}
        />
        <div 
          className="absolute top-40 right-20 w-96 h-96 rounded-full opacity-15 blur-3xl animate-float-medium"
          style={{ background: 'var(--color-secondary)' }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl animate-float-fast"
          style={{ background: 'var(--color-accent)' }}
        />
      </div>

      {/* Content */}
      <div className={`${containerStyles} relative z-10`}>
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number with gradient */}
          <div className="relative mb-8">
            <h1 
              className="text-[10rem] md:text-[15rem] lg:text-[18rem] font-bold font-poppins leading-none animate-pulse-slow"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 0.8,
              }}
            >
              404
            </h1>
            
            {/* Glitch effect overlay */}
            <div 
              className="absolute inset-0 animate-glitch"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 0.3,
              }}
              aria-hidden="true"
            >
              <span className="text-[10rem] md:text-[15rem] lg:text-[18rem] font-bold font-poppins leading-none block">404</span>
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-4 mb-12 animate-fade-in-up">
            <h2 
              className="text-3xl md:text-4xl font-bold font-poppins"
              style={{ color: 'var(--color-foreground)' }}
            >
              Page Not Found
            </h2>
            <p 
              className="text-lg md:text-xl"
              style={{ color: 'var(--color-foreground)', opacity: 0.7 }}
            >
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
            <p 
              className="text-base"
              style={{ color: 'var(--color-foreground)', opacity: 0.6 }}
            >
              Don't worry though, let's get you back on track!
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delayed">
            <Button size="lg" asChild className="min-w-[180px] group">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Go Home
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="min-w-[180px] group">
              <Link href="/projects" className="flex items-center gap-2">
                <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
                View Projects
              </Link>
            </Button>
          </div>

          {/* Quick links */}
          <div className="mt-16 pt-8 border-t animate-fade-in-up-delayed" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-sm mb-4" style={{ color: 'var(--color-foreground)', opacity: 0.6 }}>
              Or explore these pages:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg"
                  style={{ 
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-muted)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
