import { Component } from '@angular/core';
import {MediaService} from "./service/media.service";
import {Media} from "./interface/media";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
  protected mediaList: Media[] = this.mediaService.mediaList;

  constructor(private mediaService: MediaService) {
  }
}
