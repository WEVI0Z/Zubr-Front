import { Injectable } from '@angular/core';
import {Media} from "../interface/media";
import {MEDIA_LIST} from "../mock/media-mock";

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  public mediaList: Media[] = MEDIA_LIST;

  constructor() { }
}
