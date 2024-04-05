import { Component, OnInit, HostListener } from '@angular/core';
import { ParticlesConfig } from './particles-config';
import {Router} from "@angular/router";
import {Sphere} from "../../sphere-list/interface/sphere";
import {SphereService} from "../../sphere-list/service/sphere.service";

declare let particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  protected isPageMain: boolean = this.router.url === "/";
  protected sphereList: Sphere[] = this.sphereService.sphereList;
  protected currentLang: string = 'RU';
  isMobileScreen: boolean = false;
  isMenuOpen: boolean = false;
  isSubmenuOpen: boolean = false;
  activeSubmenu: number | null = null;

  public ngOnInit(): void {
    if (this.isPageMain) {
      this.invokeParticles();
      this.checkWindowSize();
    }
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.checkWindowSize();
  }

  checkWindowSize(): void {
    const windowWidth: number = window.innerWidth;

    if (windowWidth <= 778) {
      this.isMobileScreen = true;
    }
    else {
      this.isMobileScreen = false;
    }

    if (!this.isMobileScreen) {
      this.isMenuOpen = false;
      document.body.style.overflow = ''; // Разрешить прокрутку страницы при большом размере окна
    }
  }

  constructor(private router: Router,
              private sphereService: SphereService) {

    let lang = this.getCookie('googtrans');
    if(lang.includes('en')) {
      this.currentLang = 'EN';
    }else if(lang.includes('be')) {
      this.currentLang = 'BE';
    }
  }

  private invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  private getCookie(name : any): any {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Запретить прокрутку страницы
    } else {
      document.body.style.overflow = ''; // Разрешить прокрутку страницы
    }
  }

  toggleSubmenu(submenuId: number) {
    if (this.activeSubmenu === submenuId) {
      this.activeSubmenu = null;
    } else {
      this.activeSubmenu = submenuId;
    }
  }
}
