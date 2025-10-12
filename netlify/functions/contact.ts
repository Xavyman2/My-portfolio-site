import { Handler } from '@netlify/functions'

interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
  subject?: string
}

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const body: ContactForm = JSON.parse(event.body || '{}')

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      }
    }

    // Log the submission (in production, you'd send an email or save to a database)
    console.log('Contact form submission:', body)

    // TODO: Implement email sending with your preferred service
    // Example services: SendGrid, Resend, AWS SES, Mailgun
    
    // For now, return success
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Thank you for your message! I will get back to you soon.' 
      }),
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
}
