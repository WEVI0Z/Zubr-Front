import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../../translate.component'
import beDictionary from '../../../assets/i18n/be.json'
import ruDictionary from '../../../assets/i18n/ru.json'
import enDictionary from '../../../assets/i18n/en.json'
import { Album } from '../interface/album'
import { Photo } from '../interface/photo'
import { UndefinedComponent } from '../../undefined/undefined.component'

export class AlbumList {
  private currentLang: string
  private translation: TranslateClass
  private list: Album[] | undefined

  constructor(public translate: TranslateService) {
    this.translation = new TranslateClass(translate)
    this.currentLang = this.translation.getLanguage()
  }

  public getAlbumList(): Album[] {
    this.list = [
      {
        name: this.getName(4),
        folderPath: 'brest2024',
      },
      {
        name: this.getName(3),
        folderPath: 'mogilev2024',
      },
      {
        name: this.getName(2),
        folderPath: 'minsk2024',
      },
      {
        name: this.getName(1),
        folderPath: 'zubr2023',
      },
    ]
    return this.list
  }

  public getName(ind: number): string {
    let name: string = ''

    if (this.currentLang == 'ru') {
      switch (ind) {
        case 1: {
          name = ruDictionary.MEDIA.ALBUM1.TITLE
          break
        }
        case 2: {
          name = ruDictionary.MEDIA.ALBUM2.TITLE
          break
        }
        case 3: {
          name = ruDictionary.MEDIA.ALBUM3.TITLE
          break
        }
        case 4: {
          name = ruDictionary.MEDIA.ALBUM4.TITLE
          break
        }
      }
    } else if (this.currentLang == 'be') {
      switch (ind) {
        case 1: {
          name = beDictionary.MEDIA.ALBUM1.TITLE
          break
        }
        case 2: {
          name = beDictionary.MEDIA.ALBUM2.TITLE
          break
        }
        case 3: {
          name = beDictionary.MEDIA.ALBUM3.TITLE
          break
        }
        case 4: {
          name = beDictionary.MEDIA.ALBUM4.TITLE
          break
        }
      }
    } else {
      switch (ind) {
        case 1: {
          name = enDictionary.MEDIA.ALBUM1.TITLE
          break
        }
        case 2: {
          name = enDictionary.MEDIA.ALBUM2.TITLE
          break
        }
        case 3: {
          name = enDictionary.MEDIA.ALBUM3.TITLE
          break
        }
        case 4: {
          name = enDictionary.MEDIA.ALBUM4.TITLE
          break
        }
      }
    }
    return name
  }
}

export class PhotoList {

  private zubr2023: Photo[] = [
    { photoPath: '1.jpg' },
    { photoPath: '2.jpg' },
    { photoPath: '3.jpg' },
    { photoPath: '4.jpg' },
    { photoPath: '5.jpg' },
    { photoPath: '6.jpg' },
    { photoPath: '7.jpg' },
    { photoPath: '8.jpg' },
    { photoPath: '9.jpg' },
    { photoPath: '10.jpg' },
    { photoPath: '11.jpg' },
    { photoPath: '12.jpg' },
  ]
  private brest2024: Photo[] = [
    { photoPath: '1.jpg' },
    { photoPath: '2.jpg' },
    { photoPath: '3.jpg' },
    { photoPath: '4.jpg' },
    { photoPath: '5.jpg' },
    { photoPath: '6.jpg' },
    { photoPath: '7.jpg' },
    { photoPath: '8.jpg' },
    { photoPath: '9.jpg' },
  ]
  private minsk2024: Photo[] = [
    { photoPath: '1.jpg' },
    { photoPath: '2.jpg' },
    { photoPath: '3.jpg' },
    { photoPath: '4.jpg' },
    { photoPath: '5.jpg' },
    { photoPath: '6.jpg' },
    { photoPath: '7.jpg' },
    { photoPath: '8.jpg' },
    { photoPath: '9.jpg' },
    { photoPath: '10.jpg' },
    { photoPath: '11.jpg' },
    { photoPath: '12.jpg' },
    { photoPath: '13.jpg' },
    { photoPath: '14.jpg' },
    { photoPath: '15.jpg' },
    { photoPath: '16.jpg' },
    { photoPath: '17.jpg' },
  ]
  private mogilev2024: Photo[] = [
    { photoPath: '1.jpg' },
    { photoPath: '2.jpg' },
    { photoPath: '3.jpg' },
    { photoPath: '4.jpg' },
    { photoPath: '5.jpg' },
    { photoPath: '6.jpg' },
    { photoPath: '7.jpg' },
  ]

  public getPhotoList(folderPath:string): Photo[] {
    let list: Photo[]=[]
    switch (folderPath){
      case 'zubr2023': {
        list = this.zubr2023
        break
      }
      case 'minsk2024': {
        list = this.minsk2024
        break
      }
      case 'mogilev2024': {
        list = this.mogilev2024
        break
      }
      case 'brest2024': {
        list = this.brest2024
        break
      }

    }
    return list
  }
}


