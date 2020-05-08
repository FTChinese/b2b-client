import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/schema/product';
import { products } from 'src/app/data/mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = products;

  constructor() { }

  ngOnInit(): void {
  }

}
