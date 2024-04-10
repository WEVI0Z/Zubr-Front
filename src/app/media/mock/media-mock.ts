import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../../translate.component'
import beDictionary from '../../../assets/i18n/be.json'
import ruDictionary from '../../../assets/i18n/ru.json'
import enDictionary from '../../../assets/i18n/en.json'
import { Album } from '../interface/album'
import { Photo } from '../interface/photo'
//import * as fs from 'fs';

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
        //photoPath: 'brest2024/1.jpg',
        name: this.getName(4),
        folderPath: 'brest2024',
      },
      {
        //photoPath: 'mogilev2024/1.jpg',
        name: this.getName(3),
        folderPath: 'mogilev2024',
      },
      {
        //photoPath: 'mock-3.jpg',
        name: this.getName(2),
        folderPath: 'minsk2024',
      },
      {
        //photoPath: 'mock-3.jpg',
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
  private folderPath: string = ''

  constructor(path: string) {
    this.folderPath = path
  }

  //private getFiles(dir: string, files: string[] = []): string[] {
  //  const allFiles = fs.readdirSync(dir)
  //  for (let i = 0; i < allFiles.length; i++) {
  //    const name = `${dir}/${allFiles[i]}`
  //    if (fs.statSync(name).isDirectory()) {
  //      this.getFiles(name, files)
  //    } else {
  //      files.push(name)
  //    }
  //  }
  //  return files
  //}

  //private files: string[] = this.getFiles(this.folderPath)

  public getPhotoList(): Photo[] {
    let path = this.folderPath
    let list: Photo[] = []
    //let item: Photo = { folderPath: '', photoPath: '' }
    //for (let file in this.files) {
    //  item.folderPath = path
    //  item.photoPath = file
    //  list.push(item)
    //}
    return list
  }
}

//export const PHOTO_LIST: Photo[] = [
//  {
//    photoPath: '1.jpg',
//    folderPath:
//  },
//  {
//    photoPath: '2.jpg',
//  },
//  {
//    photoPath: '3.jpg',
//  },
//  {
//    photoPath: '4.jpg',
//  },
//  {
//    photoPath: '5.jpg',
//  },
//]

//export const MEDIA_LIST: Media[] = [
//  {
//    path: 'mock-1.jpg',
//    name: 'Компетенция «Графический дизайн»',
//  },
//  {
//    path: 'mock-2.jpg',
//    name: 'Компетенция «Web-разработка»',
//  },
//  {
//    path: 'mock-3.jpg',
//    name: 'Кубки для награждения победителей',
//  },
//  {
//    path: 'mock-4.jpg',
//    name: 'Главный судья контролирует участников',
//  },
//  {
//    path: 'mock-5.jpg',
//    name: 'Компетенция «Робосумо»',
//  },
//  {
//    path: 'mock-6.jpg',
//    name: 'Компетенция «Следование по линии»',
//  },
//  {
//    path: 'mock-7.jpg',
//    name: 'Компетенция «Робофутбол»',
//  },
//  {
//    path: 'mock-8.jpg',
//    name: 'Компетенция «Робофутбол»',
//  },
//  {
//    path: 'mock-9.jpg',
//    name: 'Компетенция «Робосумо»',
//  },
//  {
//    path: 'mock-10.jpg',
//    name: 'Компетенция «БПЛА»',
//  },
//  {
//    path: 'mock-11.jpg',
//    name: 'Компетенция «Прототипирование»',
//  },
//  {
//    path: 'mock-12.jpg',
//    name: 'Победители IT-чемпионата «РобИн-2023»',
//  },
//]
