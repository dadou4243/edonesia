import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

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
        `${environment.API_URL}/trip/`
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

  getTrip(id): Observable<any> {
    // console.log(id);
    return this.http.get<any>(`${environment.API_URL}/trip/${id}`);
  }

  addTrip(trip): Observable<any> {
    console.log('ADD TRIP SERVICE', trip);
    return this.http.post<any>(`${environment.API_URL}/trip`, trip);
  }

  searchTrip(searchString): Observable<any> {
    // console.log(id);
    return this.http.get<any>(
      `${environment.API_URL}/trip/search/${searchString}`
    );
  }

  getTripContext(id): Observable<any> {
    // console.log(id);
    return this.http.get<any>(`${environment.API_URL}/context/${id}`);
  }

  deleteTrip(tripId): Observable<any> {
    // console.log('DELETE TRIP SERVICE', tripId);
    return this.http.delete<any>(`${environment.API_URL}/trip/${tripId}`);
  }

  deleteManyTrips(tripsIds): Observable<any> {
    // console.log('DELETE MANY TRIPS SERVICE', tripsIds);
    return this.http.post<any>(
      `${environment.API_URL}/trip/deleteMany`,
      tripsIds
    );
  }

  updateTrip(trip, overwrite): Observable<any> {
    console.log('UPDATE TRIP SERVICE', trip);
    return this.http.post<any>(`${environment.API_URL}/trip/${trip._id}`, {
      tripData: trip,
      overwrite
    });
  }

  // deleteManyTrips(tripsIds): Observable<any> {
  //   return this.http.delete<any>(`${environment.API_URL}/trip`, {
  //     tripsIds
  //   });
  // }
}
