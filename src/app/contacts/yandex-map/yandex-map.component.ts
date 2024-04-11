import { Component, OnInit } from '@angular/core';
//import { YandexMapsModule } from 'angular-yandex-maps';
 
@Component({
  selector: 'app-yandex-map',
  templateUrl: './yandex-map.component.html',
  styleUrls: ['./yandex-map.component.scss'],
})

export class YandexMapComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    //ymaps.ready(() => {
    //  const map = new ymaps.Map('map', {
    //    center: [54.833600117859, 26.710444764404],
    //    zoom: 14
    //  });
    //});
  }
}
