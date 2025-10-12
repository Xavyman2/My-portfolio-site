'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail, MessageCircle, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn, containerStyles } from '@/lib/utils'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
]

export function Footer() {
  const pathname = usePathname()
  
  return (
    <footer className="border-t border-border bg-background">
      <div className={cn(containerStyles, 'py-12')}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Bio */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold text-foreground mb-4 hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <span>Portfolio</span>
            </Link>
            <p className="text-foreground/80 mb-6 max-w-md">
              Transforming ideas into fast, modern, and scalable Next.js websites. 
              I design, build, and maintain websites that load quickly, convert users, 
              and are easy to manage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="tel:+1234567890" aria-label="Call us" className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:hello@example.com" aria-label="Email us" className="hover:bg-secondary/10 hover:text-secondary transition-all duration-300 hover:scale-110">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://wa.me/1234567890?text=Hi%20I%27d%20like%20to%20discuss%20a%20project"
                  aria-label="WhatsApp us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-foreground/80 hover:text-primary transition-all duration-300 inline-block hover:translate-x-2 hover:font-semibold relative group ${isActive ? 'translate-x-2 font-semibold text-primary' : ''}`}
                    >
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-4 group-hover:-left-5"></span>
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground/80 hover:text-secondary transition-all duration-300 group hover:translate-x-2"
                >
                  <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:font-semibold">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm mt-2 md:mt-0">
            Built with care — Next.js, Tailwind, and a focus on performance and accessibility.
          </p>
        </div>
      </div>
    </footer>
  )
}