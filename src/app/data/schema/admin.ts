export interface AdminAccount {
  id: string;
  email: string;
  displayName: string | null;
  active: boolean;
  verified: boolean;
}

export interface Passport extends AdminAccount {
  teamId: string | null;
  expiresAt: number;
  token: string;
}
