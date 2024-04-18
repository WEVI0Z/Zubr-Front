import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core'
import { SphereService } from '../service/sphere.service'
import { Router } from '@angular/router'
import { Sphere } from '../interface/sphere'

import { TranslateService } from '@ngx-translate/core'
import { BreadcrumbService } from 'xng-breadcrumb'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements AfterViewInit {
  @ViewChild('wrapper', { read: ElementRef }) wrapper!: ElementRef
  protected sphere?: Sphere

  constructor(
    private sphereService: SphereService,
    private router: Router,
    public translate: TranslateService,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngAfterViewInit(): void {
    this.identifyContent(this.router.url)
  }

  identifyContent(url: string): void {
    const wrapper: HTMLElement = this.wrapper.nativeElement

    this.sphereService.sphereList.forEach((sphere) => {
      if (url.includes(sphere.name)) {
        this.sphere = sphere
        wrapper.innerHTML = sphere.content
        this.breadcrumbService.set('@SphereList', 'SPHERE-LIST.BREADCRUMB')
        this.breadcrumbService.set('@Sphere', sphere.viewNameRU)
      }
    })
  }
}
