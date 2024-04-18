import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { MediaComponent } from './media.component'
import { AlbumComponent } from './album/album.component'

const routes: Routes = [
  {
    path: '',
    component: MediaComponent,
    data: {
      breadcrumb: { alias: 'Media' },
    },
  },
  {
    path: ':name',
    component: AlbumComponent,
    data: {
      breadcrumb: { alias: 'Album' },
    },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class MediaRoutingModule {}
