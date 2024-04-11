import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../../translate.component'
import beDictionary from '../../../assets/i18n/be.json'
import ruDictionary from '../../../assets/i18n/ru.json'
import enDictionary from '../../../assets/i18n/en.json'
import { Album } from '../interface/album'
import { Photo } from '../interface/photo'

//Для добавления нового альбома:
//1. Создать папку альбома с соответствующим названием
//2. В файлы переводов внести полное название ( "ALBUM..{"TITLE": " ... "}" )
//3. В список albumNames внести название папки (оно же будет и URL)
//4. В методе getAlbumList() класса AlbumList добавить элемент case
//5. В классе PhotoList добавить свойство <album_name>:Photo[] и заполнить его именами файлов фото
//6. В методе getPhotoList() класса PhotoList добавить элемент case

const albumsNames: string[] = [
  'zubr2023',
  'minsk2024',
  'mogilev2024',
  'brest2024',
]
export class AlbumList {

  private currentLang: string
  private translation: TranslateClass

  constructor(public translate: TranslateService) {
    this.translation = new TranslateClass(translate)
    this.currentLang = this.translation.getLanguage()
  }

  public getAlbumList(): Album[] {
    let list: Album[]
    list = [
      //для нового альбома
      //{
      //  name: this.getFullName(albumsNames[4]),
      //  folderPath: albumsNames[4],
      //},
      {
        name: this.getFullName(albumsNames[3]),
        folderPath: albumsNames[3],
      },
      {
        name: this.getFullName(albumsNames[2]),
        folderPath: albumsNames[2],
      },
      {
        name: this.getFullName(albumsNames[1]),
        folderPath: albumsNames[1],
      },
      {
        name: this.getFullName(albumsNames[0]),
        folderPath: albumsNames[0],
      },
    ]
    return list
  }

  public getFullName(path: string): string {

    let dict
    if (this.currentLang == 'be') {
      dict = beDictionary
    }
    else if (this.currentLang == 'en') {
      dict = enDictionary
    }
    else {
      dict = ruDictionary
    }

    let name = ''

    switch (path) {
      case albumsNames[0]: {
        name = dict.MEDIA.ALBUM1.TITLE
        break
      }
      case albumsNames[1]: {
        name = dict.MEDIA.ALBUM2.TITLE
        break
      }
      case albumsNames[2]: {
        name = dict.MEDIA.ALBUM3.TITLE
        break
      }
      case albumsNames[3]: {
        name = dict.MEDIA.ALBUM4.TITLE
        break
      }
      //для нового альбома
      //case albumsNames[4]: {
      //  name = dict.MEDIA.ALBUM5.TITLE
      //  break
      //}
    }
    
   
    return name
  }

  public getAlbumPath(url: string): string {
    let path = url.split('/').at(-1)
    return path != undefined ? path : albumsNames[0]
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

  //private <album_name>: Photo[] = [
  //  { photoPath: '1.jpg' },
  //  ...
  //]

  public getPhotoList(folderPath: string): Photo[] {
    let list: Photo[] = []
    switch (folderPath) {
      case albumsNames[0]: {
        list = this.zubr2023
        break
      }
      case albumsNames[1]: {
        list = this.minsk2024
        break
      }
      case albumsNames[2]: {
        list = this.mogilev2024
        break
      }
      case albumsNames[3]: {
        list = this.brest2024
        break
      }
      //для нового альбома
      //case albumsNames[4]: {
      //  list = this.<album_name>
      //  break
      //}
    }
    return list
  }
}
