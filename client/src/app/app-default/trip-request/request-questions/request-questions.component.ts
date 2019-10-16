import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookingsService } from 'src/app/core/services/bookings.service';
import Lightpick from 'lightpick';
import { Store, select } from '@ngrx/store';
import {
  RequestState,
  SetCurrentIndex,
  getCurrentStepIndex,
  getStepsValues,
  SetStepValues
} from 'src/app/store/request';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request-questions',
  templateUrl: './request-questions.component.html',
  styleUrls: ['./request-questions.component.scss']
})
export class RequestQuestionsComponent implements OnInit {
  datePlanned = true;
  requestForm: FormGroup;
  currentStepIndex: number;
  stepsValues: any;

  constructor(
    private fb: FormBuilder,
    private bookingsService: BookingsService,
    private store: Store<RequestState>
  ) {
    this.store.pipe(select(getCurrentStepIndex)).subscribe(index => {
      this.currentStepIndex = index;
    });
    this.store.pipe(select(getStepsValues)).subscribe(index => {
      this.stepsValues = index;
    });
  }

  ngOnInit() {
    this.requestForm = this.fb.group({
      firstName: ['', [Validators.required]]
    });

    const picker = new Lightpick({
      field: document.getElementById('start-date'),
      secondField: document.getElementById('end-date'),
      singleDate: false,
      onSelect(start, end) {
        let str = '';
        str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
        str += end ? end.format('Do MMMM YYYY') : '...';
        console.log('str:', str);
      }
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

  onUpdateStepValues(answer) {
    this.store.dispatch(
      SetStepValues({ stepValues: { isDatePlanned: answer } })
    );
    this.onClickNext();
  }

  submitRequest() {
    this.bookingsService.addBooking(this.requestForm.value).subscribe(res => {
      console.log('res', res);
    });
  }
}
