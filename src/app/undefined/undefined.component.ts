import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TrenslateClass } from '../translate.component'

@Component({
  selector: 'app-undefined',
  templateUrl: './undefined.component.html',
  styleUrls: ['./undefined.component.scss'],
})
export class UndefinedComponent {
  public currentLang: string = 'ru'

  private translation: TrenslateClass

  constructor(public translate: TranslateService) {
    this.translation = new TrenslateClass(translate, this.currentLang)

    this.currentLang = this.translation.getCurrentLanguage()
    this.translation.translateData(this.currentLang)
  }
}
