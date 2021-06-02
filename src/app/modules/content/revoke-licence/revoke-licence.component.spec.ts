import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RevokeLicenceComponent } from './revoke-licence.component';

describe('RevokeLicenceComponent', () => {
  let component: RevokeLicenceComponent;
  let fixture: ComponentFixture<RevokeLicenceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RevokeLicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokeLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
