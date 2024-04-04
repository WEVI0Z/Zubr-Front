import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SphereListComponent } from './sphere-list.component'

describe('SphereListComponent', () => {
  let component: SphereListComponent
  let fixture: ComponentFixture<SphereListComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SphereListComponent],
    })
    fixture = TestBed.createComponent(SphereListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
