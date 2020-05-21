import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeLicenceComponent } from './revoke-licence.component';

describe('RevokeLicenceComponent', () => {
  let component: RevokeLicenceComponent;
  let fixture: ComponentFixture<RevokeLicenceComponent>;

  beforeEach(async(() => {
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
