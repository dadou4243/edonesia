import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookingsService } from 'src/app/core/services/bookings.service';
import { Store, select } from '@ngrx/store';
import {
  RequestState,
  SetCurrentIndex,
  getCurrentStepIndex,
  getFormValue,
  SetFormValue
} from 'src/app/store/request';
import {
  destinations,
  purposeOptions,
  hotelOptions,
  activityOptions
} from '../data';

@Component({
  selector: 'app-request-questions',
  templateUrl: './request-questions.component.html',
  styleUrls: ['./request-questions.component.scss']
})
export class RequestQuestionsComponent implements OnInit {
  datePlanned = true;
  requestForm: FormGroup;
  currentStepIndex: number;
  formValue: any;
  destinations = destinations;
  purposeOptions = purposeOptions;
  hotelOptions = hotelOptions;
  activityOptions = activityOptions;

  constructor(
    private fb: FormBuilder,
    private bookingsService: BookingsService,
    private store: Store<RequestState>
  ) {
    this.store.pipe(select(getCurrentStepIndex)).subscribe(index => {
      this.currentStepIndex = index;
    });
    this.store.pipe(select(getFormValue)).subscribe(formValue => {
      console.log('formValue:', formValue);
      this.formValue = formValue;
    });
  }

  ngOnInit() {
    this.requestForm = this.fb.group({
      firstName: ['', [Validators.required]]
    });
  }

  onClickNext() {
    this.store.dispatch(
      SetCurrentIndex({ currentStepIndex: this.currentStepIndex + 1 })
    );
  }

  onClickPrevious() {
    this.store.dispatch(
      SetCurrentIndex({ currentStepIndex: this.currentStepIndex - 1 })
    );
  }

  onUpdateStepValues(value) {
    console.log('value:', value);
    this.store.dispatch(SetFormValue({ stepValues: value }));
    // this.onClickNext();
  }

  submitRequest() {
    this.bookingsService.addBooking(this.requestForm.value).subscribe(res => {
      console.log('res', res);
    });
  }
}
