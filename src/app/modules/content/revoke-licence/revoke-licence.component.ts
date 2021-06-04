import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Licence } from 'src/app/data/schema/licence';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-revoke-licence',
  templateUrl: './revoke-licence.component.html',
  styleUrls: ['./revoke-licence.component.scss']
})
export class RevokeLicenceComponent implements OnInit {

  @Input() licence: Licence;
  @Output() revoked = new EventEmitter<Licence>();

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
    this.licence.assignee = {
      ftcId: null,
      email: null,
      userName: null,
      isVip: false
    };

    this.revoked.emit(this.licence);
    this.modalService.close();
  }
}
