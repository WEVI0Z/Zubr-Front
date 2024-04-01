import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit {
  @ViewChild("partnerList", { read: ElementRef }) partnerList!: ElementRef;
  @ViewChild("partnerWrapper", { read: ElementRef }) partnerWrapper!: ElementRef;
  @ViewChild("mainWrapper", { read: ElementRef }) mainWrapper!: ElementRef;
  offset: number = 0;
  multiplier: number = -1;
  imageChangeInterval: number = 2500;
  isRButtonHidden: boolean = false;
  isLButtonHidden: boolean = false;

  ngAfterViewInit(): void {
    this.startImageChange();
  }

  startImageChange(): void {
    this.imageChangeInterval = window.setInterval(() => {
      this.changeImage();
    }, 2500);
  }

  changeImage(): void {
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
      // Если достигнут конец элементов карусели
      this.offset = 0;
      this.offset -= offsetPerScroll * this.multiplier;
      element.style.transform = `translateX(${this.offset + offsetPerScroll}px)`;
      return;
    } else if (this.offset >= 0) {
      // Если достигнуто начало элементов карусели
      this.offset = -(elementWidth - wrapperWidth);
      this.offset -= offsetPerScroll * this.multiplier;
      element.style.transform = `translateX(${this.offset - offsetPerScroll}px)`;
      return;
    }

    this.offset -= offsetPerScroll * this.multiplier;

    element.style.transform = `translateX(${this.offset}px)`;
  }

  previosImage(): void {
    this.multiplier = -1;
    this.changeImage();
    clearInterval(this.imageChangeInterval);
  }

  nextImage(): void {
    this.multiplier = 1;
    this.changeImage();
    clearInterval(this.imageChangeInterval);
  }

  stopImageChange(): void {
    clearInterval(this.imageChangeInterval);
  }

  resumeImageChange(): void {
    this.startImageChange();
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
