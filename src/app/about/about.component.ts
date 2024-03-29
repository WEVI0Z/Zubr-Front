import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public currentLang: string = 'ru';

  constructor(public translate: TranslateService) {
    let lang = this.getCookie('language');
    if (lang.includes('en')) {
      this.currentLang = 'EN';
    } else if (lang.includes('be')) {
      this.currentLang = 'BE';
    }

    this.translateData(this.currentLang);
  }

  private getCookie(name: any): any {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : this.currentLang.toLowerCase();
  }

  public translateData(lang: string): void {

    this.translate.use(lang.toLowerCase());
  }

}
