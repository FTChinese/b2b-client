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

  carts: Map<Tier, Cart> = new Map();

  get cartsArray(): Cart[] {
    const c: Cart[] = [];
    const std = this.carts.get('standard');
    if (std) {
      c.push(std);
    }

    const prm = this.carts.get('premium');
    if (prm) {
      c.push(prm);
    }

    return c;
  }

  get totalAmount(): number {
    return Array.from(this.carts.values())
      .map(cart => cart.totalAmount)
      .reduce((prev, curr) => prev + curr, 0);
  }

  get totalItems(): number {
    return Array.from(this.carts.values())
      .map(cart => cart.count)
      .reduce((prev, curr) => prev + curr, 0);
  }

  constructor() { }

  getProducts(): Product[] {

    products.forEach(product => {
      const cart = this.carts.get(product.plan.tier);
      if (cart) {
        cart.setPlan(product.plan);
      } else {
        this.carts.set(product.plan.tier, new Cart(product.plan));
      }
    });

    return products;
  }

  addNewSubs(plan: Plan) {
    this.carts.get(plan.tier)?.addNewSubs();
  }

  addRenewal(l: Licence) {
    this.carts.get(l.plan.tier)?.addRenewal(l);
  }

  isInRenewal(l: Licence): boolean {
    return this.carts.get(l.plan.tier)?.hasRenewal(l) ?? false;
  }

  getCart(plan: Plan): Cart | undefined {
    return this.carts.get(plan.tier);
  }
}
