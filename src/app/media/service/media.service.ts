import { Injectable } from '@angular/core'
import { AlbumList, PhotoList } from '../mock/media-mock'
import { TranslateService } from '@ngx-translate/core'
import { Photo } from '../interface/photo'
import { Album } from '../interface/album'

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private listA: AlbumList
  private listP: PhotoList
  public albumList: Album[]

  constructor(translate: TranslateService) {
    this.listA = new AlbumList(translate)
    this.listP = new PhotoList()
    this.albumList = this.listA.getAlbumList()
  }

  public getPhotoList(path: string): Photo[] {
    let photoList: Photo[] = []
    photoList = this.listP.getPhotoList(path != undefined ? path : '')
    return photoList
  }
}
