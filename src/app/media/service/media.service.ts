import { Injectable } from '@angular/core'
import { AlbumList, PhotoList, VideoList } from '../mock/media-mock'
import { TranslateService } from '@ngx-translate/core'
import { Photo } from '../interface/photo'
import { Album } from '../interface/album'
import { Video } from '../interface/video'

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private listA: AlbumList
  private listP: PhotoList
  private listV: VideoList
  //public albumList: Album[]

  constructor(translate: TranslateService) {
    this.listA = new AlbumList(translate)
    this.listP = new PhotoList()
    this.listV = new VideoList()
    //this.albumList = this.listA.getAlbumList()
  }

  public getAlbumList(): Album[] {
    return this.listA.getAlbumList()
  }
  public getPhotoList(path: string): Photo[] {
    let photoList: Photo[] = []
    photoList = this.listP.getPhotoList(path != undefined ? path : '')
    return photoList
  }
  public getVideoList(path: string): Video[] {
    let videpList: Video[] = []
    videpList = this.listV.getVideoList(path != undefined ? path : '')
    return videpList
  }
}
