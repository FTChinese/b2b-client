import { Licence } from './licence';
import { Price } from './product';

export class CartItem {
  private price: Price;
  private newCopies = 0;
  private renewal: Set<Licence> = new Set();

  get totalAmount(): number {
    return this.price.unitAmount * this.totalCopies;
  }

  get totalCopies(): number {
    return this.newCopies + this.renewal.size;
  }

  get countNewCopies(): number {
    return this.newCopies;
  }

  get countRenewalCopies(): number {
    return this.renewal.size;
  }

  get renewalLicences(): Licence[] {
    return Array.from(this.renewal.values());
  }

  get productPrice(): Price {
    return this.price;
  }

  constructor(p: Price) {
    this.price = p;
  }

  clear() {
    this.newCopies = 0;
    this.renewal.clear();
  }

  incrNewCopy(): CartItem {
    this.newCopies++;
    return this;
  }

  decrNewCopy(): CartItem {
    if (this.newCopies === 0) {
      return this;
    }
    this.newCopies--;
    return this;
  }

  setNewCopies(n: number): CartItem {
    if (n < 0) {
      return this;
    }

    this.newCopies = n;
    return this;
  }

  addRenewal(l: Licence): CartItem {
    this.renewal.add(l);
    return this;
  }

  deleteRenewal(l: Licence): CartItem {
    this.renewal.delete(l);
    return this;
  }

  hasRenewal(l: Licence): boolean {
    return this.renewal.has(l);
  }
}

