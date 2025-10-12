import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Common container styles
export const containerStyles = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'

// Get CSS variable colors for inline styles
export const colors = {
  background: 'var(--color-background)',
  foreground: 'var(--color-foreground)',
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  accent: 'var(--color-accent)',
  muted: 'var(--color-muted)',
  border: 'var(--color-border)',
}