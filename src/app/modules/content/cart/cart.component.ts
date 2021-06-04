import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/data/service/cart.service';
import { Licence } from 'src/app/data/schema/licence';
import { Price } from 'src/app/data/schema/product';
import { sitemap } from 'src/app/layout/sitemap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productsLink = `/${sitemap.products}`;
  licencesLink = `/${sitemap.licences}`;
  checkoutLink = `./checkout`;
  disabled = false;

  constructor(
    private router: Router,
    readonly cartService: CartService
  ) {
  }

  ngOnInit(): void {
  }

  setNewSubs(price: Price, copies: string) {
    this.cartService.setNewCopies(price, Number.parseInt(copies, 10) ?? -1);
  }

  removeRenwal(l: Licence) {
    this.cartService.removeRenwal(l);
  }

  incr(price: Price) {
    this.cartService.incrNewCopy(price);
  }

  decr(price: Price) {
    this.cartService.decrNewCopy(price);
  }

  checkout() {
    console.log(this.cartService);
    this.disabled = true;
    this.router.navigateByUrl(`/${sitemap.cart}/checkout`);
  }
}
