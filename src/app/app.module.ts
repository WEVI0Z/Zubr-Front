import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { RouterOutlet } from '@angular/router'
import { SharedModule } from './shared/shared.module'
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component'

@NgModule({
  declarations: [AppComponent, CookieConsentComponent],
  imports: [BrowserModule, RouterOutlet, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
