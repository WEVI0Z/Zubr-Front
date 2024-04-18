import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { MediaService } from '../service/media.service'
import { Router } from '@angular/router'
import { Photo } from '../interface/photo'
import { AlbumList } from '../mock/media-mock'
import { Fancybox } from '@fancyapps/ui'
import { Video } from '../interface/video'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: [
    './album.component.scss',
    '../../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css',
  ],
})
export class AlbumComponent {
  private mediaService: MediaService

  private albumList: AlbumList
  public photoList: Photo[]
  public videoList: Video[]

  public folderPath: string
  public albumName: string
  public RobIn: string
  constructor(
    public translate: TranslateService,
    private router: Router
  ) {
    this.albumList = new AlbumList(translate)
    //получаем имя альбома (имя папки) из url
    this.folderPath = this.albumList.getAlbumPath(router.url)
    //получаем полное имя альбома
    this.albumName = this.albumList.getFullName(this.folderPath)
    this.RobIn = this.albumList.getRobIn(this.folderPath)
    this.mediaService = new MediaService(translate)
    //получаем список фото
    this.photoList = this.mediaService.getPhotoList(this.folderPath)
    //получаем список видео
    this.videoList = this.mediaService.getVideoList(this.folderPath)

    Fancybox.bind('[data-fancybox]', {})
  }
}
