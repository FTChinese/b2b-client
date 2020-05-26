import { Tier, Cycle, InvitationStatus } from './enum';

export const tiers: Record <Tier, string> = {
  standard: '标准版',
  premium: '高端版'
};

export const cycles: Record<Cycle, string> = {
  month: '月',
  year: '年'
};

export const invitationStatus: Record<InvitationStatus, string> = {
  created: '已发送',
  accepted: '已接受',
  revoked: '已撤销'
};
