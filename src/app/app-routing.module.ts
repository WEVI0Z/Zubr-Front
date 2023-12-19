import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: "main",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/main"
  },
  {
    path: "**",
    redirectTo: "/main"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
