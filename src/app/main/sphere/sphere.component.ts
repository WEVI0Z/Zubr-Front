import { Component } from '@angular/core';
import {Sphere} from "../../sphere-list/interface/sphere";
import {SphereService} from "../../sphere-list/service/sphere.service";

@Component({
  selector: 'app-sphere',
  templateUrl: './sphere.component.html',
  styleUrls: ['./sphere.component.scss']
})
export class SphereComponent {
  protected sphereList: Sphere[] = [...this.sphereService.sphereList]
    .sort((a, b) => 1 * (Math.floor(Math.random() * 2) == 1 ? 1 : -1))
    .slice(0, 3);

  constructor(private sphereService: SphereService) {
  }
}
