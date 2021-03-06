export type LoginMethod = 'email' | 'wechat';
export type PaymentMethod = 'alipay' | 'wechat' | 'stripe' | 'apple' | 'b2b';
export type Tier = 'standard' | 'premium';
export type Cycle = 'month' | 'year';
export type Gender = 'M' | 'F';
export type Platform = 'web' | 'ios' | 'android'
export type SubStatus = 'active' | 'canceled' | 'incomplete' | 'incomplate_expired' | 'past_due' | 'trialing' | 'unpaid';
export type OrderKind = 'create' | 'renew';
export type AccountKind = 'ftc' | 'wechat' | 'linked';
export type LicenceStatus = 'available' | 'invited' | 'granted';
export type InvitationStatus = 'created' | 'accepted' | 'revoked';
export type PriceSource = 'ftc' | 'stripe';
export type OfferKind = 'promotion' | 'retention' | 'win_back';
