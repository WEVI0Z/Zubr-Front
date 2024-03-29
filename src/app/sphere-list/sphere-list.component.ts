import {Component, ViewChild} from '@angular/core';
import {SphereService} from "./service/sphere.service";
import {Sphere} from "./interface/sphere";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sphere-list',
  templateUrl: './sphere-list.component.html',
  styleUrls: ['./sphere-list.component.scss']
 
})
export class SphereListComponent {
  protected sphereList: Sphere[] = this.sphereService.sphereList;
  public currentLang: string = 'ru';


  constructor(private sphereService: SphereService, public translate: TranslateService) {
    //let lang = this.getCookie('language');
    //sphereService.currentLanguage = lang

    let lang = this.getCookie('language');
    if (lang.includes('en')) {
      this.currentLang = 'en';
    } else if (lang.includes('be')) {
      this.currentLang = 'be';
    }

    this.translateData(this.currentLang);
   
  }

  private getCookie(name: any): any {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : this.currentLang.toLowerCase();
  }

  public translateData(lang: string): void {

    this.translate.use(lang.toLowerCase());
  }

  //private getCookie(name: any): any {
  //  let matches = document.cookie.match(new RegExp(
  //    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  //  ));
  //  return matches ? decodeURIComponent(matches[1]) : undefined;
  //}
}
