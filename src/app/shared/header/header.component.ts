import {Component, OnInit} from '@angular/core';
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

  public ngOnInit(): void {
    if (this.isPageMain) {
      this.invokeParticles();
    }
  }

  constructor(private router: Router,
              private sphereService: SphereService) {
  }

  private invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

}
