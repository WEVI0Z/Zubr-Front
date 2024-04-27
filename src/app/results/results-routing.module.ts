import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { ResultsComponent } from './results.component'

const routes: Routes = [
  {
    path: '',
    component: ResultsComponent,
    data: {
      breadcrumb: { alias: 'Results' },
    },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class ResultsRoutingModule {}
