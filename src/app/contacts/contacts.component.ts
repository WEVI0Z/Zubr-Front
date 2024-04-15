import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../translate.component'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  private translation: TranslateClass

  constructor(public translate: TranslateService) {
    this.translation = new TranslateClass(translate)
    this.translation.translateData(this.translation.getLanguage())
  }
}
