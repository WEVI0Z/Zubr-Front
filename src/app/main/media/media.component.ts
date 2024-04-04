import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { MediaService } from '../../media/service/media.service'
import { Media } from '../../media/interface/media'
import { UtilsService } from '../../shared/services/utils.service'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  private mediaList: Media[] = this.utilsService.randomizeList(
    this.mediaService.mediaList
  )
  private currentIndex: number = 0

  protected currentPicture: Media = this.mediaList[this.currentIndex]
  protected nextPicture: Media = this.mediaList[this.currentIndex + 1]
  @ViewChild('currentElement') private currentElement!: ElementRef
  @ViewChild('nextElement') private nextElement!: ElementRef
  private isNext: boolean = false

  constructor(
    private mediaService: MediaService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    setInterval(() => this.changePicture(), 3000)
  }

  private changePicture(): void {
    if (this.currentIndex >= this.mediaList.length) {
      this.currentIndex = 0
    }

    if (this.isNext) {
      this.nextPicture = this.mediaList[this.currentIndex++]
      this.currentElement.nativeElement.classList.add('hidden')
      this.nextElement.nativeElement.classList.remove('hidden')

      this.isNext = !this.isNext
    } else {
      this.currentPicture = this.mediaList[this.currentIndex++]
      this.nextElement.nativeElement.classList.add('hidden')
      this.currentElement.nativeElement.classList.remove('hidden')

      this.isNext = !this.isNext
    }
  }
}
