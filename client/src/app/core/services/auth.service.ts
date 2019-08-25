import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  logIn(logInForm) {
    console.log('loginForm service', logInForm);
    return this.http.post<any>(`${environment.API_URL}/auth/login`, logInForm, {
      withCredentials: true
    });
  }

  logOut() {
    return this.http.get<any>(`${environment.API_URL}/auth/logout`);
  }

  signUp(signUpForm) {
    return this.http.post<any>(`${environment.API_URL}/user`, signUpForm);
  }
}
