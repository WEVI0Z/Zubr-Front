import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { ScriptLoaderService } from '../services/map-loader.service'

declare var ymaps: any

@Component({
  selector: 'app-yandex-map',
  templateUrl: './yandex-map.component.html',
  styleUrls: ['./yandex-map.component.scss'],
})
export class YandexMapComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined
  mapIsLoading: boolean = false
  constructor(private scriptLoader: ScriptLoaderService) {}

  ngOnInit(): void {
    this.mapIsLoading = true

    this.subscription = this.scriptLoader.loadService('ymap').subscribe(() => {
      this.mapIsLoading = false
      ymaps.ready(this.configureMap)
    })
  }

  configureMap() {
    const lat = 54.833600117859
    const lon = 26.710444764404
    const zoomValue = 16

    var mapOptions = new ymaps.Map(
        'map',
        {
          center: [lat, lon],
          zoom: zoomValue,
        },
        {
          searchControlProvider: 'yandex#search',
        }
      ),
      myGeoObject = new ymaps.GeoObject(
        {
          geometry: {
            type: 'Point',
            coordinates: [lat, lon],
          },
          properties: {
            iconContent: '',
            hintContent: '',
          },
        },
        {
          preset: 'islands#governmentCircleIcon',
          draggable: false,
          iconColor: '#3b5998',
        }
      )

    mapOptions.geoObjects.add(myGeoObject)
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
