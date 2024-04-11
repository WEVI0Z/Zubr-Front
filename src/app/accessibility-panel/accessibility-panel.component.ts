import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-accessibility-panel',
  templateUrl: './accessibility-panel.component.html',
  styleUrls: ['./accessibility-panel.component.scss'],
})
export class AccessibilityPanelComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>()

  private originalFontSizes: Map<Element, number> = new Map()
  private originalLetterSpacing: Map<Element, number> = new Map()
  private elements: NodeListOf<Element>

  constructor() {
    this.elements = document.querySelectorAll('body *:not(.modal)')
    this.elements.forEach((element: Element) => {
      if (element.nodeType === Node.ELEMENT_NODE) {
        const currentFontSize = parseInt(
          window.getComputedStyle(element as HTMLElement).fontSize
        )
        const currentLetterSpacing = parseInt(
          window.getComputedStyle(element as HTMLElement).letterSpacing
        )
        this.originalFontSizes.set(element, currentFontSize)
        this.originalLetterSpacing.set(element, currentLetterSpacing)
      }
    })
  }

  increaseFontSize(): void {
    // Увеличение размера шрифта
    this.elements.forEach((element: Element) => {
      if (element.nodeType === Node.ELEMENT_NODE) {
        const currentFontSize = parseInt(
          window.getComputedStyle(element as HTMLElement).fontSize,
          10
        )
        ;(element as HTMLElement).style.fontSize = `${currentFontSize + 1}px`
      }
    })
  }

  decreaseFontSize(): void {
    // Уменьшение размера шрифта
    this.elements.forEach((element: Element) => {
      if (element.nodeType === Node.ELEMENT_NODE) {
        const currentFontSize = parseInt(
          window.getComputedStyle(element as HTMLElement).fontSize,
          10
        )
        ;(element as HTMLElement).style.fontSize = `${currentFontSize - 1}px`
      }
    })
  }

  increaseLineHeight(): void {
    // Добавьте здесь логику увеличения интервала шрифта
    this.elements.forEach((element: Element) => {
      if (element.nodeType === Node.ELEMENT_NODE) {
        const currentLetterSpacing = parseFloat(
          window.getComputedStyle(element as HTMLElement).letterSpacing
        )
        ;(element as HTMLElement).style.letterSpacing = `${
          currentLetterSpacing + 1
        }px`
      }
    })
  }

  decreaseLineHeight(): void {
    //Изменить отступ
  }

  invertColors(): void {
    // Инвертировать цвета
  }

  applyGrayscale(): void {
    // Серые оттенки
  }

  underlineLinks(): void {
    const elements = document.querySelectorAll('a')
    elements.forEach((element: HTMLAnchorElement) => {
      element.style.textDecoration = 'underline'
    })
  }

  increaseCursorSize(): void {
    // Увеличить размер курсора
  }

  enableReadingMode(): void {
    // Режим чтения
  }

  convertTextToSpeech(): void {
    // Текст в речь
  }

  resetPreferences(): void {
    this.originalFontSizes.forEach((fontSize: number, element: Element) => {
      ;(element as HTMLElement).style.fontSize = `${fontSize}px`
    })
    this.originalLetterSpacing.forEach(
      (letterSpacing: number, element: Element) => {
        ;(element as HTMLElement).style.letterSpacing = `${letterSpacing}px`
      }
    )
    this.elements.forEach((element: Element) => {
      ;(element as HTMLElement).style.textDecoration = 'none'
    })
  }
}
