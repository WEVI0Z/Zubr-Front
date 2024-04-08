import { Component, ViewChild } from '@angular/core'
import { SphereService } from './service/sphere.service'
import { Sphere } from './interface/sphere'

@Component({
  selector: 'app-sphere-list',
  templateUrl: './sphere-list.component.html',
  styleUrls: ['./sphere-list.component.scss'],
})
export class SphereListComponent {
  protected sphereList: Sphere[] = this.sphereService.sphereList

  constructor(private sphereService: SphereService) {}
}
