import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../translate.component'
import { BreadcrumbService } from 'xng-breadcrumb'
import { Router } from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  private translation: TranslateClass

  constructor(
    public translate: TranslateService,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {
    this.translation = new TranslateClass(translate)
    this.translation.translateData(this.translation.getLanguage())
  }

  ngOnInit(): void {
    this.breadcrumbService.set('@About', 'ABOUT.BREADCRUMB')
  }
  checkRouteUrl() {
    return this.router.url == '/about'
  }
}
