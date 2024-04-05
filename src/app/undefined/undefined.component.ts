import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateClass } from '../translate.component';

@Component({
  selector: 'app-undefined',
  templateUrl: './undefined.component.html',
  styleUrls: ['./undefined.component.scss'],
})
export class UndefinedComponent {
  public currentLang: string = 'ru'

  private translation: TranslateClass;

  constructor(public translate: TranslateService) {

    this.translation = new TranslateClass(translate)
    this.translation.translateData(this.translation.getLanguage());
  }
}
