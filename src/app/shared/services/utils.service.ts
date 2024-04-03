import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public randomizeList<T>(list: T[]): T[] {
    return [...list].sort(
      (a, b) => 1 * (Math.floor(Math.random() * 2) == 1 ? 1 : -1)
    )
  }
}
