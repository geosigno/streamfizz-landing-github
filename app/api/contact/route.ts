// app/api/contact/route.ts
import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'
import { z } from 'zod'

// Define the schema directly in the API route
const contactFormSchema = z.object({
  email: z.string().email({
    message: 'Veuillez entrer une adresse e-mail valide.',
  }),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, {
    message: 'Veuillez entrer un message.',
  }),
  type: z.enum(['contact', 'demo', 'try']).optional().default('contact'),
})

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validate the request body using the locally defined schema
    try {
      const validatedData = contactFormSchema.parse(body)

      console.log('validatedData', validatedData)

      // Extract data
      const { email, firstName, lastName, company, message } = validatedData
      const type = validatedData.type || 'contact'

      // Prepare email content
      const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'Non spécifié'
      const companyInfo = company ? `Entreprise: ${company}` : 'Entreprise: Non spécifiée'

      // Get subject based on type
      let subject = ''
      switch (type) {
        case 'demo':
          subject = 'Nouvelle demande de démo'
          break
        case 'try':
          subject = "Nouvelle demande d'essai"
          break
        case 'contact':
        default:
          subject = 'Nouveau message de contact'
          break
      }

      // Construct email
      const emailContent = {
        to: 'contact-siteweb@streamfizz.fr',
        from: 'contact@streamfizz.fr',
        subject: subject,
        text: `
Type de demande: ${type}
De: ${fullName}
Email: ${email}
${companyInfo}

Message:
${message}
        `,
        html: `
<h2>Nouvelle demande - ${type}</h2>
<p><strong>De:</strong> ${fullName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>${companyInfo}</strong></p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }

      // Send email
      await sgMail.send(emailContent)

      return NextResponse.json({ success: true })
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        return NextResponse.json(
          {
            error: 'Données de formulaire invalides',
            details: validationError.errors.map((err) => ({
              path: err.path.join('.'),
              message: err.message,
            })),
          },
          { status: 400 }
        )
      }
      throw validationError
    }
  } catch (error) {
    console.error('Error sending email:', error)

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de l'email." },
      { status: 500 }
    )
  }
}
