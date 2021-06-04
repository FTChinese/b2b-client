import { LicenceStatus } from './enum';
import { Edition, Price } from './product';
import { Assignee } from './assignee';
import { parseISO, isBefore } from 'date-fns';
import { Invitation } from './invitation';

// All licence should have a Renw button;
// Only standard version has Upgrade button;
export interface Licence extends Edition {
  id: string;
  teamId: string;
  periodStartUtc: string;
  periodEndUtc: string;
  trialStartUtc: string | null;
  trialEndUtc: string | null;
  // available: admin could send invitation
  // invited: admin could revoke the invitation
  // granted: admin could revoke the licence
  status: LicenceStatus | null;
  createdUtc: string | null;
  updatedUtc: string | null;
  lastInvitation: Invitation;
  lastPrice: Price;
  assignee: Assignee;
}

export function isExpired(l: Licence): boolean {
  return isBefore(parseISO(l.periodEndUtc), new Date());
}

export interface LicenceList {
  total: number;
  data: Licence[];
}
