import { Component, OnInit, ViewChild } from '@angular/core';
import { SphereService } from './service/sphere.service';
import { Sphere } from './interface/sphere';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from 'xng-breadcrumb'

@Component({
  selector: 'app-sphere-list',
  templateUrl: './sphere-list.component.html',
  styleUrls: ['./sphere-list.component.scss'],
})
export class SphereListComponent implements OnInit {
  protected sphereList: Sphere[] = this.sphereService.sphereList;

  constructor(
    private sphereService: SphereService,
    private breadcrumbsService: BreadcrumbService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.translateService.get('SHARED.HEADER.COMPETENCE.TITLE').subscribe((translation: string) => {
      document.title = translation;
    });
    this.breadcrumbsService.set('@SphereList', 'SPHERE-LIST.BREADCRUMB')
  }
}
