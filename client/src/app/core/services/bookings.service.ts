import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  constructor(private http: HttpClient) {}

  getBookings(): Observable<any> {
    console.log('payload GET TRIPS SERVICE:');
    // const sortOrder = payload.sortOrder;
    // const pageNumber = payload.pageNumber;
    // const pageSize = payload.pageSize;
    // console.log('GET TRIPS SERVICE', sortOrder, pageNumber, pageSize);
    return this.http
      .get<any>(
        `${environment.API_URL}/booking/`
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

  getBooking(id): Observable<any> {
    // console.log(id);
    return this.http.get<any>(`${environment.API_URL}/booking/${id}`);
  }

  addBooking(booking): Observable<any> {
    console.log('ADD BOOKING SERVICE', booking);
    return this.http.post<any>(`${environment.API_URL}/booking`, booking);
  }

  searchBooking(searchString): Observable<any> {
    // console.log(id);
    return this.http.get<any>(
      `${environment.API_URL}/booking/search/${searchString}`
    );
  }

  getBookingContext(id): Observable<any> {
    // console.log(id);
    return this.http.get<any>(`${environment.API_URL}/context/${id}`);
  }

  deleteBooking(bookingId): Observable<any> {
    // console.log('DELETE TRIP SERVICE', bookingId);
    return this.http.delete<any>(`${environment.API_URL}/booking/${bookingId}`);
  }

  deleteManyBookings(bookingsIds): Observable<any> {
    // console.log('DELETE MANY TRIPS SERVICE', bookingsIds);
    return this.http.post<any>(
      `${environment.API_URL}/booking/deleteMany`,
      bookingsIds
    );
  }

  updateBooking(booking, overwrite): Observable<any> {
    console.log('UPDATE TRIP SERVICE', booking);
    return this.http.post<any>(
      `${environment.API_URL}/booking/${booking._id}`,
      {
        bookingData: booking,
        overwrite
      }
    );
  }

  // deleteManyBookings(bookingsIds): Observable<any> {
  //   return this.http.delete<any>(`${environment.API_URL}/booking`, {
  //     bookingsIds
  //   });
  // }
}
