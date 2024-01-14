import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndefinedComponent } from './undefined.component';
import {UndefinedRoutingModule} from "./undefined-routing.module";



@NgModule({
  declarations: [
    UndefinedComponent
  ],
  imports: [
    CommonModule,
    UndefinedRoutingModule
  ],
  exports: [
    UndefinedRoutingModule
  ]
})
export class UndefinedModule { }
