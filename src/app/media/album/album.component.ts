import { Component, ElementRef, ViewChild } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../../translate.component'
import { MediaService } from '../service/media.service'
import { Router } from '@angular/router'
import { Photo } from '../interface/photo'
import { AlbumList } from '../mock/media-mock'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent {
  @ViewChild('wrapper', { read: ElementRef }) wrapper!: ElementRef

  private mediaService: MediaService

  private albumList: AlbumList
  public photoList: Photo[]

  private translation: TranslateClass

  public folderPath: string
  public albumName: string

  constructor(
    public translate: TranslateService,
    private router: Router
  ) {
    this.translation = new TranslateClass(translate)
    this.translation.translateData(this.translation.getLanguage())
    this.folderPath = this.getAlbumPath(router.url)
    this.mediaService = new MediaService(translate)
    
    this.albumList = new AlbumList(translate)
    this.albumName = this.albumList.getName(this.getAlbumIndex(this.folderPath))

    this.photoList = this.mediaService.getPhotoList(this.folderPath)

  }

  private getAlbumPath(url: string): string {
    let path = url.split('/').at(-1)
    return path != undefined ? path : 'zubr2023'
  }

  private getAlbumIndex(path: string): number {
    let index
    switch (path) {
      case 'zubr2023': {
        index = 1
        break
      }
      case 'minsk2024': {
        index = 2
        break
      }
      case 'mogilev2024': {
        index = 3
        break
      }
      case 'brest2024': {
        index = 4
        break
      }
      default: {
        index = 1
        break
      }
    }
    return index
  }
}
