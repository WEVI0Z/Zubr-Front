import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { MainComponent } from './main.component'
import { AboutComponent } from '../about/about.component'
import { ContactsComponent } from '../contacts/contacts.component'
import { AboutCookieComponent } from '../cookie-consent/about-cookie/about-cookie.component'

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      breadcrumb: { alias: 'Main' },
    },
    children: [
      {
        path: 'about',
        component: AboutComponent,
        data: {
          breadcrumb: { alias: 'About' },
        },
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        data: {
          breadcrumb: { alias: 'Contacts' },
        },
      },
      {
        path: 'cookie-consent',
        component: AboutCookieComponent,
        data: {
          breadcrumb: { alias: 'Cookie Consent' },
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class MainRoutingModule {}
