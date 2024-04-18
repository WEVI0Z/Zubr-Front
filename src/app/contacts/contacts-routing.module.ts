import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { ContactsComponent } from './contacts.component'

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    data: {
      breadcrumb: { alias: 'Contacts' },
    },
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
