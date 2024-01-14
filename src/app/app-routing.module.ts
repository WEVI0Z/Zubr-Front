import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: "main",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  },
  {
    path: "undefined",
    loadChildren: () => import("./undefined/undefined.module").then(m => m.UndefinedModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/main"
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
