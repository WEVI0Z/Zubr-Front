import { Component } from '@angular/core'
import { MediaService } from './service/media.service'
import { Fancybox } from '@fancyapps/ui'
import { Album } from './interface/album'
import { Video } from './interface/video'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: [
    './media.component.scss',
    '../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css',
  ],
})
export class MediaComponent {

  protected videoList: Video[] = this.mediaService.getVideoList('media')
  protected albumList: Album[] = this.mediaService.getAlbumList()
  constructor(private mediaService: MediaService) {
    Fancybox.bind('[data-fancybox]', {})

  }


}
