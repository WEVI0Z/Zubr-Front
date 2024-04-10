import { Component } from '@angular/core'
import { MediaService } from './service/media.service'
import { Fancybox } from '@fancyapps/ui'
import { Album } from './interface/album'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: [
    './media.component.scss',
    '../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css',
  ],
})
export class MediaComponent {
  protected albumList: Album[] = this.mediaService.albumList

  constructor(private mediaService: MediaService) {
    Fancybox.bind('[data-fancybox]', {})
  }
}
