
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AboutCookieComponent } from "./about-cookie/about-cookie.component";

const routes: Routes = [
    {
        path: "",
        component: AboutCookieComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule],
    exports: [RouterModule]
})
export class CookieRoutingModule { }