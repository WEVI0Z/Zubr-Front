import { Component, OnInit, HostListener } from '@angular/core'
import { ParticlesConfig } from './particles-config'
import { Router } from '@angular/router'
import { Sphere } from '../../sphere-list/interface/sphere'
import { SphereService } from '../../sphere-list/service/sphere.service'
import { TranslateService } from '@ngx-translate/core'
import { TrenslateClass } from '../../translate.component'

declare let particlesJS: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  protected isPageMain: boolean = this.router.url === '/'
  protected sphereList: Sphere[] = this.sphereService.sphereList
  public currentLANG: string = 'RU'
  private translation: TrenslateClass
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

  
  constructor(
    private router: Router,
    private sphereService: SphereService,
    public translate: TranslateService
  ) {
    this.translation = new TrenslateClass(translate, this.currentLANG)

    this.currentLANG = this.translation.getCurrentLanguage()
    this.translation.translateData(this.currentLANG)
  }

  private invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {})
  }

  public reLoad(lang: string): any {
    this.translation.setCookie(lang)
    window.location.reload()
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
