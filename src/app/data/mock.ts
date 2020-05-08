import { Product, Plan } from './schema/product';

export function randomString(): string {
  return Math.random().toString(36).substring(2, 15);
}

export function licenceID(): string {
  return `lic_${randomString()}`;
}

export function invitationID(): string {
  return `inv_${randomString()}`;
}

export const stdPlan: Plan = {
  id: 'plan_ICMPPM0UXcpZ',
  price: 258,
  tier: 'standard',
  cycle: 'year',
  discounts: [
    {
      threshold: 10,
      priceOff: 15
    },
    {
      threshold: 20,
      priceOff: 25
    }
  ]
};

export const prmPlan: Plan = {
  id: 'plan_5iIonqaehig4',
  price: 1998,
  tier: 'premium',
  cycle: 'year',
  discounts: [
    {
      threshold: 10,
      priceOff: 100
    },
    {
      threshold: 20,
      priceOff: 200
    }
  ]
}

export const products: Product[] = [
  {
    id: 'prod_IxN4111S1TIP',
    tier: 'standard',
    heading: '标准会员',
    smallPrint: null,
    description: [
      '专享订阅内容每日仅需0.7元(或按月订阅每日0.9元)',
      '精选深度分析',
      '中英双语内容',
      '金融英语速读训练',
      '英语原声电台',
      '无限浏览7日前所有历史文章（近8万篇）'
    ],
    plan: stdPlan
  },
  {
    id: 'prod_dcHBCHaBTn3w',
    tier: 'premium',
    heading: '高端会员',
    smallPrint: '注：所有活动门票不可折算现金、不能转让、不含差旅与食宿',
    description: [
      '专享订阅内容每日仅需5.5元',
      '享受“标准会员”所有权益',
      '编辑精选，总编/各版块主编每周五为您推荐本周必读资讯，分享他们的思考与观点',
      'FT中文网2018年度论坛门票2张，价值3999元/张 （不含差旅与食宿）'
    ],
    plan: prmPlan
  }
];
