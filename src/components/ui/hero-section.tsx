'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn, containerStyles } from '@/lib/utils'

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className={cn(containerStyles, 'relative z-10')}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins text-foreground mb-6 animate-fade-in leading-tight">
            Transforming ideas into{' '}
            <span className="inline-block px-4 py-1.5 mx-2 rounded-full bg-primary/5 backdrop-blur-md border border-primary/15 shadow-[0_8px_32px_0_rgba(0,180,255,0.25),0_4px_16px_0_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_0_rgba(0,180,255,0.35),0_6px_20px_0_rgba(0,0,0,0.15)] transition-all duration-300 text-primary text-3xl md:text-5xl lg:text-6xl font-sans font-semibold">
              fast, modern,
            </span>{' '}
            and scalable Next.js websites.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-slide-up">
            {"I design, build, and maintain Next.js websites that load quickly, convert users, "}
            {"and are easy to manage. Let's craft your next digital experience."}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button size="lg" asChild className="text-lg px-8 py-4">
              <Link href="/contact" className="flex items-center gap-2">
                Hire Me
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4">
              <Link href="/projects" className="flex items-center gap-2">
                View Work
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          {/* Quick Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 animate-slide-up">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-foreground/60">Call directly</p>
                <p className="font-medium">+1 (234) 567-890</p>
              </div>
            </a>
            
            <a
              href="mailto:hello@example.com?subject=Project%20Inquiry"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-foreground/60">Email me</p>
                <p className="font-medium">hello@example.com</p>
              </div>
            </a>
            
            <a
              href="https://wa.me/1234567890?text=Hi%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-foreground/60">WhatsApp</p>
                <p className="font-medium">Quick chat</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}