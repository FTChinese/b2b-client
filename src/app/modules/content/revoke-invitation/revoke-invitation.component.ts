import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Licence } from 'src/app/data/schema/licence';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-revoke-invitation',
  templateUrl: './revoke-invitation.component.html',
  styleUrls: ['./revoke-invitation.component.scss']
})
export class RevokeInvitationComponent implements OnInit {

  @Input() licence: Licence;
  @Output() reovked = new EventEmitter<Licence>();

  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.close();
  }

  revoke() {
    this.licence.status = 'available';
    this.licence.lastInvitation.id = '';
    this.licence.lastInvitation.email = '';

    this.reovked.emit(this.licence);
    this.modalService.close();
  }
}
