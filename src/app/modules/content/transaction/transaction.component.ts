import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/data/schema/transaction';
import { checkouts } from 'src/app/data/mock';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  checkouts: Checkout[] = checkouts;

  constructor() { }

  ngOnInit(): void {
  }

}
