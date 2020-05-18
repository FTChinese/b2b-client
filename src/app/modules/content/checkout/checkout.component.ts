import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/data/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(
    readonly cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
