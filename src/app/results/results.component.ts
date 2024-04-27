import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../translate.component'
import { BreadcrumbService } from 'xng-breadcrumb'
import { Router } from '@angular/router'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
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
    this.translate
      .get('SHARED.HEADER.ABOUT')
      .subscribe((translation: string) => {
        document.title = translation
      })
    this.breadcrumbService.set('@About', 'ABOUT.BREADCRUMB')
  }
  checkRouteUrl() {
    return this.router.url == '/about'
  }
}
