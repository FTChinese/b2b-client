import { Component, OnInit, Input } from '@angular/core';
import { Licence } from 'src/app/data/schema/licence';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-revoke-invitation',
  templateUrl: './revoke-invitation.component.html',
  styleUrls: ['./revoke-invitation.component.scss']
})
export class RevokeInvitationComponent implements OnInit {

  @Input() licence: Licence;

  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.close();
  }
}
