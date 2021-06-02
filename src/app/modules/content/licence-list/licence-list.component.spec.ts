import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LicenceListComponent } from './licence-list.component';

describe('LicenceListComponent', () => {
  let component: LicenceListComponent;
  let fixture: ComponentFixture<LicenceListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
