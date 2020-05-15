import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/data/service/cart.service';
import { Licence } from 'src/app/data/schema/licence';

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

  removeRenwal(l: Licence) {
    this.cartService.removeRenwal(l);
  }
}
