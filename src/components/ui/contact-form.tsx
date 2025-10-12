'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-md border transition-colors focus:outline-none focus:ring-2"
          style={{
            backgroundColor: 'var(--color-background)',
            color: 'var(--color-foreground)',
            borderColor: errors.name ? 'var(--color-destructive)' : 'var(--color-border)',
          }}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm" style={{ color: 'var(--color-destructive)' }}>
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-md border transition-colors focus:outline-none focus:ring-2"
          style={{
            backgroundColor: 'var(--color-background)',
            color: 'var(--color-foreground)',
            borderColor: errors.email ? 'var(--color-destructive)' : 'var(--color-border)',
          }}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm" style={{ color: 'var(--color-destructive)' }}>
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>
          Phone (optional)
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 rounded-md border transition-colors focus:outline-none focus:ring-2"
          style={{
            backgroundColor: 'var(--color-background)',
            color: 'var(--color-foreground)',
            borderColor: 'var(--color-border)',
          }}
          placeholder="+1 (555) 123-4567"
        />
      </div>

      {/* Budget & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>
            Budget (optional)
          </label>
          <select
            {...register('budget')}
            id="budget"
            className="w-full px-4 py-3 rounded-md border transition-colors focus:outline-none focus:ring-2"
            style={{
              backgroundColor: 'var(--color-background)',
              color: 'var(--color-foreground)',
              borderColor: 'var(--color-border)',
            }}
          >
            <option value="">Select budget range</option>
            <option value="<5k">{"Less than $5,000"}</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k+">$25,000+</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>
            Timeline (optional)
          </label>
          <select
            {...register('timeline')}
            id="timeline"
            className="w-full px-4 py-3 rounded-md border transition-colors focus:outline-none focus:ring-2"
            style={{
              backgroundColor: 'var(--color-background)',
              color: 'var(--color-foreground)',
              borderColor: 'var(--color-border)',
            }}
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-2months">1-2 months</option>
            <option value="3-4months">3-4 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className="w-full px-4 py-3 rounded-md border transition-colors focus:outline-none focus:ring-2 resize-none"
          style={{
            backgroundColor: 'var(--color-background)',
            color: 'var(--color-foreground)',
            borderColor: errors.message ? 'var(--color-destructive)' : 'var(--color-border)',
          }}
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <p className="mt-1 text-sm" style={{ color: 'var(--color-destructive)' }}>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 text-lg font-medium rounded-md transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-background)',
          }}
        >
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 rounded-md" style={{ backgroundColor: 'var(--color-muted)' }}>
          <p className="text-center font-medium" style={{ color: 'var(--color-primary)' }}>
            Thank you! Your message has been sent successfully. I'll get back to you soon.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-md" style={{ backgroundColor: 'var(--color-muted)' }}>
          <p className="text-center font-medium" style={{ color: 'var(--color-destructive)' }}>
            Oops! Something went wrong. Please try again or contact me directly via email or phone.
          </p>
        </div>
      )}
    </form>
  )
}