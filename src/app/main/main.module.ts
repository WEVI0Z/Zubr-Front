import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {MainRoutingModule} from "./main-routing.module";
import {SharedModule} from "../shared/shared.module";
import { SphereComponent } from './sphere/sphere.component';
import { MediaComponent } from './media/media.component';
import { PartnersComponent } from './partners/partners.component';



@NgModule({
  declarations: [
    MainComponent,
    SphereComponent,
    MediaComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  exports: [
    MainRoutingModule
  ]
})
export class MainModule { }
