import { Component, OnInit } from '@angular/core';
import { licences } from 'src/app/data/mock';
import { CartService } from 'src/app/data/service/cart.service';
import { Licence } from 'src/app/data/schema/licence';
import { Product } from 'src/app/data/schema/product';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-licence-list',
  templateUrl: './licence-list.component.html',
  styleUrls: ['./licence-list.component.scss']
})
export class LicenceListComponent implements OnInit {

  readonly licences = licences;
  products: Product[];
  invitedLic: Licence;
  revokingLicInv: Licence;
  revokedLic: Licence;

  constructor(
    readonly cartService: CartService,
    private modalService: ModalService,
  ) {
    this.products = this.cartService.getProducts();
  }

  ngOnInit(): void {
    this.modalService.closed$.subscribe(close => {
      this.closeDialog();
    });
  }

  renew(l: Licence) {
    this.cartService.addRenewal(l);
  }

  isInRenewList(l: Licence): boolean {
    return this.cartService
      .getCart(l.plan)
      .hasRenewal(l);
  }

  showGrantDialog(l: Licence) {
    this.invitedLic = l;
    this.modalService.open();
  }

  revokeInvitation(l: Licence) {
    this.revokingLicInv = l;
    this.modalService.open();
  }

  revokeLicence(l: Licence) {
    this.revokedLic = l;
    this.modalService.open();
  }

  private closeDialog() {
    this.invitedLic = null;
    this.revokingLicInv = null;
    this.revokedLic = null;
  }
}
