import { Component, OnInit } from '@angular/core';
import { Licence } from 'src/app/data/schema/licence';
import { licenceID, stdPlan, invitationID, randomString } from 'src/app/data/mock';

@Component({
  selector: 'app-licence-list',
  templateUrl: './licence-list.component.html',
  styleUrls: ['./licence-list.component.scss']
})
export class LicenceListComponent implements OnInit {

  private createdUtc = '2020-05-05T17:19:00Z';

  licences: Licence[] = [
    {
      id: licenceID(),
      teamId: '',
      expireDate: '2021-05-20',
      trialStart: '2020-05-05',
      trialEnd: '2020-05-12',
      status: 'available',
      createdUtc: this.createdUtc,
      updatedUtc: this.createdUtc,
      lastInvitationId: null,
      lastInviteeEmail: null,
      plan: stdPlan,
      assignee: {
        ftcId: null,
        email: null,
        userName: null,
        isVip: false,
      },
    },
    {
      id: licenceID(),
      teamId: '',
      expireDate: '2021-05-20',
      trialStart: '2020-05-05',
      trialEnd: '2020-05-12',
      status: 'invited',
      createdUtc: this.createdUtc,
      updatedUtc: this.createdUtc,
      lastInvitationId: invitationID(),
      lastInviteeEmail: 'testA@example.rog',
      plan: stdPlan,
      assignee: {
        ftcId: null,
        email: null,
        userName: null,
        isVip: false,
      },
    },
    {
      id: licenceID(),
      teamId: '',
      expireDate: '2021-05-20',
      trialStart: '2020-05-05',
      trialEnd: '2020-05-12',
      status: 'granted',
      createdUtc: this.createdUtc,
      updatedUtc: this.createdUtc,
      lastInvitationId: invitationID(),
      lastInviteeEmail: 'testB@example.org',
      plan: stdPlan,
      assignee: {
        ftcId: randomString(),
        email: 'testB@example.org',
        userName: 'test user b',
        isVip: false,
      },
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
