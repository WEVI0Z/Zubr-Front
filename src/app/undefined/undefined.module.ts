import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UndefinedComponent } from './undefined.component'
import { UndefinedRoutingModule } from './undefined-routing.module'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [UndefinedComponent],
  imports: [
    CommonModule,
    UndefinedRoutingModule,
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
  exports: [UndefinedRoutingModule],
})
export class UndefinedModule {}
