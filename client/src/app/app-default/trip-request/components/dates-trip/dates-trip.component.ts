import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges
} from '@angular/core';
import Lightpick from 'lightpick';

@Component({
  selector: 'app-dates-trip',
  templateUrl: './dates-trip.component.html',
  styleUrls: ['./dates-trip.component.scss']
})
export class DatesTripComponent implements OnInit, OnChanges {
  @Input() departureDate;
  @Input() arrivalDate;
  @Output() dateConfirmed = new EventEmitter();

  tempDepartureDate;
  tempArrivalDate;
  error: string;

  constructor() {}

  ngOnInit() {
    const picker = new Lightpick({
      field: document.getElementById('start-date'),
      secondField: document.getElementById('end-date'),
      singleDate: false,
      onSelect: (start, end) => {
        this.tempDepartureDate = start ? start.format('DD/MM/YYYY') : '';
        this.tempArrivalDate = end ? end.format('DD/MM/YYYY') : '';
      }
    });
  }

  ngOnChanges() {
    this.tempDepartureDate = this.departureDate;
    this.tempArrivalDate = this.arrivalDate;
  }

  onDepartureDateChange(date) {
    this.tempDepartureDate = date;
    this.dateConfirmed.emit({
      arrivalDate: this.tempArrivalDate,
      departureDate: this.tempDepartureDate
    });
  }

  onArrivaleDateChange(date) {
    this.tempArrivalDate = date;
    this.dateConfirmed.emit({
      arrivalDate: this.tempArrivalDate,
      departureDate: this.tempDepartureDate
    });
  }

  onClickConfirm() {
    this.error = '';

    console.log('this.tempDepartureDate:', this.tempDepartureDate);
    console.log('this.tempArrivalDate:', this.tempArrivalDate);
    if (!this.tempDepartureDate || !this.tempArrivalDate) {
      this.error = 'You must fill a departure and arrival date.';
      return;
    }

    // this.dateConfirmed.emit({
    //   arrivalDate: this.tempArrivalDate,
    //   departureDate: this.tempDepartureDate
    // });
  }
}
