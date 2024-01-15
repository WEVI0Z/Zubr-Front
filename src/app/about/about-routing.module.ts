import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AboutComponent} from "./about.component";

const routes: Routes = [
  {
    path: "",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
