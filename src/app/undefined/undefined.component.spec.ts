import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UndefinedComponent } from './undefined.component'

describe('UndefinedComponent', () => {
  let component: UndefinedComponent
  let fixture: ComponentFixture<UndefinedComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UndefinedComponent],
    })
    fixture = TestBed.createComponent(UndefinedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
