import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SphereListComponent } from './sphere-list.component'
import { ItemComponent } from './item/item.component'
import { SphereListRoutingModule } from './sphere-list-routing.module'
import { SharedModule } from '../shared/shared.module'
import { ShareBlockModule } from '../share-block/share-block.module'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [SphereListComponent, ItemComponent],
  imports: [
    CommonModule,
    SphereListRoutingModule,
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
  ],
  exports: [SphereListRoutingModule],
})
export class SphereListModule {}
