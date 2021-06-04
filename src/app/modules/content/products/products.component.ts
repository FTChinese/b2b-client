import { Component, OnInit } from '@angular/core';
import { mockProducts } from 'src/app/data/mock';
import { Product, Price } from 'src/app/data/schema/product';
import { CartService } from 'src/app/data/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  // Pitfall: the link to shopping cart page must be
  // set using Angular directive routerLink.
  // If you use a plain href, the service disappears
  // after to navigated to the shopping cart page.
  constructor(
    readonly cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = mockProducts;
  }

  addSubs(price: Price) {
    this.cartService.incrNewCopy(price);
  }

  getCount(price: Price): number {
    return this.cartService.newCopiesOf(price);
  }
}
