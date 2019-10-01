import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingsService } from 'src/app/core/services/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookings: Observable<any>;

  constructor(private bookingsService: BookingsService) {}

  ngOnInit() {
    this.bookings = this.bookingsService.getBookings();
  }
}
