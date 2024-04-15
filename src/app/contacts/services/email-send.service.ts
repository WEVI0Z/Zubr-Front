import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}
  sendEmail(
    firstName: string,
    lastName: string,
    email: string,
    message: string
  ) {
    const clientEmail = 'info@robin-zubronok.by'
    const subject = `FeedbackForm ${firstName} ${lastName} ${email}`
    const body = `
      Name: ${firstName} ${lastName}\n
      Email: ${email}\n
      Message: ${message}
    `
    window.open(
      `mailto:${clientEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    )
  }
}
