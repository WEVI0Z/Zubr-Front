import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { BreadcrumbService } from 'xng-breadcrumb'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'zubf-front'

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.set('@Main', 'MAIN.BREADCRUMB')
  }
}
