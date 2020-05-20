import { Injectable } from '@angular/core';
import { Passport } from 'src/app/data/schema/admin';
import { Credentials, Team } from 'src/app/data/schema/form-data';
import { randomString } from 'src/app/data/mock';

function isExpired(pp: Passport): boolean {
  return (Date.now() / 1000) > pp.expiresAt;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  passport: Passport | null = null;
  team: Team | null = null;

  redirectUrl: string;
  private storeKey = 'ftc_b2b';

  get isLoggedIn(): boolean {
    if (!this.passport) {
      const val = localStorage.getItem(this.storeKey);
      if (val) {
        this.passport = JSON.parse(val);
      }
    }

    if (!this.passport) {
      return false;
    }

    if (isExpired(this.passport)) {
      this.logout();
      return false;
    }

    return true;
  }

  get isTeamSet(): boolean {
    if (!this.passport) {
      return false;
    }

    return !!this.passport.teamId;
  }

  get displayName(): string {
    if (!this.passport) {
      return '';
    }

    if (this.passport.displayName) {
      return this.passport.displayName;
    }

    return this.passport.email.split('@')[0];
  }

  constructor() { }

  private savePassport(pp: Passport) {
    window.localStorage.setItem(this.storeKey, JSON.stringify(pp));
    this.passport = pp;
  }

  login(credentials: Credentials): Passport {
    const pp: Passport = {
      id: randomString(),
      email: credentials.email,
      displayName: null,
      active: true,
      verified: false,
      teamId: null,
      expiresAt: Date.now() / 1000 + 86400,
      token: `${randomString()}.${randomString()}.${randomString}`,
    };

    this.savePassport(pp);

    return pp;
  }

  singUp(credentials: Credentials): Passport {
    const pp: Passport =  {
      id: randomString(),
      email: credentials.email,
      displayName: null,
      active: true,
      verified: false,
      teamId: null,
      expiresAt: Date.now() / 1000 + 86400,
      token: `${randomString()}.${randomString()}.${randomString}`,
    };

    this.savePassport(pp);

    return pp;
  }

  /**
   * @todo Redirect to login.
   */
  logout() {
    this.passport = null;
    localStorage.removeItem(this.storeKey);
  }

  createTeam(team: Team) {
    this.team = team;
    this.passport.teamId = randomString();
  }

  updateTeam(team: Team) {
    this.team = team;
  }
}
