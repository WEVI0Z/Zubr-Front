import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MediaService } from './service/media.service';
import { Fancybox } from '@fancyapps/ui';
import { Album } from './interface/album';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: [
    './media.component.scss',
    '../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css',
  ],
})
export class MediaComponent implements OnInit {
  protected albumList: Album[] = this.mediaService.albumList;

  constructor(private mediaService: MediaService, private translateService: TranslateService) {
    Fancybox.bind('[data-fancybox]', {});
  }

  ngOnInit(): void {
    this.translateService.get('SHARED.HEADER.MEDIA').subscribe((translation: string) => {
      document.title = translation;
    });
  }
}
