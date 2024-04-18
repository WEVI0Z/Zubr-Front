import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../translate.component'
import { BreadcrumbService } from 'xng-breadcrumb'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  private translation: TranslateClass

  constructor(
    public translate: TranslateService,
    private breadcrumbService: BreadcrumbService
  ) {
    this.translation = new TranslateClass(translate)
    this.translation.translateData(this.translation.getLanguage())
  }

  ngOnInit(): void {
    this.breadcrumbService.set('@Contacts', 'CONTACTS.BREADCRUMB')
  }
}
