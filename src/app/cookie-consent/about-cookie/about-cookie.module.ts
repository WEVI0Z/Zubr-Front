import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AboutCookieComponent } from './about-cookie.component'
import { CookieRoutingModule } from '../cookie-routing.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [AboutCookieComponent],
  imports: [
    CommonModule,
    CookieRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'ru',
    }),
  ],
  exports: [CookieRoutingModule],
})
export class AboutCookieModule {}
