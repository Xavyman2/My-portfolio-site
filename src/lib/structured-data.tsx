import { Project, Service } from '@/types'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    url: baseUrl,
    image: `${baseUrl}/og-image.jpg`,
    jobTitle: 'Full Stack Web Developer',
    description: 'Experienced web developer specializing in Next.js, React, and modern web technologies',
    email: 'hello@example.com',
    telephone: '+15551234567',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    sameAs: [
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourusername',
      'https://twitter.com/yourusername',
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Your Portfolio',
    url: baseUrl,
    description: 'Professional web development portfolio showcasing projects and services',
    author: {
      '@type': 'Person',
      name: 'Your Name',
    },
  }
}

export function generateProjectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: `${baseUrl}${project.image}`,
    url: `${baseUrl}/projects/${project.slug}`,
    author: {
      '@type': 'Person',
      name: 'Your Name',
    },
    dateCreated: new Date().toISOString(),
    keywords: project.tags.join(', '),
  }
}

export function generateServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Person',
      name: 'Your Name',
    },
    offers: service.price
      ? {
          '@type': 'Offer',
          price: service.price.replace(/[^0-9]/g, ''),
          priceCurrency: 'USD',
        }
      : undefined,
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Your Portfolio',
    description: 'Professional web development services',
    url: baseUrl,
    telephone: '+15551234567',
    email: 'hello@example.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    priceRange: '$$',
    sameAs: [
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourusername',
      'https://twitter.com/yourusername',
    ],
  }
}

// Helper component to render JSON-LD script
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}