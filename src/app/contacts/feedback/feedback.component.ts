import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateClass } from '../../translate.component';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})

export class FeedbackComponent implements OnInit {
  public feedbackForm: FormGroup;
  public translation: TranslateClass;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public translate: TranslateService
  ) {
    this.translation = new TranslateClass(translate);
    this.translation.translateData(this.translation.getLanguage());

    this.feedbackForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  get registerFormControl() {
    return this.feedbackForm.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.feedbackForm.valid) {
      alert('Сообщение отправлено!');
      this.feedbackForm.reset();
      this.submitted = false;
    } else {
      alert('Произошла ошибка!');
    }
  }
}
