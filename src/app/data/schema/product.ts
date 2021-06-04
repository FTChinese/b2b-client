import { Tier, Cycle, PriceSource } from './enum';

export interface Edition {
  tier: Tier;
  cycle: Cycle;
}

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

export interface Price extends Edition {
  id: string;
  active: boolean;
  currency: string;
  nickname: string | null;
  productId: string;
  source: PriceSource;
  unitAmount: number;
}

export interface Product {
  id: string;
  tier: Tier;
  heading: string;
  description: string | null;
  smallPrint: string | null;
  prices: Price[];
}

export interface Paywall {
  products: Product[];
}
