import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent implements OnInit {
  @ViewChild('button', { read: ElementRef }) button!: ElementRef
  view: Window = document.defaultView!

  protected scroll(): void {
    this.view.scrollTo({ top: 0, behavior: 'smooth' })
  }

  ngOnInit(): void {
    this.view.addEventListener('scroll', (e) => this.checkOffset())
  }

  private checkOffset() {
    console.log(document.defaultView!.scrollY > 600)
    document.defaultView!.scrollY > 600
      ? this.button.nativeElement.classList.remove('invisible')
      : this.button.nativeElement.classList.add('invisible')
  }
}
