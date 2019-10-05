import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserInfo(userID) {
    console.log('userID:', userID);
    return this.http
      .get<any>(`${environment.API_URL}/user/${userID}`)
      .pipe(map(res => res.data));
  }
}
