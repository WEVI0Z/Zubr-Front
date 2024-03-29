import { Injectable } from '@angular/core';
import { Sphere } from "../interface/sphere";
import { SUMO, Sumo } from "../content/sumo";
import {LINE} from "../content/line";
import {FOOTBALL} from "../content/football";
import {DESIGN_YOUNGER} from "../content/design-younger";
import {DESIGN_ELDER} from "../content/design-elder";
import {PROTOTYPING_YOUNGER} from "../content/prototyping-younger";
import {PROTOTYPING_ELDER} from "../content/prototyping-elder";
import {BOT_CONSTRUCTOR} from "../content/bot-constructor";
import {DRONES} from "../content/drones";
import {WEB_DESIGN} from "../content/web-design";
import {PROGRAMMING} from "../content/programming";
import {WEB_DEVELOPMENT_YOUNGER} from "../content/web-development-younger";
import { WEB_DEVELOPMENT_ELDER } from "../content/web-development-elder";

//import {Sumo}

@Injectable({
  providedIn: 'root'
})
export class SphereService {
  sphereList: Sphere[] = [];
  //currentLanguage: string = "ru";

  constructor() {
    //this.Sumo.currentLange

    //Sumo.currentLang = "en";

    this.sphereList.push(SUMO);
    this.sphereList.push(LINE);
    this.sphereList.push(FOOTBALL);
    this.sphereList.push(DESIGN_YOUNGER);
    this.sphereList.push(DESIGN_ELDER);
    this.sphereList.push(WEB_DEVELOPMENT_YOUNGER);
    this.sphereList.push(WEB_DEVELOPMENT_ELDER);
    this.sphereList.push(PROTOTYPING_YOUNGER);
    this.sphereList.push(PROTOTYPING_ELDER);
    this.sphereList.push(BOT_CONSTRUCTOR);
    this.sphereList.push(WEB_DESIGN);
    this.sphereList.push(PROGRAMMING);
  }
}
