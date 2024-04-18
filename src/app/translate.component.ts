import { TranslateService } from '@ngx-translate/core'

export class TranslateClass {
  public getLanguage(): string {
    let value = localStorage.getItem('language')
    return value != null ? value : 'ru'
  }

  public setLanguage(lang: string) {
    localStorage.setItem('language', lang)
  }

  constructor(public translate: TranslateService) {}

  public translateData(lang: string): void {
    this.translate.use(lang.toLowerCase())
  }

  public getValue(key: string): string {
    let res = ''
    this.translate
    this.translate.get(key).subscribe((translations: string) => {
      res = translations
    })
    return res
  }
}
