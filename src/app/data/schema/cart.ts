import { Plan, Discount } from './product';
import { Licence } from './licence';

function zeroDiscount(): Discount {
  return {
    id: 0,
    threshold: 0,
    priceOff: 0
  };
}

function findDiscount(plan: Plan, quantity: number): Discount {
  if (plan.discounts.length === 0) {
    return zeroDiscount();
  }

  if (quantity >= plan.discounts[plan.discounts.length - 1].threshold) {
    return plan.discounts[plan.discounts.length - 1];
  }

  let target: Discount = zeroDiscount();

  for (const current of plan.discounts) {
    if (quantity >= target.threshold && quantity < current.threshold) {
      return target;
    }

    target = current;
  }

  return target;
}

export interface CartItem {
  planId: string;
  discountId: number | null;
  create: number;
  renewal: string[];
}

export class Cart {
  plan?: Plan;
  newSubs = 0;
  discount: Discount = zeroDiscount();
  renewals: Map<string, Licence> = new Map();

  constructor() { }

  setPlan(p: Plan): Cart {
    this.plan = p;
    this.updateDiscount();
    return this;
  }

  addNewSubs() {
    this.newSubs = (+this.newSubs) + 1;
    this.updateDiscount();
  }

  setNewSubs(copies: number) {
    if (copies < 0) {
      return;
    }

    this.newSubs = +copies;
    this.updateDiscount();
  }

  addRenewal(l: Licence) {
    this.renewals.set(l.id, l);
    this.updateDiscount();
  }

  removeRenewal(l: Licence) {
    this.renewals.delete(l.id);
    this.updateDiscount();
  }

  hasRenewal(l: Licence): boolean {
    return this.renewals.has(l.id);
  }

  clear() {
    this.newSubs = 0;
    this.renewals.clear();
  }

  private updateDiscount() {
    if (this.plan) {
      this.discount = findDiscount(this.plan, this.count);
    }
  }

  // Total licence to buy.
  get count(): number {
    return this.newSubs + this.renewals.size;
  }

  get formattedUnitPrice(): string {
    if (this.discount.priceOff === 0) {
      return `${this.plan.price}`;
    }

    return `${this.plan.price} - ${this.discount.priceOff}`;
  }

  get unitPrice(): number {
    return (+this.plan.price) - (+this.discount.priceOff);
  }

  get totalAmount(): number {
    return this.count * (+this.unitPrice);
  }

  get renewalLicences(): Licence[] {
    return Array.from(this.renewals.values());
  }

  json(): CartItem {
    return {
      planId: this.plan.id,
      discountId: this.discount.id || null,
      create: this.newSubs,
      renewal: Array.from(this.renewals.values())
        .map(licence => licence.id),
    };
  }
}

