import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit{
  @ViewChild("partnerList", {read: ElementRef}) partnerList!: ElementRef;
  @ViewChild("partnerWrapper", {read: ElementRef}) partnerWrapper!: ElementRef;
  offset: number = 0;
  multiplier: number = -1;

  ngAfterViewInit(): void {
    setInterval(() => {this.changeImage()}, 1500);
  }

  changeImage(): void {
    const element: HTMLElement = this.partnerList.nativeElement;
    const wrapper: HTMLElement = this.partnerWrapper.nativeElement;
    const elementWidth: number = element.clientWidth;
    const wrapperWidth: number = wrapper.clientWidth;
    const offsetPerScroll: number = elementWidth * 0.1;

    if (this.offset * -1 >= elementWidth - wrapperWidth) {
      this.multiplier = 1
    } else if (this.offset >= 0) {
      this.multiplier = -1;
    }

    this.offset += offsetPerScroll * this.multiplier;

    element.style.transform = `translateX(${this.offset}px)`
  }
}
