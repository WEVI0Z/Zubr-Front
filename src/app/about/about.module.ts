import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AboutComponent } from './about.component'
import { AboutRoutingModule } from './about-routing.module'
import { SharedModule } from '../shared/shared.module'
import { ShareBlockModule } from '../share-block/share-block.module'

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule, ShareBlockModule],
  exports: [AboutRoutingModule],
})
export class AboutModule {}
