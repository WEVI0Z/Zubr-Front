import { Component, ViewChild } from '@angular/core'
import { SphereService } from './service/sphere.service'
import { Sphere } from './interface/sphere'
import { BreadcrumbService } from 'xng-breadcrumb'

@Component({
  selector: 'app-sphere-list',
  templateUrl: './sphere-list.component.html',
  styleUrls: ['./sphere-list.component.scss'],
})
export class SphereListComponent {
  protected sphereList: Sphere[] = this.sphereService.sphereList

  constructor(
    private sphereService: SphereService,
    private breadcrumbsService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadcrumbsService.set('@SphereList', 'SPHERE-LIST.BREADCRUMB')
  }
}
