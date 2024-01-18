import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  },
  {
    path: "undefined",
    loadChildren: () => import("./undefined/undefined.module").then(m => m.UndefinedModule)
  },
  {
    path: "sphere-list",
    loadChildren: () => import("./sphere-list/sphere-list.module").then(m => m.SphereListModule)
  },
  {
    path: "**",
    redirectTo: "/undefined"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
