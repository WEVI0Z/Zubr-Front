import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutCookieComponent } from "./about-cookie.component";
import { CookieRoutingModule } from "../cookie-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        AboutCookieComponent
    ],
    imports: [
        CommonModule,
        CookieRoutingModule,
        SharedModule
    ],
    exports: [
        CookieRoutingModule
    ]
})
export class AboutCookieModule { }