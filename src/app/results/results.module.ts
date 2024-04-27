import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ResultsComponent } from './results.component'
import { ResultsRoutingModule } from './results-routing.module'
import { SharedModule } from '../shared/shared.module'
import { ShareBlockModule } from '../share-block/share-block.module'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { BreadcrumbModule } from 'xng-breadcrumb'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
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
    SharedModule,
    ShareBlockModule,
    BreadcrumbModule,
  ],
  exports: [ResultsRoutingModule],
})
export class ResultsModule {}
