import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LicenceDetailComponent } from './licence-detail.component';

describe('LicenceDetailComponent', () => {
  let component: LicenceDetailComponent;
  let fixture: ComponentFixture<LicenceDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
