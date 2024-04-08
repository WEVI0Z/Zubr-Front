import { TranslateService } from '@ngx-translate/core'

export class TrenslateClass {
  public currentLang: string = 'ru'

  constructor(
    public translate: TranslateService,
    public currentLanguage: string
  ) {
    this.currentLang = currentLanguage
  }

  public getCookie(name: any): any {
    let matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)'
      )
    )
    return matches
      ? decodeURIComponent(matches[1])
      : this.currentLang.toLowerCase()
  }

  public setCookie(lang: string) {
    document.cookie = 'language=' + lang + '; path/'
  }

  public translateData(lang: string): void {
    this.translate.use(lang.toLowerCase())
  }

  public getCurrentLanguage(): string {
    let lang = this.getCookie('language')
    if (lang.includes('en')) {
      this.currentLang = 'EN'
    } else if (lang.includes('be')) {
      this.currentLang = 'BE'
    }

    return this.currentLang
  }
}
