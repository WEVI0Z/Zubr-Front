import {Component, OnInit} from '@angular/core';
import { ParticlesConfig } from './particles-config';
import {Router} from "@angular/router";

declare let particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  protected isPageMain: boolean = this.router.url === "/";

  public ngOnInit(): void {
    if (this.isPageMain) {
      this.invokeParticles();
    }
  }

  constructor(private router: Router) {
  }

  private invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

}
