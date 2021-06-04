import { Injectable } from '@angular/core';
import { Price } from '../schema/product';
import { mockProducts } from '../mock';
import { CartItem } from '../schema/shopping-cart';
import { Licence } from '../schema/licence';
import { Tier } from '../schema/enum';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Map<string, CartItem> = new Map();
  private latestPrices: Map<Tier, Price> = new Map();

  get cartItems(): CartItem[] {
    return Array.from(this.items.values());
  }

  get totalAmount(): number {
    return Array.from(this.items.values())
      .map(item => item.totalAmount)
      .reduce((prev, curr) => prev + curr, 0);
  }

  get totalCopies(): number {
    return Array.from(this.items.values())
      .map(item => item.totalCopies)
      .reduce((prev, curr) => prev + curr, 0);
  }

  newCopiesOf(price: Price): number {
    return this.items.get(price.id)?.countNewCopies || 0;
  }

  constructor() {
    mockProducts.map(p => p.prices[0])
      .forEach(price => this.latestPrices.set(price.tier, price));
  }

  private ensureItemExists(price: Price) {
    this.latestPrices.set(price.tier, price);

    if (this.items.has(price.id)) {
      return;
    }

    this.items.set(price.id, new CartItem(price));
  }

  incrNewCopy(price: Price) {
    this.ensureItemExists(price);
    this.items.get(price.id)?.incrNewCopy();
  }

  decrNewCopy(price: Price) {
    this.items.get(price.id)?.decrNewCopy();
  }

  setNewCopies(price: Price, n: number) {
    this.ensureItemExists(price);
    this.items.get(price.id)?.setNewCopies(n);
  }

  addRenewal(l: Licence) {
    const price = this.latestPrices.get(l.tier);
    if (price) {
      this.items.get(price.id).addRenewal(l);
    }
  }

  removeRenwal(l: Licence) {
    const price = this.latestPrices.get(l.tier);
    if (price) {
      this.items.get(price.id).deleteRenewal(l);
    }
  }

  hasRenwal(l: Licence): boolean {
    const price = this.latestPrices.get(l.tier);
    return this.items.get(price.id).hasRenewal(l);
  }

  clearCarts() {
    this.items.forEach(cart => {
      cart.clear();
    });
  }
}
