import { Tier, Cycle } from './enum';

export interface Discount {
  id: number;
  threshold: number;
  priceOff: number;
}

export interface BasePlan {
  id: string;
  price: number;
  tier: Tier;
  cycle: Cycle;
}

export type Plan = BasePlan & {
  discounts: Discount[];
};

export interface Product {
  id: string;
  tier: Tier;
  heading: string;
  smallPrint: string | null;
  description: string[];
  plan: Plan;
}
