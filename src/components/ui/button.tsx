'use client'

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-[var(--color-background)] hover:opacity-90',
        secondary: 'text-[var(--color-background)] hover:opacity-90',
        outline: 'border-2 hover:text-[var(--color-background)]',
        ghost: 'hover:bg-[var(--color-primary)]/10',
        link: 'underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    // Define inline styles for color variants since Tailwind v4 handles CSS vars differently
    const variantStyles: Record<string, React.CSSProperties> = {
      default: {
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-background)',
      },
      secondary: {
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-background)',
      },
      outline: {
        borderColor: 'var(--color-primary)',
        color: 'var(--color-primary)',
      },
      ghost: {
        color: 'var(--color-primary)',
      },
      link: {
        color: 'var(--color-primary)',
      },
    }
    
    const combinedStyle = {
      ...variantStyles[variant || 'default'],
      ...style,
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={combinedStyle}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }