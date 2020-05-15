import { Discount, BasePlan } from './product';
import { OrderKind } from './enum';

interface CheckoutItem {
  plan: BasePlan;
  discount: Discount;
  create: number;
  renewal: string[];
}

// Each checkout may generate multiple Order.
// They are linked by Checkout.id and Order.checkoutId.
export interface Checkout {
  id: string;
  teamId: string;
  totalAmount: number;
  status: 'unpaid' | 'paid';
  createdUtc: string;
  confirmedUtc: string | null;
  items: CheckoutItem[];
}

export interface Order {
  id: string;
  planId: string;
  discountId: number | null;
  licenceId: string;
  teamId: string;
  checkoutId: string;
  amount: number;
  cycleCount: number;
  kind: OrderKind;
  periodStart: string;
  periodEnd: string;
  createdUtc: string;
  confirmedUtc: string | null;
}
