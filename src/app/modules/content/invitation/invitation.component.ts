import { Component, OnInit } from '@angular/core';
import { invitations } from 'src/app/data/mock';
import { sitemap } from 'src/app/layout/sitemap';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  licencesLink = `/${sitemap.licences}`;

  readonly invitations = invitations;

  constructor() { }

  ngOnInit(): void {
  }

}
