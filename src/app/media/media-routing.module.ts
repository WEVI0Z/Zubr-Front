import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { MediaComponent } from './media.component'
import { AlbumComponent } from './album/album.component'

const routes: Routes = [
  {
    path: '',
    component: MediaComponent,
  },
  {
    path: ':name',
    component: AlbumComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class MediaRoutingModule {}
