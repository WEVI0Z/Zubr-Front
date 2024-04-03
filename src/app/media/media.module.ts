import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { MediaComponent } from './media.component'
import { MediaRoutingModule } from './media-routing.module'
import { SharedModule } from '../shared/shared.module'
import { ShareBlockModule } from '../share-block/share-block.module'

@NgModule({
  declarations: [MediaComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule,
    NgOptimizedImage,
    ShareBlockModule,
  ],
  exports: [MediaRoutingModule],
})
export class MediaModule {}
