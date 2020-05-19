import { Injectable } from '@angular/core';
import { Product, Plan } from '../schema/product';
import { products } from '../mock';
import { Cart, CartItem } from '../schema/cart';
import { Licence } from '../schema/licence';
import { Tier } from '../schema/enum';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carts: Map<Tier, Cart> = new Map();

  get cartsArray(): Cart[] {
    return Array.from(this.carts.values());
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

  constructor() {
    this.carts.set('standard', new Cart());
    this.carts.set('premium', new Cart());
  }

  getProducts(): Product[] {

    products.forEach(product => {
      this.carts
        .get(product.plan.tier)
        .setPlan(product.plan);
    });

    return products;
  }

  addNewSubs(plan: Plan) {
    this.carts.get(plan.tier)?.addNewSubs();
  }

  setNewSubs(plan: Plan, copies: number) {
    this.carts.get(plan.tier)?.setNewSubs(copies);
  }

  addRenewal(l: Licence) {
    this.carts.get(l.plan.tier)?.addRenewal(l);
  }

  removeRenwal(l: Licence) {
    this.carts.get(l.plan.tier)?.removeRenewal(l);
  }

  clearCarts() {
    this.carts.forEach(cart => {
      cart.clear();
    });
  }

  getCart(plan: Plan): Cart {
    let c = this.carts.get(plan.tier);
    if (c) {
      return c;
    }

    c = new Cart().setPlan(plan);
    this.carts.set(plan.tier, c);
    return c;
  }

  // Data that will be submitted to backend.
  json(): CartItem[] {
    return this.cartsArray.map(cart => cart.json());
  }
}
