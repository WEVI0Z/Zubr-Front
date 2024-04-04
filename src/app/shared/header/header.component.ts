import { Component, OnInit } from '@angular/core'
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

  public ngOnInit(): void {
    if (this.isPageMain) {
      this.invokeParticles()
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
}
