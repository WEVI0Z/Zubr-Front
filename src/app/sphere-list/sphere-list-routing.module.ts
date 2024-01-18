import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {SphereListComponent} from "./sphere-list.component";
import {ItemComponent} from "./item/item.component";
const routes: Routes = [
  {
    path: "",
    component: SphereListComponent
  },
  {
    path: ":name",
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class SphereListRoutingModule { }
