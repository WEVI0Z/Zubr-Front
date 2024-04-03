import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCookieComponent } from './about-cookie.component';

describe('AboutCookieComponent', () => {
  let component: AboutCookieComponent;
  let fixture: ComponentFixture<AboutCookieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCookieComponent]
    });
    fixture = TestBed.createComponent(AboutCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
