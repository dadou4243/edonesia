import { Injectable } from '@angular/core';

import * as jwt_decode from 'jwt-decode';
import { IDecodedToken } from '../interfaces/decodedToken.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor() {}

  decodedToken(): any {
    try {
      return jwt_decode(this.getToken());
    } catch (Error) {
      return null;
    }
  }

  getToken(): string {
    return window.localStorage.getItem('jwt_token');
  }

  checkIfTokenValid() {
    if (this.getToken()) {
      const now = new Date().getTime() / 1000;
      // console.log('decodedToken service', this.decodedToken());
      const exp = parseInt(this.decodedToken().exp, 10);
      return of(exp > now);
    } else {
      return of(false);
    }
  }

  saveToken(token: string) {
    console.log('token:', token);
    window.localStorage.setItem('jwt_token', token);
  }

  destroyToken() {
    window.localStorage.removeItem('jwt_token');
  }

  get currentUser(): IDecodedToken {
    // console.log(this.decodeToken(this.getToken()));
    return this.decodedToken();
  }
}
