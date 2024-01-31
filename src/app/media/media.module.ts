import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MediaComponent } from './media.component';
import {MediaRoutingModule} from "./media-routing.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    MediaComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule,
    NgOptimizedImage
  ],
  exports: [
    MediaRoutingModule
  ]
})
export class MediaModule { }
