import { Component } from '@angular/core';
import {MediaService} from "./service/media.service";
import {Media} from "./interface/media";

import { Fancybox } from "@fancyapps/ui";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss', '../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css']
})
export class MediaComponent {
  protected mediaList: Media[] = this.mediaService.mediaList;

  constructor(private mediaService: MediaService) {
    Fancybox.bind("[data-fancybox]", {});
  }
}
