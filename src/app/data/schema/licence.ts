import { LicenceStatus } from './enum';
import { Plan } from './product';

export interface Assignee {
  ftcId: string | null;
  email: string | null;
  userName: string | null;
  isVip: boolean;
}

export interface Licence {
  id: string;
  teamId: string;
  expireDate: string | null;
  trialStart: string | null;
  trialEnd: string | null;
  status: LicenceStatus | null;
  createdUtc: string | null;
  updatedUtc: string | null;
  lastInvitationId: string | null;
  lastInviteeEmail: string | null;
  plan: Plan;
  assignee: Assignee;
}
