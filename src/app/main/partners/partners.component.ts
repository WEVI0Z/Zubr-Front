import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit{
  @ViewChild("partnerList", {read: ElementRef}) partnerList!: ElementRef;
  @ViewChild("partnerWrapper", {read: ElementRef}) partnerWrapper!: ElementRef
  @ViewChild("mainWrapper", {read: ElementRef}) mainWrapper!: ElementRef;
  offset: number = 0;
  multiplier: number = -1;
  imageChangeInterval: any;
  isImageChangePaused: boolean = false;

  ngAfterViewInit(): void {
    this.imageChangeInterval = setInterval(() => {
      this.changeImage();
    }, 2250);
  }

  changeImage(): void {
    if (!this.isImageChangePaused) {
      const element: HTMLElement = this.partnerList.nativeElement;
      const wrapper: HTMLElement = this.partnerWrapper.nativeElement;
      const mainWrapper: HTMLElement = this.mainWrapper.nativeElement;
      const mainWidth: number = mainWrapper.clientWidth;
      const elementWidth: number = element.clientWidth;
      const wrapperWidth: number = wrapper.clientWidth;
      const offsetPerScroll: number = elementWidth * 0.1;

      if (mainWidth <= 778) {
        element.style.transform = ``;
        return;
      }

      if (this.offset * -1 >= elementWidth - wrapperWidth) {
        this.multiplier = 1
      } else if (this.offset >= 0) {
        this.multiplier = -1;
      }

      this.offset += offsetPerScroll * this.multiplier;

      element.style.transform = `translateX(${this.offset}px)`
    }
    
  }


  stopImageChange(): void {
    this.isImageChangePaused = true;
    clearInterval(this.imageChangeInterval);
  }

  resumeImageChange(): void {
    this.isImageChangePaused = false;
    this.imageChangeInterval = setInterval(() => {
      this.changeImage();
    }, 2250);
  }
}
