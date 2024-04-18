import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { MediaService } from '../../media/service/media.service'
import { UtilsService } from '../../shared/services/utils.service'
import { Album } from '../../media/interface/album'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  private mediaList: Album[] = this.utilsService.randomizeList(
    this.mediaService.getAlbumList()
  )
  private currentIndex: number = 0

  protected currentPicture: Album = this.mediaList[this.currentIndex]
  protected nextPicture: Album = this.mediaList[this.currentIndex + 1]
  @ViewChild('currentElement') private currentElement!: ElementRef
  @ViewChild('nextElement') private nextElement!: ElementRef
  private isNext: boolean = false

  constructor(
    private mediaService: MediaService,
    private utilsService: UtilsService
  ) {}

  /**
   * Метод, вызываемый после инициализации компонента.
   * Устанавливает интервал для автоматического переключения медиа-файлов.
   */
  ngOnInit(): void {
    setInterval(() => this.changePicture(), 3000)
  }

  /** Метод для смены текущего изображения или видео. */
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
