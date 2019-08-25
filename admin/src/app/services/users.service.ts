import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    console.log('payload GET USERS SERVICE:');
    // const sortOrder = payload.sortOrder;
    // const pageNumber = payload.pageNumber;
    // const pageSize = payload.pageSize;
    // console.log('GET TRIPS SERVICE', sortOrder, pageNumber, pageSize);
    return this.http
      .get<any>(
        `${environment.API_URL}/user/`
        // , {
        //   params: new HttpParams()
        // .set('filter', filter)
        // .set('sortOrder', sortOrder)
        // .set('pageNumber', pageNumber.toString())
        // .set('pageSize', pageSize.toString())
        // }
      )
      .pipe(map(result => result.data));
  }

  addUser(trip): Observable<any> {
    console.log('ADD User SERVICE', trip);
    return this.http.post<any>(`${environment.API_URL}/user`, trip);
  }
}
