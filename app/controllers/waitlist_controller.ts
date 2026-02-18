import type { HttpContext } from '@adonisjs/core/http'
import { Client } from '@notionhq/client'
import env from '#start/env'

export default class WaitlistController {
  async store({ request, response }: HttpContext) {
    const email = request.input('email')

    if (!email || !this.isValidEmail(email)) {
      return response.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      })
    }

    try {
      const notion = new Client({
        auth: env.get('NOTION_API_KEY'),
      })

      await notion.pages.create({
        parent: {
          database_id: env.get('NOTION_DATABASE_ID'),
        },
        properties: {
          email: {
            title: [
              {
                text: {
                  content: email,
                },
              },
            ],
          },
          date: {
            rich_text: [
              {
                text: {
                  content: new Date().toLocaleString('en-GB', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false,
                  }),
                },
              },
            ],
          },
        },
      })

      return response.status(200).json({
        success: true,
        message: 'You have been added to the waitlist!',
      })
    } catch (error) {
      console.error('Notion API error:', error)
      return response.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again later.',
      })
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
}
