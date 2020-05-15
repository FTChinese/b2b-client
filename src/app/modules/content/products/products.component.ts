import { Component, OnInit } from '@angular/core';
import { Product, Plan } from 'src/app/data/schema/product';
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
    this.products = this.cartService.getProducts();
  }

  addSubs(plan: Plan) {
    this.cartService.addNewSubs(plan);
  }

  getCount(plan: Plan): number {
    return this.cartService.getCart(plan)?.newSubs ?? 0;
  }
}
