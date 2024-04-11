import { Component, OnInit, ViewContainerRef } from '@angular/core'
import { ParticlesConfig } from './particles-config'
import { Router } from '@angular/router'
import { Sphere } from '../../sphere-list/interface/sphere'
import { SphereService } from '../../sphere-list/service/sphere.service'
import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../../translate.component'
import { AccessibilityPanelComponent } from 'src/app/accessibility-panel/accessibility-panel.component'

declare let particlesJS: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  protected isPageMain: boolean = this.router.url === '/'
  protected sphereList: Sphere[] = this.sphereService.sphereList
  public currentLANG: string
  private translation: TranslateClass
  showAccessibilityModal: boolean = false

  public ngOnInit(): void {
    if (this.isPageMain) {
      this.invokeParticles()
    }
  }

  constructor(
    private router: Router,
    private sphereService: SphereService,
    public translate: TranslateService,
    private containerRef: ViewContainerRef
  ) {
    this.translation = new TranslateClass(translate)
    this.currentLANG = this.translation.getLanguage().toUpperCase()
    this.translation.translateData(this.currentLANG)
  }

  private invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {})
  }

  public reLoad(lang: string): any {
    this.translation.setLanguage(lang)
    window.location.reload()
  }

  public openAccessibilityPanel() {
    this.showAccessibilityModal = true
    const componentRef = this.containerRef.createComponent(
      AccessibilityPanelComponent
    )
    componentRef.instance.closeModal.subscribe(() => {
      componentRef.destroy()
      this.showAccessibilityModal = false
    })
  }
}
