import { NextResponse } from 'next/server'
import type { ContactForm } from '@/types'

export async function POST(request: Request) {
  try {
    const body: ContactForm = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the submission in a database
    // 3. Send a notification to your phone/email

    // For now, we'll just log the submission
    console.log('Contact form submission:', body)

    // TODO: Implement email sending
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Contact Form <onboarding@resend.dev>',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New contact form submission from ${body.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
    //     <p><strong>Budget:</strong> ${body.budget || 'Not specified'}</p>
    //     <p><strong>Timeline:</strong> ${body.timeline || 'Not specified'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message}</p>
    //   `,
    // })

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}