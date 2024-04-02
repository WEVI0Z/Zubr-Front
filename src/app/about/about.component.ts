import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TrenslateClass } from '../translate.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public currentLang: string = 'ru';

  private translation: TrenslateClass;

  constructor(public translate: TranslateService) {

    this.translation = new TrenslateClass(translate, this.currentLang)

    this.currentLang = this.translation.getCurrentLanguage();
    this.translation.translateData(this.currentLang);

  }
}
