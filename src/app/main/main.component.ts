import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../translate.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private translation: TranslateClass

  constructor(public translate: TranslateService) {
    this.translation = new TranslateClass(translate)
    this.translation.translateData(this.translation.getLanguage())
  }

  ngOnInit(): void {
    this.translate
      .get('SHARED.HEADER.ZUBRTITLE')
      .subscribe((translation: string) => {
        document.title = translation
      })
  }
}
