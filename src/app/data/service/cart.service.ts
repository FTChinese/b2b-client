import { Injectable } from '@angular/core';
import { Product, Plan } from '../schema/product';
import { products } from '../mock';
import { Cart } from '../schema/cart';
import { Licence } from '../schema/licence';
import { Tier } from '../schema/enum';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  stdPlanCart: Cart;
  prmPlanCart: Cart;

  get totalAmount(): number {
    return this.stdPlanCart.totalAmount + this.prmPlanCart.totalAmount;
  }

  constructor() { }

  getProducts(): Product[] {

    products.forEach(product => {
      switch (product.plan.tier) {
        case 'standard':
          if (this.stdPlanCart) {
            this.stdPlanCart.setPlan(product.plan);
          } else {
            this.stdPlanCart = new Cart(product.plan);
          }
          break;

        case 'premium':
          if (this.prmPlanCart) {
            this.prmPlanCart.setPlan(product.plan);
          } else {
            this.prmPlanCart = new Cart(product.plan);
          }
          break;
      }
    });

    return products;
  }

  addNewSubs(tier: Tier) {
    switch (tier) {
      case 'standard':
        this.stdPlanCart.addNewSubs();
        break;

      case 'premium':
        this.prmPlanCart.addNewSubs();
        break;
    }
  }

  addRenewal(l: Licence) {
    switch (l.plan.tier) {
      case 'standard':
        this.stdPlanCart.addRenewal(l);
        break;

      case 'premium':
        this.prmPlanCart.addRenewal(l);
        break;
    }
  }
}
