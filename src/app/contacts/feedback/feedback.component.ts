import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../../translate.component'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { EmailService } from '../services/email-send.service'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  providers: [EmailService],
})
export class FeedbackComponent implements OnInit {
  public translation: TranslateClass

  public feedbackForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
      Validators.email,
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
      Validators.minLength(10),
    ]),
  })

  constructor(
    public translate: TranslateService,
    private emailService: EmailService
  ) {
    this.translation = new TranslateClass(translate)
    this.translation.translateData(this.translation.getLanguage())
  }

  ngOnInit(): void {}

  get registerFormControl() {
    return this.feedbackForm.controls
  }

  submitForm() {
    const { firstName, lastName, email, message } = this.feedbackForm.value
    if (this.feedbackForm.valid) {
      this.emailService.sendEmail(
        firstName ?? '',
        lastName ?? '',
        email ?? '',
        message ?? ''
      )
      alert('Ok')
      this.feedbackForm.reset()
    } else {
      alert('Error')
    }
  }
}
