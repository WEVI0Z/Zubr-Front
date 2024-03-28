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
  isRButtonHidden: boolean = false;
  isLButtonHidden: boolean = false;

  ngAfterViewInit(): void {
    this.imageChangeInterval = setInterval(() => {
      this.changeImage();
    }, 2250);
  }

  changeImage(): void {
    const element: HTMLElement = this.partnerList.nativeElement;
    const wrapper: HTMLElement = this.partnerWrapper.nativeElement;
    const mainWrapper: HTMLElement = this.mainWrapper.nativeElement;
    const mainWidth: number = mainWrapper.clientWidth;
    const elementWidth: number = element.clientWidth;
    const wrapperWidth: number = wrapper.clientWidth;
    const offsetPerScroll: number = elementWidth * 0.1;
    this.isRButtonHidden = false;
    this.isLButtonHidden = false;

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

    if (this.offset * -1 >= elementWidth - wrapperWidth) {
      this.isRButtonHidden = true;
    } else if (this.offset >= 0) {
      this.isLButtonHidden = true;
    }
    
  }

  previosImage(): void {
    const element: HTMLElement = this.partnerList.nativeElement;
    const wrapper: HTMLElement = this.partnerWrapper.nativeElement;
    const elementWidth: number = element.clientWidth;
    const wrapperWidth: number = wrapper.clientWidth;

    this.multiplier = 1;
    this.changeImage();
    clearInterval(this.imageChangeInterval);

    if (this.offset * -1 >= elementWidth - wrapperWidth) {
      this.isRButtonHidden = true;
    } else if (this.offset >= 0) {
      this.isLButtonHidden = true;
    }
  }

  nextImage(): void {
    const element: HTMLElement = this.partnerList.nativeElement;
    const wrapper: HTMLElement = this.partnerWrapper.nativeElement;
    const elementWidth: number = element.clientWidth;
    const wrapperWidth: number = wrapper.clientWidth;

    this.multiplier = -1;
    this.changeImage();
    clearInterval(this.imageChangeInterval);

    if (this.offset * -1 >= elementWidth - wrapperWidth) {
      this.isRButtonHidden = true;
    } else if (this.offset >= 0) {
      this.isLButtonHidden = true;
    }
  }

  stopImageChange(): void {
    clearInterval(this.imageChangeInterval);
  }

  resumeImageChange(): void {
    this.imageChangeInterval = setInterval(() => {
      this.changeImage();
    }, 2250);
  }

  handleMouseWheel(event: any) {
    event.preventDefault();
    clearInterval(this.imageChangeInterval);

    if (event.deltaY > 0) {
      this.nextImage(); // Вызовите функцию для прокрутки вниз
    } else if (event.deltaY < 0) {
      this.previosImage(); // Вызовите функцию для прокрутки вверх
    }
   }

}
