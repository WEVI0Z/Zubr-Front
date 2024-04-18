import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { MediaComponent } from './media.component'
import { MediaRoutingModule } from './media-routing.module'
import { SharedModule } from '../shared/shared.module'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { ShareBlockModule } from '../share-block/share-block.module'
import { AlbumComponent } from './album/album.component'
import { BreadcrumbModule } from 'xng-breadcrumb'
import { SafePipe } from './safe.pipe'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [MediaComponent, AlbumComponent, SafePipe],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule,
    NgOptimizedImage,
    ShareBlockModule,
    NgOptimizedImage,
    HttpClientModule,
    BreadcrumbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'ru',
    }),
  ],
  exports: [MediaRoutingModule],
})
export class MediaModule {}
