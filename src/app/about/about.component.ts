import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateClass } from '../translate.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  private translation: TranslateClass;

  constructor(private translateService: TranslateService) {
    this.translation = new TranslateClass(translateService);
    this.translation.translateData(this.translation.getLanguage());
  }

  ngOnInit(): void {
    this.translateService.get('SHARED.HEADER.ABOUT').subscribe((translation: string) => {
      document.title = translation;
    });
  }
}
