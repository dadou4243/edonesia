import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  withCredentials: true
};
@Injectable({
  providedIn: 'root'
})
export class TripsService {
  constructor(private http: HttpClient) {}

  getTrips(): Observable<any> {
    console.log('payload GET TRIPS SERVICE:');
    // const sortOrder = payload.sortOrder;
    // const pageNumber = payload.pageNumber;
    // const pageSize = payload.pageSize;
    // console.log('GET TRIPS SERVICE', sortOrder, pageNumber, pageSize);
    return this.http
      .get<any>(
        `${environment.API_URL}/trip/`,
        httpOptions
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

  addTrip(trip): Observable<any> {
    console.log('ADD TRIP SERVICE', trip);
    return this.http.post<any>(`${environment.API_URL}/trip`, trip);
  }
}
