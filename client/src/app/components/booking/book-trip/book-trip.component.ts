import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-trip',
  templateUrl: './book-trip.component.html',
  styleUrls: ['./book-trip.component.scss']
})
export class BookTripComponent implements OnInit {
  tripForm: FormGroup;

  constructor(private fb: FormBuilder) {}

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
  }
}
