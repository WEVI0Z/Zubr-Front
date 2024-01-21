import { Injectable } from '@angular/core';
import {Sphere} from "../interface/sphere";
import {SUMO} from "../content/sumo";

@Injectable({
  providedIn: 'root'
})
export class SphereService {
  sphereList: Sphere[] = [];

  constructor() {
    this.sphereList.push(SUMO);
  }
}
