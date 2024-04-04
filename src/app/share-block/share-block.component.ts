import { Component, Renderer2 } from '@angular/core'

@Component({
  selector: 'app-share-block',
  templateUrl: './share-block.component.html',
  styleUrls: ['./share-block.component.scss'],
})
export class ShareBlockComponent {
  constructor(private renderer: Renderer2) {}
  ngOnInit() {
    const script = this.renderer.createElement('script')
    script.src = 'https://yastatic.net/share2/share.js'
    script.async = true
    this.renderer.appendChild(document.body, script)
  }
}
