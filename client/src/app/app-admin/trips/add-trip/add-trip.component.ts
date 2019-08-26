import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripsService } from 'src/app/core/services/trips.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent implements OnInit {
  userForm: FormGroup;

  // roles = [
  //   { value: 'admin', viewValue: 'admin' },
  //   { value: 'user', viewValue: 'user' }
  // ];

  constructor(private fb: FormBuilder, private tripsService: TripsService) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]]
      // lastName: ['', [Validators.required]],
      // email: ['', [Validators.required]],
      // role: ['', [Validators.required]],
      // password: ['']
    });
  }

  resetForm() {}

  onSubmit() {
    console.log(this.userForm.value);
    this.tripsService.addTrip(this.userForm.value).subscribe(result => {
      console.log(result);
    });
  }
}
