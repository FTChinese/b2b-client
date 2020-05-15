import { Plan, Discount, DiscountedPlan } from './product';
import { Licence } from './licence';
import { tiers } from './localization';

function findDiscount(plan: Plan, quantity: number): Discount {
  if (plan.discounts.length === 0) {
    return {
      threshold: 0,
      priceOff: 0
    };
  }

  if (quantity >= plan.discounts[plan.discounts.length - 1].threshold) {
    return plan.discounts[plan.discounts.length - 1];
  }

  let target: Discount = { threshold: 0, priceOff: 0 };

  for (const current of plan.discounts) {
    if (quantity >= target.threshold && quantity < current.threshold) {
      return target;
    }

    target = current;
  }

  return target;
}

function buildDiscountedPlan(plan: Plan, quantity): DiscountedPlan {
  const discount = findDiscount(plan, quantity);

  return {
    id: plan.id,
    price: plan.price,
    tier: plan.tier,
    cycle: plan.cycle,
    ...discount,
  };
}

export class Cart {
  newSubs = 0;
  discount: Discount;
  renewals: Map<string, Licence> = new Map();

  constructor(public plan: Plan) {
    this.discount = findDiscount(plan, 0);
  }

  setPlan(p: Plan) {
    this.plan = p;
    this.updateDiscount();
  }

  addNewSubs() {
    this.newSubs += 1;
    this.updateDiscount();
  }

  setNewSubs(copies: number) {
    if (copies < 0) {
      return;
    }

    this.newSubs = copies;
    this.updateDiscount();
  }

  addRenewal(l: Licence) {
    this.renewals.set(l.id, l);
    this.updateDiscount();
  }

  hasRenewal(l: Licence): boolean {
    return this.renewals.has(l.id);
  }

  private updateDiscount() {
    this.discount = findDiscount(this.plan, this.count);
  }

  get title(): string {
    return tiers[this.plan.tier];
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
    return this.plan.price - this.discount.priceOff;
  }

  get totalAmount(): number {
    return this.count * this.unitPrice;
  }
}

