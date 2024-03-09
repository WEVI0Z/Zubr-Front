import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MainComponent} from "./main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class MainRoutingModule { }
