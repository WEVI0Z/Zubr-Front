import { Injectable } from '@angular/core';
import { Sphere } from "../interface/sphere";
import { SUMO } from "../content/sumo";
import {LINE} from "../content/line";
import {FOOTBALL} from "../content/football";
import {DESIGN_YOUNGER} from "../content/design-younger";
import {DESIGN_ELDER} from "../content/design-elder";
import {PROTOTYPING_YOUNGER} from "../content/prototyping-younger";
import {PROTOTYPING_ELDER} from "../content/prototyping-elder";
import {BOT_CONSTRUCTOR} from "../content/bot-constructor";
//import {DRONES} from "../content/drones";
import {WEB_DESIGN} from "../content/web-design";
import {PROGRAMMING} from "../content/programming";
import {WEB_DEVELOPMENT_YOUNGER} from "../content/web-development-younger";
import { WEB_DEVELOPMENT_ELDER } from "../content/web-development-elder";
import { TranslateClass } from '../../translate.component';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SphereService {
  sphereList: Sphere[] = [];
  private currentLang: string;
  private translation: TranslateClass;

  constructor(public translate: TranslateService) {

    this.translation = new TranslateClass(translate)
    this.currentLang = this.translation.getLanguage();


    this.sphereList.push(SUMO.getItem(this.currentLang))
    this.sphereList.push(LINE.getItem(this.currentLang))
    this.sphereList.push(FOOTBALL.getItem(this.currentLang))
    this.sphereList.push(DESIGN_YOUNGER.getItem(this.currentLang))
    this.sphereList.push(DESIGN_ELDER.getItem(this.currentLang))
    this.sphereList.push(WEB_DEVELOPMENT_YOUNGER.getItem(this.currentLang))
    this.sphereList.push(WEB_DEVELOPMENT_ELDER.getItem(this.currentLang))
    this.sphereList.push(PROTOTYPING_YOUNGER.getItem(this.currentLang))
    this.sphereList.push(PROTOTYPING_ELDER.getItem(this.currentLang))
    this.sphereList.push(BOT_CONSTRUCTOR.getItem(this.currentLang))
    this.sphereList.push(WEB_DESIGN.getItem(this.currentLang))
    this.sphereList.push(PROGRAMMING.getItem(this.currentLang))
  }
}
