import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactsComponent } from './contacts.component'
import { ContactsRoutingModule } from './contacts-routing.module'
import { SharedModule } from '../shared/shared.module'
import { ShareBlockModule } from '../share-block/share-block.module'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FeedbackComponent } from './feedback/feedback.component'
import { YandexMapComponent } from './yandex-map/yandex-map.component'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [ContactsComponent, FeedbackComponent, YandexMapComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
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
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ContactsRoutingModule],
})
export class ContactsModule {}
