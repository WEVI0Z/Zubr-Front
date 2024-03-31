import { Component } from '@angular/core';
import {Sphere} from "../../sphere-list/interface/sphere";
import {SphereService} from "../../sphere-list/service/sphere.service";
import {UtilsService} from "../../shared/services/utils.service";

@Component({
  selector: 'app-sphere',
  templateUrl: './sphere.component.html',
  styleUrls: ['./sphere.component.scss']
})
export class SphereComponent {
  protected sphereList: Sphere[] = this.utilsService.randomizeList(this.sphereService.sphereList).slice(0, 3);

  constructor(private sphereService: SphereService,
              private utilsService: UtilsService) {
  }
}
