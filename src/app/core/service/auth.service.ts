import { Injectable } from '@angular/core';
import { Passport, Credentials } from 'src/app/data/schema/admin';

function isExpired(pp: Passport): boolean {
  return (Date.now() / 1000) > pp.expiresAt;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  passport: Passport | null = null;

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
      id: '',
      email: credentials.email,
      displayName: null,
      active: true,
      verified: false,
      teamId: '',
      expiresAt: Date.now() / 1000 + 86400,
      token: '',
    };

    this.passport = pp;

    return pp;
  }

  singUp(credentials: Credentials): Passport {
    const pp: Passport =  {
      id: '',
      email: credentials.email,
      displayName: null,
      active: true,
      verified: false,
      teamId: '',
      expiresAt: Date.now() / 1000 + 86400,
      token: '',
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
