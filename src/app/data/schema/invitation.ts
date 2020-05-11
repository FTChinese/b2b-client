import { InvitationStatus } from './enum';

export interface Invitation {
  id: string;
  licenceId: string;
  teamId: string;
  email: string;
  description: string | null;
  expirationDays: number;
  status: InvitationStatus;
  createdUtc: string;
  updatedUtc: string;
}

export interface InviationList {
  total: number;
  data: Invitation[];
}
