import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    data: {
      breadcrumb: { alias: 'Main' },
    },
  },
  {
    path: 'undefined',
    loadChildren: () =>
      import('./undefined/undefined.module').then((m) => m.UndefinedModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('./results/results.module').then((m) => m.ResultsModule),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./contacts/contacts.module').then((m) => m.ContactsModule),
  },
  {
    path: 'sphere-list',
    loadChildren: () =>
      import('./sphere-list/sphere-list.module').then(
        (m) => m.SphereListModule
      ),
  },
  {
    path: 'media',
    loadChildren: () =>
      import('./media/media.module').then((m) => m.MediaModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./cookie-consent/about-cookie/about-cookie.module').then(
        (m) => m.AboutCookieModule
      ),
  },
  {
    path: '**',
    redirectTo: '/undefined',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
