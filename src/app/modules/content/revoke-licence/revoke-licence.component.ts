import { Component, OnInit, Input } from '@angular/core';
import { Licence } from 'src/app/data/schema/licence';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-revoke-licence',
  templateUrl: './revoke-licence.component.html',
  styleUrls: ['./revoke-licence.component.scss']
})
export class RevokeLicenceComponent implements OnInit {

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
