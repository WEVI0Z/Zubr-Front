import {Component, OnInit} from '@angular/core';
import { ParticlesConfig } from './particles-config';
import {Router} from "@angular/router";
import {Sphere} from "../../sphere-list/interface/sphere";
import {SphereService} from "../../sphere-list/service/sphere.service";
import { TranslateService } from '@ngx-translate/core';

declare let particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  protected isPageMain: boolean = this.router.url === "/";
  protected sphereList: Sphere[] = this.sphereService.sphereList;
  public currentLang: string = 'RU';

  public ngOnInit(): void {
    if (this.isPageMain) {
      this.invokeParticles();
    }
  }

  constructor(private router: Router,
    private sphereService: SphereService,
    public translate: TranslateService) {

    let lang = this.getCookie('language');
    if (lang.includes('en')) {
      this.currentLang = 'EN';
    } else if (lang.includes('be')) {
      this.currentLang = 'BE';
    }

    this.translateData(this.currentLang);
    

  }

  private invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  private getCookie(name : any): any {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : this.currentLang.toLowerCase();
  }

  
  

  public setCookie(lang: string) {
    document.cookie = "language=" + lang+"; path/";

    //"user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
  }

  public translateData(lang: string): void {


    this.translate.use(lang.toLowerCase());


    //this.setCookie(lang);
    //window.location.reload();
  }

  public reLoad(lang: string): any {
    this.setCookie(lang);
    window.location.reload();
    //this.translate.use(lang.toLowerCase());

  }
}
