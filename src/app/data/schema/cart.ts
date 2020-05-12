import { Plan, Discount } from './product';
import { Licence } from './licence';

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
      return current;
    }

    target = current;
  }

  return target;
}

export class Cart {
  newSubs = 0;
  renewalIds: Set<string> = new Set();

  constructor(private plan: Plan) {}

  setPlan(p: Plan) {
    this.plan = p;
  }

  addNewSubs() {
    this.newSubs += 1;
  }

  addRenewal(l: Licence) {
    this.renewalIds.add(l.id);
  }

  get count(): number {
    return this.newSubs + this.renewalIds.size;
  }

  get discountedPrice(): number {
    const discount = findDiscount(this.plan, this.count);

    return this.plan.price - discount.priceOff;
  }

  get totalAmount(): number {
    return this.count * this.discountedPrice;
  }
}

