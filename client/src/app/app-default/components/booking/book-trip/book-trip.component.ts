import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingsService } from 'src/app/core/services/bookings.service';

@Component({
  selector: 'app-book-trip',
  templateUrl: './book-trip.component.html',
  styleUrls: ['./book-trip.component.scss']
})
export class BookTripComponent implements OnInit {
  tripForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookingsService: BookingsService
  ) {}

  ngOnInit() {
    this.tripForm = this.fb.group({
      firstName: ['', [Validators.required]],
      // hebrew: ['', [Validators.required, Validators.pattern(/^[א-ת\s]+$/)]],
      createdAt: ['']
      // french: ['', [Validators.required]],
      // pronunciation: [''],
      // type: [''],
      // forme: [''],
      // time: [''],
      // genre: [''],
      // number: [''],
      // infinitif: ['']
    });
  }

  onNoClick(): void {}

  resetForm() {}

  onSubmit() {
    console.log(this.tripForm.value);
    this.tripForm.patchValue({
      createdAt: Date.now()
    });
    this.bookingsService.addBooking(this.tripForm.value).subscribe(booking => {
      console.log('booking', booking);
    });
  }
}
