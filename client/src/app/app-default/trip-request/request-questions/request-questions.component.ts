import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookingsService } from 'src/app/core/services/bookings.service';
import Lightpick from 'lightpick';

@Component({
  selector: 'app-request-questions',
  templateUrl: './request-questions.component.html',
  styleUrls: ['./request-questions.component.scss']
})
export class RequestQuestionsComponent implements OnInit {
  currentStep = 1;
  datePlanned = true;
  requestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookingsService: BookingsService
  ) {}

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
    this.currentStep++;
  }

  onClickPrevious() {
    this.currentStep--;
  }

  onClickDatePlanned(answer) {
    this.datePlanned = answer;
    this.onClickNext();
  }

  submitRequest() {
    this.bookingsService.addBooking(this.requestForm.value).subscribe(res => {
      console.log('res', res);
    });
  }
}
