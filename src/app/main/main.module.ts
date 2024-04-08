import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { MainComponent } from './main.component'
import { MainRoutingModule } from './main-routing.module'
import { SharedModule } from '../shared/shared.module'
import { SphereComponent } from './sphere/sphere.component'
import { MediaComponent } from './media/media.component'
import { PartnersComponent } from './partners/partners.component'
import { TimerComponent } from './timer/timer.component'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    MainComponent,
    SphereComponent,
    MediaComponent,
    PartnersComponent,
    TimerComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    NgOptimizedImage,
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
  exports: [MainRoutingModule],
})
export class MainModule {}
