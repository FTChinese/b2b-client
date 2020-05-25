import { Product, Plan } from './schema/product';
import { Licence } from './schema/licence';
import { Invitation } from './schema/invitation';
import { Staffer } from './schema/assignee';
import { Checkout } from './schema/transaction';

export function randomString(): string {
  return Math.random().toString(36).substring(2, 15);
}

const RANGE = (x, y) => Array.from((function*() {
  while (x <= y) { yield x++; }
})());

export const stdPlan: Plan = {
  id: 'plan_ICMPPM0UXcpZ',
  price: 258,
  tier: 'standard',
  cycle: 'year',
  discounts: [
    {
      id: 1,
      threshold: 10,
      priceOff: 15
    },
    {
      id: 2,
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
      id: 3,
      threshold: 10,
      priceOff: 100
    },
    {
      id: 4,
      threshold: 20,
      priceOff: 200
    }
  ]
};

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

const createdUtc = '2020-05-05T17:19:00Z';

function licenceID(): string {
  return `lic_${randomString()}`;
}

export const licences: Licence[] = [
  {
    id: licenceID(),
    teamId: '',
    expireDate: '2021-05-20',
    trialStart: '2020-05-05',
    trialEnd: '2020-05-12',
    status: 'available',
    createdUtc,
    updatedUtc: createdUtc,
    lastInvitationId: null,
    lastInviteeEmail: null,
    plan: stdPlan,
    assignee: {
      ftcId: null,
      email: null,
      userName: null,
      isVip: false,
    },
  },
  {
    id: licenceID(),
    teamId: '',
    expireDate: '2021-05-20',
    trialStart: '2020-05-05',
    trialEnd: '2020-05-12',
    status: 'invited',
    createdUtc,
    updatedUtc: createdUtc,
    lastInvitationId: invitationID(),
    lastInviteeEmail: 'testA@example.rog',
    plan: stdPlan,
    assignee: {
      ftcId: null,
      email: null,
      userName: null,
      isVip: false,
    },
  },
  {
    id: licenceID(),
    teamId: '',
    expireDate: '2021-05-20',
    trialStart: '2020-05-05',
    trialEnd: '2020-05-12',
    status: 'granted',
    createdUtc,
    updatedUtc: createdUtc,
    lastInvitationId: invitationID(),
    lastInviteeEmail: 'testB@example.org',
    plan: stdPlan,
    assignee: {
      ftcId: randomString(),
      email: 'testB@example.org',
      userName: 'test user b',
      isVip: false,
    },
  },
  {
    id: licenceID(),
    teamId: '',
    expireDate: '2021-05-20',
    trialStart: '2020-05-05',
    trialEnd: '2020-05-12',
    status: 'granted',
    createdUtc,
    updatedUtc: createdUtc,
    lastInvitationId: invitationID(),
    lastInviteeEmail: 'testC@example.org',
    plan: prmPlan,
    assignee: {
      ftcId: randomString(),
      email: 'testC@example.org',
      userName: 'test user c',
      isVip: false,
    },
  }
];

export function invitationID(): string {
  return `inv_${randomString()}`;
}

const teamId = `team_${randomString()}`;

function generateEmail(): string {
  return `${Math.random().toString(36).substring(2, 6)}@example.org`;
}

export const invitations: Invitation[] = [
  {
    id: invitationID(),
    licenceId: licenceID(),
    teamId,
    email: generateEmail(),
    description: null,
    expirationDays: 7,
    status: 'created',
    createdUtc,
    updatedUtc: createdUtc,
  },
  {
    id: invitationID(),
    licenceId: licenceID(),
    teamId,
    email: generateEmail(),
    description: null,
    expirationDays: 7,
    status: 'accepted',
    createdUtc,
    updatedUtc: createdUtc,
  },
  {
    id: invitationID(),
    licenceId: licenceID(),
    teamId,
    email: generateEmail(),
    description: null,
    expirationDays: 7,
    status: 'revoked',
    createdUtc,
    updatedUtc: createdUtc,
  }
];

export const checkouts: Checkout[] = [
  {
    id: `chk_${randomString()}`,
    teamId,
    totalAmount: 10000,
    createdUtc,
    status: 'paid',
    confirmedUtc: createdUtc,
    items: [
      {
        plan: stdPlan,
        discount: stdPlan.discounts[0],
        create: 10,
        renewal: licences.map(l => l.id),
      },
      {
        plan: prmPlan,
        discount: prmPlan.discounts[1],
        create: 5,
        renewal: licences.map(l => l.id)
      }
    ]
  },
  {
    id: `chk_${randomString()}`,
    teamId,
    totalAmount: 10000,
    status: 'unpaid',
    confirmedUtc: null,
    createdUtc,
    items: [
      {
        plan: stdPlan,
        discount: stdPlan.discounts[0],
        create: 10,
        renewal: licences.map(l => l.id),
      },
      {
        plan: prmPlan,
        discount: prmPlan.discounts[1],
        create: 5,
        renewal: licences.map(l => l.id)
      }
    ]
  }
];

export const staff: Staffer[] = [
  {
    email: generateEmail(),
    teamId,
    ftcId: randomString(),
  },
  {
    email: generateEmail(),
    teamId,
    ftcId: null,
  },
  {
    email: generateEmail(),
    teamId,
    ftcId: randomString(),
  }
];
