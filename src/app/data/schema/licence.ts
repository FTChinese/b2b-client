import { LicenceStatus } from './enum';
import { Plan } from './product';
import { Assignee } from './assignee';
import { parseISO, isBefore } from 'date-fns';

// All licence should have a Renw button;
// Only standard version has Upgrade button;
export interface Licence {
  id: string;
  teamId: string;
  expireDate: string | null;
  trialStart: string | null;
  trialEnd: string | null;
  // available: admin could send invitation
  // invited: admin could revoke the invitation
  // granted: admin could revoke the licence
  status: LicenceStatus | null;
  createdUtc: string | null;
  updatedUtc: string | null;
  lastInvitationId: string | null;
  lastInviteeEmail: string | null;
  plan: Plan;
  assignee: Assignee;
}

export function isExpired(l: Licence): boolean {
  return isBefore(parseISO(l.expireDate), new Date());
}

export interface LicenceList {
  total: number;
  data: Licence[];
}
