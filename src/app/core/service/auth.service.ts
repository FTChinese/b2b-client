import { Injectable } from '@angular/core';
import { Passport } from 'src/app/data/schema/admin';
import { Credentials } from 'src/app/data/schema/form-data';

function isExpired(pp: Passport): boolean {
  return (Date.now() / 1000) > pp.expiresAt;
}

function randomString(): string {
  return Math.random().toString(36).substring(2, 15);
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  passport: Passport | null = null;

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

    this.passport = pp;

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

    this.passport = pp;

    return pp;
  }

  /**
   * @todo Redirect to login.
   */
  logout() {
    this.passport = null;
    localStorage.removeItem(this.storeKey);
  }
}
