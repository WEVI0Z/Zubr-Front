import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SphereListComponent } from './sphere-list.component';
import { ItemComponent } from './item/item.component';
import {SphereListRoutingModule} from "./sphere-list-routing.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    SphereListComponent,
    ItemComponent
  ],
    imports: [
        CommonModule,
        SphereListRoutingModule,
        SharedModule
    ],
  exports: [
    SphereListRoutingModule
  ]
})
export class SphereListModule { }
