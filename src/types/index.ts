export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  technologies: string[]
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'fullstack' | 'other'
  timeline: string
  role: string
  problem: string
  solution: string
  outcome: string
  metrics?: {
    label: string
    value: string
  }[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  price?: string
  popular?: boolean
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
  budget?: string
  timeline?: string
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
}