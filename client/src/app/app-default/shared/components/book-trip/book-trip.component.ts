import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingsService } from 'src/app/core/services/bookings.service';

@Component({
  selector: 'app-book-trip',
  templateUrl: './book-trip.component.html',
  styleUrls: ['./book-trip.component.scss']
})
export class BookTripComponent implements OnInit {
  @Input() tripId: any;
  tripForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookingsService: BookingsService
  ) {}

  ngOnInit() {
    this.tripForm = this.fb.group({
      firstName: ['', [Validators.required]]
      // hebrew: ['', [Validators.required, Validators.pattern(/^[א-ת\s]+$/)]],
      // french: ['', [Validators.required]],
      // pronunciation: [''],
      // type: [''],
      // forme: [''],
      // time: [''],
      // genre: [''],
      // number: [''],
      // infinitif: ['']
    });

    console.log(this.tripId);
  }

  onNoClick(): void {}

  resetForm() {}

  onSubmit() {
    console.log(this.tripForm.value);

    const dataToSend = {
      ...this.tripForm.value,
      createdAt: Date.now(),
      tripId: this.tripId
    };
    this.bookingsService.addBooking(dataToSend).subscribe(booking => {
      console.log('booking', booking);
    });
  }
}
