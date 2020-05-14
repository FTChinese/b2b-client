import { Component, OnInit } from '@angular/core';
import { licences } from 'src/app/data/mock';
import { CartService } from 'src/app/data/service/cart.service';
import { Licence } from 'src/app/data/schema/licence';

@Component({
  selector: 'app-licence-list',
  templateUrl: './licence-list.component.html',
  styleUrls: ['./licence-list.component.scss']
})
export class LicenceListComponent implements OnInit {

  readonly licences = licences;

  constructor(
    readonly cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  renew(l: Licence) {
    this.cartService.addRenewal(l);
  }
}
