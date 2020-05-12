export interface Cart {
  standard: {
    newSubs: number; // How many copies of new standard edition to buy.
    renewal: string[]; // The licence ids to renew.
  };
  premium: {
    newSubs: number; // How many copies of new premium edition to buy.
    renewal: string[] // The licence ids to renew.
    upgrade: string[] // The licence ids of standard edition used for upgrading.
  };
}
