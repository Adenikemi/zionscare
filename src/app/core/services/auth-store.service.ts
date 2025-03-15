import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  private _authToken: string | null = null;

  constructor() {}

  setToken(token: string) {
    this._authToken = token;
  }

  getToken(): string | null {
    return this._authToken;
  }

  clearToken() {
    this._authToken = null;
  }
}
