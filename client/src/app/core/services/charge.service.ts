import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {
  constructor(private http: HttpClient) {}

  chargeCustomer(payment): Observable<any> {
    console.log('CHARGE CUSTOMER SERVICE', payment);
    return this.http.post<any>(`${environment.API_URL}/charge`, payment);
  }
}
