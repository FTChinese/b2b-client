import { Component, OnInit } from '@angular/core';
import { licences } from 'src/app/data/mock';
import { CartService } from 'src/app/data/service/cart.service';
import { Licence } from 'src/app/data/schema/licence';
import { Product } from 'src/app/data/schema/product';

@Component({
  selector: 'app-licence-list',
  templateUrl: './licence-list.component.html',
  styleUrls: ['./licence-list.component.scss']
})
export class LicenceListComponent implements OnInit {

  readonly licences = licences;
  products: Product[];
  cartLink = '/cart';

  constructor(
    readonly cartService: CartService
  ) {
    this.products = this.cartService.getProducts();
  }

  ngOnInit(): void {
  }

  renew(l: Licence) {
    this.cartService.addRenewal(l);
    console.log(this.cartService.carts);
  }

  disableRenew(l: Licence): boolean {
    if (!this.cartService.initialized) {
      return true;
    }

    return this.isInRenewList(l);
  }

  isInRenewList(l: Licence): boolean {
    return this.cartService.isInRenewal(l);
  }
}
