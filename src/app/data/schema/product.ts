import { Tier, Cycle } from './enum';

export interface Discount {
  threshold: number;
  priceOff: number;
}

export interface Plan {
  id: string;
  price: number;
  tier: Tier;
  cycle: Cycle;
  discounts: Discount[];
}

export type DiscountedPlan = Omit<Plan, 'discounts'> & Discount;

export interface Product {
  id: string;
  tier: Tier;
  heading: string;
  smallPrint: string | null;
  description: string[];
  plan: Plan;
}
