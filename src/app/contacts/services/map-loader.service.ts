import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core'
import { Observable } from 'rxjs'
import { DOCUMENT } from '@angular/common'

@Injectable({
  providedIn: 'root',
})
export class ScriptLoaderService {
  services: Array<{ name: string; service: ServiceInfo }> = []
  private renderer: Renderer2
  constructor(
    private rendererFactory2: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    const yandexUrl = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
    const mapName = 'ymap'
    this.renderer = this.rendererFactory2.createRenderer(DOCUMENT, null)
    this.services = [
      {
        name: mapName,
        service: new ServiceInfo(yandexUrl),
      },
    ]
  }

  public loadService(name: string): Observable<any> {
    return new Observable<any>((subscriber) => {
      let serviceInfo = this.services.find((si) => si.name === name)
      if (!serviceInfo || serviceInfo.service.loaded) {
        subscriber.next()
        subscriber.complete()
        return
      }
      let script = this.document.createElement('script')
      script.src = serviceInfo.service.address
      script.type = 'text/javascript'
      script.async = true
      script.onload = () => {
        if (!serviceInfo || !serviceInfo.service) {
          subscriber.next()
          subscriber.complete()
          return
        }
        serviceInfo.service.loaded = true
        subscriber.next()
        subscriber.complete()
      }

      script.onerror = () => subscriber.error()
      let head = this.document.getElementsByTagName('head')[0]
      this.renderer.appendChild(head, script)
    })
  }
}

class ServiceInfo {
  constructor(
    public address: string,
    public loaded: boolean = false
  ) {}
}
