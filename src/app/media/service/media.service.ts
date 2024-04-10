import { Injectable } from '@angular/core'
import { AlbumList, PhotoList } from '../mock/media-mock'
import { TranslateService } from '@ngx-translate/core'
import { Photo } from '../interface/photo'
import { Album } from '../interface/album'

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private list: AlbumList
  public albumList: Album[]
  public photoList: Photo[] = []

  constructor(translate: TranslateService) {
    this.list = new AlbumList(translate)
    this.albumList = this.list.getAlbumList()
  }
}
