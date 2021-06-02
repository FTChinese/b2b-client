import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RevokeInvitationComponent } from './revoke-invitation.component';

describe('RevokeInvitationComponent', () => {
  let component: RevokeInvitationComponent;
  let fixture: ComponentFixture<RevokeInvitationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RevokeInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokeInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
