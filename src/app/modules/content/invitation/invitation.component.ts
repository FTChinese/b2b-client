import { Component, OnInit } from '@angular/core';
import { invitations } from 'src/app/data/mock';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  readonly invitations = invitations;

  constructor() { }

  ngOnInit(): void {
  }

}
