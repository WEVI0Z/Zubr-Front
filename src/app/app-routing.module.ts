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
    path: "about",
    loadChildren: () => import("./about/about.module").then(m => m.AboutModule)
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
