import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { RouterOutlet } from '@angular/router'
import { SharedModule } from './shared/shared.module'
import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { CookieConsentModule } from './cookie-consent/cookie-consent.module'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    SharedModule,
    CookieConsentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
