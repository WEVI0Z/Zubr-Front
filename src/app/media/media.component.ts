import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MediaService } from './service/media.service';
import { Fancybox } from '@fancyapps/ui';
import { Album } from './interface/album';
import { BreadcrumbService } from 'xng-breadcrumb'
import { Router } from '@angular/router'
import { Video } from './interface/video'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: [
    './media.component.scss',
    '../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css',
  ],
})

export class MediaComponent implements OnInit {

  protected videoList: Video[] = this.mediaService.getVideoList('media')
  protected albumList: Album[] = this.mediaService.getAlbumList()
  constructor(private mediaService: MediaService) {
    Fancybox.bind('[data-fancybox]', {})

  constructor(private mediaService: MediaService, private translateService: TranslateService, private breadcrumbService: BreadcrumbService, private router: Router) {
    Fancybox.bind('[data-fancybox]', {});
  }

  ngOnInit(): void {
    this.translateService.get('SHARED.HEADER.MEDIA').subscribe((translation: string) => {
      document.title = translation;
    });
    this.breadcrumbService.set('@Media', 'MEDIA.BREADCRUMB')
  }
 
  checkRouteUrl() {
    return this.router.url == '/media'
  }
}
