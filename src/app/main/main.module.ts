import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainComponent } from './main.component';
import {MainRoutingModule} from "./main-routing.module";
import {SharedModule} from "../shared/shared.module";
import { SphereComponent } from './sphere/sphere.component';
import { MediaComponent } from './media/media.component';
import { PartnersComponent } from './partners/partners.component';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [
    MainComponent,
    SphereComponent,
    MediaComponent,
    PartnersComponent,
    TimerComponent
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        SharedModule,
        NgOptimizedImage
    ],
  exports: [
    MainRoutingModule
  ]
})
export class MainModule { }
