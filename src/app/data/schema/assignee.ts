export interface Assignee {
  ftcId: string | null;
  email: string | null;
  userName: string | null;
  isVip: boolean;
}

export interface Staffer {
  email: string;
  teamId: string;
  ftcId: string | null;
}

export interface StaffList {
  total: number;
  data: Staffer[];
}
