import { Component } from '@angular/core'
import { MediaService } from './service/media.service'
import { Fancybox } from '@fancyapps/ui'
import { Album } from './interface/album'
import { BreadcrumbService } from 'xng-breadcrumb'
import { Router } from '@angular/router'

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

  constructor(
    private mediaService: MediaService,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {
    Fancybox.bind('[data-fancybox]', {})
  }
  ngOnInit(): void {
    this.breadcrumbService.set('@Media', 'MEDIA.BREADCRUMB')
  }
  checkRouteUrl() {
    return this.router.url == '/media'
  }
}
