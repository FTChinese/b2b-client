import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/data/service/cart.service';
import { Licence } from 'src/app/data/schema/licence';
import { Plan } from 'src/app/data/schema/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    readonly cartService: CartService
  ) {
    this.cartService.getProducts();
    console.log(this.cartService);
  }

  ngOnInit(): void {
  }

  setNewSubs(plan: Plan, copies: string) {
    this.cartService.setNewSubs(plan, Number.parseInt(copies, 10) ?? -1);
  }

  removeRenwal(l: Licence) {
    this.cartService.removeRenwal(l);
  }
}
