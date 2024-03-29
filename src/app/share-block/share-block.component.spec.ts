import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBlockComponent } from './share-block.component';

describe('ShareBlockComponent', () => {
  let component: ShareBlockComponent;
  let fixture: ComponentFixture<ShareBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareBlockComponent]
    });
    fixture = TestBed.createComponent(ShareBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
