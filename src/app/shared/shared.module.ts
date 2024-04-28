import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { RouterLink } from '@angular/router'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { ScrollTopComponent } from './scroll-top/scroll-top.component'
import { AccessibilityPanelModule } from '../accessibility-panel/accessibility-panel.module'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ScrollTopComponent],
  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'ru',
    }),
    AccessibilityPanelModule,
  ],
  exports: [HeaderComponent, FooterComponent, ScrollTopComponent],
})
export class SharedModule {}
