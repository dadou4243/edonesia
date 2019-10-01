import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TripsService } from 'src/app/core/services/trips.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.scss']
})
export class EditTripComponent implements OnInit {
  tripId;
  tripDetails$: Observable<any>;
  tripForm: FormGroup;
  tripDetails: any;

  constructor(
    private route: ActivatedRoute,
    private tripsService: TripsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => (this.tripId = params.get('id')))
    );
    this.route.paramMap.subscribe(params => {
      console.log('res:', params);
      this.tripId = params.get('id');
      console.log('this.tripId:', this.tripId);

      this.tripDetails$ = this.tripsService.getTrip(this.tripId);

      this.tripDetails$.subscribe(res => {
        console.log('res:', res);
        this.tripDetails = res;

        this.initTripForm();
      });
    });
  }

  initTripForm() {
    this.tripForm = this.fb.group({
      title: [this.tripDetails.title, [Validators.required]],
      description: [this.tripDetails.description, [Validators.required]],
      price: [this.tripDetails.price],
      category: [this.tripDetails.category],
      _id: [this.tripDetails._id]
    });
  }

  onClickSave() {
    console.log('onClickSave');
    this.tripsService.updateTrip(this.tripForm.value).subscribe(res => {
      console.log('res', res);
    });
  }
}
