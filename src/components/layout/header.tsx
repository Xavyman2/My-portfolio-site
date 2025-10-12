'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { cn, containerStyles } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className={cn(containerStyles, 'flex h-16 items-center justify-between')}>
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 text-xl font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 group"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
            <Image
              src="/projects/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span>Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
              >
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                ></span>
              </Link>
            )
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="tel:+1234567890" aria-label="Call us">
              <Phone className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:hello@example.com" aria-label="Email us">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background">
          <div className={cn(containerStyles, 'py-4 space-y-4')}>
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:translate-x-2 hover:font-semibold ${isActive ? 'translate-x-2 font-semibold text-primary' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              <Button variant="ghost" size="icon" asChild>
                <a href="tel:+1234567890" aria-label="Call us">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:hello@example.com" aria-label="Email us">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild className="ml-auto">
                <Link href="/contact">Hire Me</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}